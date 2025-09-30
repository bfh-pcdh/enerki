import { store } from "./store";

enum Replacer {
    PERCENT = '%percent%',
    WATTHOUR = '%watthours%',
    WATT = '%watts'
};

const MINIMAL_TIME_BETWEEN_TOASTS = 2000;

const start = [
    'Gute Frage! Nun gilt es aktiv zu werden: Tritt in die Pedale, um die Energie für die KI zu erzeugen!',
    'Los gehts! Tritt in die Pedale und erzeuge die Energie für deine KI-Anfrage!'
];
const startDebug = [
    'Gute Frage! DEMO-MODUS: Mit dem Regler unten rechts kannst du simulieren, wie stark in die Pedale getreten wird.',
];
const end = [
    'Geschafft! Du hast gerade ' + Replacer.WATTHOUR + ' Wattstunden Energie produziert!'
]
const tooFast = [
    'Wow! Du hast die Energie schneller erzeugt, als die KI gebraucht hat um die Antwort zu generieren. 💪',
    'Du hast so kräftig in die Pedale getreten - die KI ist noch nicht ganz fertig mit der Antwort. ⚡️'
];
const lowPercents = [
    'Gut gestartet! Du hast schon ' + Replacer.PERCENT + '% der Energie generiert.',
    'Du hast bereits ' + Replacer.PERCENT + '% der Energie erzeugt.',

];
const highPercents = [
    'Du hast bereits ' + Replacer.PERCENT + '% der Energie erzeugt.',
    'Du hast schon ' + Replacer.PERCENT + '% der benötigten Leistung erbracht.'
];
const lastPercents = [
    'Endspurt! Nur noch ' + Replacer.PERCENT + '% und du hast es geschafft!',
    'Go Go Go! Du bist schon fast fertig!',
    'Die letzten ' + Replacer.PERCENT + '% warten! Das schaffst du!'
];
const halfPercents = [
    'Gut die Hälfte ist geschafft. Bleib dran!',
    'Du hast bereits die Hälfte hinter dir. Weiter so!'
]
const highPower = [
    'Heisst du Tadej Pogačar? Du drückst grad eindrückliche ' + Replacer.WATT + ' Watt!',
    'Wow! ' + Replacer.WATT + ' Watt! Bist du gedopt?',
    'Du sitzt nicht das erste Mal auf dem Velo, oder? ' + Replacer.WATT + ' Watt sind eindrücklich!'
];
const notLoaded = [
    'Bleib dran, du machst das gut!',
    'Weiter so!',
    'Du leistest gerade ' + Replacer.WATT + ' Watt!'
];
const getStarted = [
    'Tritt in die Pedale, um die Energie für die KI zu erzeugen.',
    'Von alleine passiert nichts. Trete auf dem Home-Trainer, um die Antwort zu sehen.',
    'Los, ich weiss du kannst das!',
    'Lege jetzt los und tritt in die Pedale!'
];
const done = [
    'Fertig! Du kannst aufhören zu treten!',
    'Gratuliere, du hast es geschafft!',
];
const reallyDone = [
    'Du hast kannst aufhören zu treten, du hast es geschafft!',
    'Du hast die benötigte Energie erzeugt und kannst aufhören zu treten.'
];

let lastToast = 0;

function lastToastExpired(override = false): boolean {
    const expired = Date.now() - MINIMAL_TIME_BETWEEN_TOASTS > lastToast;
    if (expired) lastToast = Date.now();
    return expired || override;
}

function getRandom(arr: string[], replacer?: Replacer, replacement: string = ''): string {
    const i = Math.floor(Math.random() * arr.length);
    return replacer
        ? arr[i].replace(replacer, replacement)
        : arr[i];
}

export default class ToastService {
    static highPowerTimeout = false;
    static lowPowerTimeout = false;
    static notLoadedTimeout = false;
    static done = false;
    static startToast() {
        this.done = false;
        lastToastExpired() && store.addToast(getRandom(store.isDebug ? startDebug : start), 3000);
    }
    static stillPedalingToast() {
        lastToastExpired(true) && store.addToast(getRandom(reallyDone), 3000);
    }
    static progressToast(percent: number, loaded: boolean, currentWatts: number) {
        if (currentWatts > 400 && !this.highPowerTimeout) {
            this.highPowerTimeout = true;
            // wait 20 seconds before we trigger this toast again
            window.setTimeout(() => this.highPowerTimeout = false, 20000);
            return lastToastExpired() && store.addToast(getRandom(highPower, Replacer.WATT, currentWatts.toString()), 3000);           
        } else if (currentWatts < 10) {
            if (!this.lowPowerTimeout) {
                this.lowPowerTimeout = true;
                // wait 10 seconds before we trigger this toast again
                window.setTimeout(() => this.lowPowerTimeout = false, 10000);
                return lastToastExpired() && store.addToast(getRandom(getStarted), 5000);    
            } 
        } else if (!loaded) {
            if (percent >= 100) {
                // user completed before response from AI arrived
                return lastToastExpired() && store.addToast(getRandom(tooFast), 5000);
            } else if (!this.notLoadedTimeout) {
                this.notLoadedTimeout = true;
                // wait 6 seconds before we trigger this toast again
                window.setTimeout(() => this.notLoadedTimeout = false, 6000);
                return lastToastExpired() && store.addToast(getRandom(notLoaded, Replacer.WATT, currentWatts.toString()), 3000);      
            }
        } else {
            if (percent == 100 && !this.done) {
                this.done = true;
                return lastToastExpired() && store.addToast(getRandom(done), 5000);
            } else if (percent > 80) {
                return lastToastExpired() && store.addToast(getRandom(lastPercents, Replacer.PERCENT, (100 - percent).toFixed(1)));
            } else if (percent > 55) {
                return lastToastExpired() && store.addToast(getRandom(highPercents, Replacer.PERCENT, percent.toFixed(1)));
            } else if (percent > 45) {
                return lastToastExpired() && store.addToast(getRandom(halfPercents, Replacer.PERCENT, percent.toFixed(1)));
            } else {
                return lastToastExpired() && store.addToast(getRandom(lowPercents, Replacer.PERCENT, percent.toFixed(1)));
            } 
        }
    }
}