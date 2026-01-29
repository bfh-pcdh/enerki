import { reactive, watch } from 'vue';
import { AntCallback, HeartRateService, PowerService } from './antService';
import { Message, QuizCard } from './models';
import QuizService from './quizService';

let activeSubscriptions = new Array<number>();

export enum LANG {
  DE = 'de',
  FR = 'fr'
};

export enum STORE_KEY {
  TOKEN = 'enerki-token',
  TEMP = 'enerki-temp-'
}; 

interface Store {
  power: PowerService,
  heartRate: HeartRateService,
  activeCard: QuizCard,
  cardDrawn: boolean,
  connected: boolean,
  toasts: string[],
  textInput: string,
  connectedType: 'heartRate' | 'power' | undefined,
  isDebug: boolean,
  chatMessages: Message[],
  lang: LANG,
  getExamplePrompts: () => string[],
  drawQuizCard: (n?: boolean) => void,
  isPedalling: () => boolean,
  connect: (t: 'heartRate' | 'power' | 'debug') => void,
  resetUser: () => void,
  startAndSubscribe: (t: number, cb: AntCallback, aU?: boolean) => number,
  resetSubscriptions: () => void,
  setTarget: (t: number) => void,
  addToast: (t: string, to?: number) => void,
  removeToast: (t: string) => boolean
};

const storeObj: Store = {
  power: new PowerService({debug: false}),
  heartRate: new HeartRateService(),
  connected: false,
  activeCard: QuizService.drawRandomQuizCard(),
  cardDrawn: false,
  connectedType: undefined,
  toasts: new Array<string>(),
  textInput: '',
  isDebug: false,
  chatMessages: new Array<Message>(),
  lang: LANG.DE,
  getExamplePrompts() {
    if (!this.cardDrawn) return [];
    return this.activeCard.prompts[this.lang];
  },
  isPedalling() {
    const lastMessage = this.chatMessages[this.chatMessages.length -1];
    if (lastMessage) {
      return lastMessage.loading || (lastMessage.percent !== undefined && lastMessage.percent < 100)
    }
    return false;
  },
  /**
   * Connect a new sensor.
   * @param type  Either 'heartRate' or 'power'
   */
  connect(type: 'heartRate' | 'power' | 'debug') {
    if (type === 'debug') {
      this.isDebug = true;
      this.power.setSettings({debug: true});
      this.power.connect();
      this.connectedType = 'power';
    } else {
      this.isDebug = false;
      this[type].connect();
      this.connectedType = type;
    }
    this.connected = true;
  },
  /**
   * Resets the chat log and everything, when a new user is using the device
   */
  resetUser() {
    this.chatMessages = [];
    this.toasts = [];
    this.activeCard = QuizService.drawRandomQuizCard();
    this.cardDrawn = false;
    this.textInput = '';
    sessionStorage.clear();
    this.resetSubscriptions();
  },
  /**
   * Draws a new Quizcard
   */
  drawQuizCard(newCard = false) {

    if (newCard || !this.cardDrawn) {
      const card = QuizService.drawRandomQuizCard();
      this.activeCard = card;
    }
    this.cardDrawn = true;
  },
  /**
   * Starts a new measurement and subscribes to it.
   * Subscription stops when 100% is reached, pass autoUnsubscribe = false when you want to avoid this behaviour.
   * Cave: Resets existing subscriptions!
   * @param target            the target value, in the same unit as the total value for the respective sensor
   * @param callback          a function that is triggered every time the sensor delivers a new value
   *                          the callback function is called with these parameters:
   *                            - target:     the currently set target
   *                            - total:      the current accumulated total of effort
   *                            - value:      the current value reported by the sensor
   *                            - percent:    the percentage of the target reached yet
   * @param autoUnsubscribe   Optional. Defines if the subscription should end when more than 100% is reached. defaults to true.
   * @returns                 the index of the subscription (use to unsubscribe)
   */
  startAndSubscribe(target: number, callback: AntCallback, autoUnsubscribe = true): number {
    if (this.connectedType) {
        const subscription = this[this.connectedType].startAndSubscribe(target, callback, autoUnsubscribe);
        activeSubscriptions.push(subscription);
        return subscription;
    } else {
        console.warn('No sensor connected yet!');
        return -1;
    }
  },
  resetSubscriptions() {
    if (this.connectedType) {
      while (activeSubscriptions.length > 0) {
        this[this.connectedType].unsubscribe(activeSubscriptions.pop()!)
      }
    } else {
        console.warn('No sensor connected yet!');
        return -1;
    }
  },
  /**
   * Set a new target value
   * @param target    the target value, in the same unit as the total value for the respective sensor
   */
  setTarget(target: number) {
    if (!this.connectedType) {
      console.warn('No sensor connected yet!');
    } else {
      this[this.connectedType].setTarget(target);
    }
  },
  /**
   * Adds a toast to the toast array
   * @param text      The text to display
   * @param timeout   The timeout (in ms) after which the toast is deleted (default: 1250 ms)
   */
  addToast(text: string, timeout: number = 3000) {
    this.toasts.push(text);
    if (timeout) {
      setTimeout(() => this.removeToast(text), timeout);
    }
  },
  /**
   * Removes a toast by text
   * @param text  the text of the toast to remove
   * @returns     TRUE if the toast was found and removed
   *              FALSE if the toast was not found
   */
  removeToast(text: string): boolean {
    const i = this.toasts.findIndex((t) => t === text);
    if (i > -1) {
      this.toasts.splice(i,1);
      return true;
    } else {
      return false;
    }
  }
}

export const store = reactive(storeObj);

type StoreKey = keyof typeof store;
const storePropsToPersist: StoreKey[] = [
  'activeCard',
  'chatMessages',
  'cardDrawn',
  // 'textInput'
]


reloadFromStorage();

storePropsToPersist.forEach((key) => {
  watch(() => store[key], (m) => {
    sessionStorage.setItem(STORE_KEY.TEMP + key, JSON.stringify(m));
  }, {deep: true});
});

function reloadFromStorage() {
  storePropsToPersist.forEach((key) => {
    const prop = sessionStorage.getItem(STORE_KEY.TEMP + key);
    if (prop != undefined) {
      try {
        store[key] = JSON.parse(prop) as never; // it makes me cry to do this, but if it makes TS happy...
      } catch(e) {
        store[key] = prop as never;
      }
    }
  });
}

export function persist<T>(key: string, value: T) {
  window.localStorage.setItem(
    key, 
    typeof value === 'string'
      ? value
      : JSON.stringify(value)
  );
}

export function hasPersisted(key: string): boolean {
  return Object.hasOwn(window.localStorage, key);
}

export function getPersisted<T>(key: string): T | undefined {
  const storageString = window.localStorage.getItem(key);
  if (storageString === null) return undefined;
  try {
    return JSON.parse(storageString);
  }
  catch(e) {
    return storageString as T;
  }
}