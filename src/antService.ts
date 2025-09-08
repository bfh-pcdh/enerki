import { WebUsbStick, HeartRateSensor, BicyclePowerSensor } from 'ant-plus-next';

export type AntSubscription = {
    target: number; 
    total: number; 
    value: number; 
    percent: number
}
export type AntCallback = (current: AntSubscription) => void;

type Quantity = {
    value: number;
    unit: string;
}

/**
 * Abstract class as base for the actual ANT+ services
 *  -> see PowerService for bicycle power meter
 *  -> see HeartRateService for Heart rate sensor
 */
export abstract class AntService {
    protected stick: WebUsbStick | undefined;
    private subscriptions = new Array<AntCallback>();
    abstract sensor: BicyclePowerSensor | HeartRateSensor | undefined;
    abstract unit: string;          // the unit for target and total
    protected target: number = 0;     // the target value
    protected total: number = 0;      // the total effort since last reset
    protected value: number = 0;      // the current effort

    constructor() {
        try {
            this.stick = new WebUsbStick();
            this.stick.on('shutdown', () => {
                console.log('Stick shutdown detected');
            });

            this.stick.on('unhandled', (data) => {
                console.warn('Unhandled event received:', data);
            });

        } catch (e) {
            console.log('caught an error', e);
        }
    }

    /**
     * Method to check if WebUSB is available in the browser and thus the 
     * stick was initialized.
     * @returns     TRUE if the stick has been initialized
     *              FALSE if the stick could not have been initialized
     *                    (usually the case if the browser does not 
     *                     support WebUSB (only Chrome does))
     */
    stickAvailable(): boolean {
        return this.stick != undefined;
    }

    /**
     * Launch sensor and connect stick
     * ⚠️ Keep in mind that this method MUST be called by user action!
     */
    connect() {
        try {
            this.stick?.on('startup', () => {
                console.log('Stick initialized successfully with sensor of type ' + typeof this.sensor + '.');
                this.sensor?.attach(0, 0);
            });

            this.stick?.open().then((o) => {
                console.log('stick opened', o);
                return () => {
                    if (this.stick) {
                        this.stick.close();
                    }
                };
            });
        }
        catch(e) {
            console.error('USB Connection failed', e);
        }
    }

    /**
     * Starts a new measurement and subscribes to it.
     * Cave: Resets existing subscriptions!
     * @param target            the target value, in the same unit as the total value for the respective sensor
     * @param callback          a function that is triggered every time the sensor delivers a new value
     *                          the callback function is called with these parameters:
     *                            - target:     the currently set target
     *                            - total:      the current accumulated total of effort
     *                            - value:      the current value reported by the sensor
     *                            - percent:    the percentage of the target reached yet
     * @param autoUnsubscribe?  if the subscription should end when more than 100% is reached
     * @returns                 the index of the subscription (use to unsubscribe)
     */
    startAndSubscribe(target: number, callback: AntCallback, autoUnsubscribe?: boolean): number {
        if (this.total < this.target) {
            console.warn('Reset existing measurement that was not completed yet!');
        }
        this.reset(target);
        const subscriptionID = this.subscribe((e) => {
            if (autoUnsubscribe) {
                if (e.percent > 100) {
                    this.unsubscribe(subscriptionID);
                }
                callback({
                    ...e,
                    percent: Math.min(e.percent, 100)
                });
            } else {
                callback(e);
            }
            
        });
        return subscriptionID;
    }

    /**
     * Set a new target value
     * @param target    the target value, in the same unit as the total value for the respective sensor
     */
    setTarget(target: number) {
        this.target = target;
    }

    /**
     * Subscribe to updates on the sensor. 
     * @param callback  a function that is triggered every time the sensor delivers a new value
     *                  the callback function is called with these parameters:
     *                   - target:     the currently set target
     *                   - total:      the current accumulated total of effort
     *                   - value:      the current value reported by the sensor
     *                   - percent:    the percentage of the target reached yet
     * @returns         the index of the subscription (use to unsubscribe)
     */
    subscribe(callback: AntCallback): number {
        return this.subscriptions.push(callback) - 1;
    }

    /**
     * Get the current values of the sensor (from last update)
     * @returns target:     the currently set target
     *          total:      the current accumulated total of effort
     *          value:      the current value reported by the sensor
     *          percent:    the percentage of the target reached yet
     */
    getValues() {
        return {
            target: this.target,
            total: this.total,
            value: this.value,
            percent: this.total / this.target * 100
        };
    }

    /**
     * Unsubscribe from a sensor
     * @param subscriptionIndex the index of your subscription (as returned by subscribe())
     */
    unsubscribe(subscriptionIndex: number) {
        this.subscriptions.splice(subscriptionIndex, 1);
    }

    /**
     * Updates the value and total and notifies the subscribers (only if a total is set, to avoid division by 0)
     * @param newValue  new current value
     * @param newTotal  new total value
     */
    protected updateValue(newValue: number, newTotal: number) {
        this.value = newValue;
        this.total = newTotal;
        if (this.target > 0) {
            this.subscriptions.forEach((sub) => sub({
                target: this.target,
                total: this.total,
                value: this.value,
                percent: this.total / this.target * 100
            }));
        } else {
            console.warn('No target set yet, do not notify subscribers!');
        }
    }

    /**
     * Reset the measurements
     * @param target?   Optional value to set new target (default is resetting target to 0)
     */
    reset(target: number = 0) {
        this.total = 0;
        this.value = 0;
        this.target = target;
    }
}

interface PowerData {
    AccumulatedPower: number;   // ?
    Cadence: number;            // pedal crank rotations per minute (current value)
    DeviceId: number;           // id of device
    Power: number;              // power (current value) in watt
                                // problem: if power goes to 0, the previous value is still sent every time
    offset: number;             // ?
};

/**
 * Service for reading a bicycle power meter.
 * @param settings?     optional parameter, set it to {debug: true} to use generated data instead of real bicycle sensor data
 *                      for when no sensor is connected to the usb stick (stick needs to be present nonetheless)
 */
export class PowerService extends AntService {
    private debug = false;
    private debugWatt = 0;
    sensor: BicyclePowerSensor | undefined;
    unit = 'Wh';
    lastBeat = 0; // Timestamp in milliseconds
    accumulatedPower = 0; // accumulated power

    /**
     * @param settings?  optional parameter, set it to {debug: true} to use generated data instead of real bicycle sensor data
     *                   for when no sensor is connected to the usb stick (stick needs to be present nonetheless)
     */
    constructor(settings?: {debug: boolean}) {
        super();
        if (settings) {
            this.debug = settings.debug;
        }
        if (this.stick && this.sensor) {
            this.sensor = new BicyclePowerSensor(this.stick);
        }   
    
    }

    /**
     * Resets the measurements
     */
    reset(target: number = 0) {
        super.reset(target);
        this.lastBeat = 0;
        this.accumulatedPower = 0;
        this.debugWatt = 0;
    }

    /**
     * Update the debug watt value. Only use if in debug mode, not when a real sensor is connected.
     * This value is then used for generating fake data. 
     * @param watt  the amount of watt to be used
     */
    setDebugWatt(watt: number) {
        if (this.debug) {
            this.debugWatt = watt;
        } else {
            console.warn('Tried to set watt, but not in debug mode. This is ignored.');
        }
    }

    /**
     * Updates the settings
     * @param settings debug: set to true if you are debugging without a real sensor
     */
    setSettings(settings: {debug: boolean}) {
        this.debug = settings.debug;
    }

    /**
     * Fakes data based on the current set debugWatt value
     * Updates every 1250 ms
     */
    private fakeData() {
        if (this.lastBeat > 0) {
            this.updateValue(
                this.debugWatt,
                this.total + this.getWattHours(this.debugWatt)
            );
        }
        this.lastBeat = Date.now();
        setTimeout(() => this.fakeData(), 1250);
    }

    /**
     * Launch sensor and connect stick (or use test data if in debug mode)
     * ⚠️ Keep in mind that this method MUST be called by user action!
     */
    connect() {
        if (this.debug) { // debug mode with fake data
            this.fakeData();
        } else if (this.sensor) { // prod mode with actual data from power sensor
            super.connect();
            this.sensor.on('powerData', (data: PowerData) => { 
                // the pedals keep sending previous watt value if they are idling (instead of 0), so we have to check if the 
                // user is actually pedalling
                const idle = (this.accumulatedPower == data.AccumulatedPower);
                this.accumulatedPower = data.AccumulatedPower;
                if (!idle && this.lastBeat > 0) {
                    this.updateValue(
                        data.Power,
                        this.total + this.getWattHours(data.Power)
                    );
                }
                this.lastBeat = Date.now();
            });
        }
    }

    /**
     * Calculates the effort in watthours since the last update (assuming watt was constant)
     * @param watts     the power measured since the last update in watt
     * @returns         the watt hours that were generated since the last update
     */
    private getWattHours(watts: number): number {
        const timeDiff = (Date.now() - this.lastBeat) / 1000 / 60 / 60; // hours passed
        return timeDiff * watts;
    }
}

interface HeartRateData {
    BeatCount: number;          // number of heart beats since start of measurement
    BeatTime: number;           // timestamp of last beat
    ComputedHeartRate: number;  // current heart rate
    DeviceId: number;           // id of device
}

/**
 * Service for reading a heart rate monitor.
 * ⚠️ Please mind, that the constructor must be triggered by an user action to work in the Browser
 */
export class HeartRateService extends AntService {
    sensor: HeartRateSensor | undefined;
    unit = 'beats';

    /**
     * Service for reading a heart rate monitor.
     */
    constructor() {
        super();
        if (this.stick) {
            this.sensor = new HeartRateSensor(this.stick);
            this.sensor.on('heartRateData', (data: HeartRateData) => {
                this.updateValue(
                    data.ComputedHeartRate,
                    data.BeatCount
                );
            });
        }
    }
}