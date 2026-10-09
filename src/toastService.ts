import { store } from "./store";

enum Replacer {
    PERCENT = '%percent%',
    WATTHOUR = '%watthours%',
    WATT = '%watts',
    KCAL = '%calories'
};

const MINIMAL_TIME_BETWEEN_TOASTS = 2000;

const start = {
    de: [
        'Gute Frage! Nun gilt es aktiv zu werden: Tritt in die Pedale, um die Energie für die KI zu erzeugen!',
        'Los gehts! Tritt in die Pedale und erzeuge die Energie für deine KI-Anfrage!'
    ],
    fr: [
        'Bonne question ! Il est temps de passer à l’action : pédale pour générer l’énergie nécessaire à l’IA !',
        'C’est parti ! Pédale pour produire l’énergie de ta requête IA !'
    ]
};

const startDebug = {
    de: [
        'Gute Frage! DEMO-MODUS: Mit dem Regler unten rechts kannst du simulieren, wie stark in die Pedale getreten wird.',
    ],
    fr: [
        'Bonne question ! MODE DÉMO : Avec le curseur en bas à droite, tu peux simuler la force de pédalage.'
    ]
};

const end = {
    de: [
        'Geschafft! Du hast gerade ' + Replacer.WATTHOUR + ' Wattstunden Energie produziert!'
    ],
    fr: [
        'Bravo ! Tu viens de produire ' + Replacer.WATTHOUR + ' wattheures d’énergie !'
    ]
};

const tooFast = {
    de: [
        'Wow! Du hast die Energie schneller erzeugt, als die KI gebraucht hat um die Antwort zu generieren. 💪',
        'Du hast so kräftig in die Pedale getreten - die KI ist noch nicht ganz fertig mit der Antwort. ⚡️'
    ],
    fr: [
        'Wow ! Tu as généré l’énergie plus vite que l’IA n’a mis pour répondre. 💪',
        'Tu as pédalé tellement fort – l’IA n’a pas encore fini sa réponse. ⚡️'
    ]
};

const lowPercents = {
    de: [
        'Gut gestartet! Du hast schon ' + Replacer.PERCENT + '% der Energie generiert.',
        'Du hast bereits ' + Replacer.PERCENT + '% der Energie erzeugt.',
    ],
    fr: [
        'Bien commencé ! Tu as déjà généré ' + Replacer.PERCENT + '% de l’énergie.',
        'Tu as déjà produit ' + Replacer.PERCENT + '% de l’énergie.'
    ]
};

const highPercents = {
    de: [
        'Du hast bereits ' + Replacer.PERCENT + '% der Energie erzeugt.',
        'Du hast schon ' + Replacer.PERCENT + '% der benötigten Leistung erbracht.'
    ],
    fr: [
        'Tu as déjà produit ' + Replacer.PERCENT + '% de l’énergie.',
        'Tu as déjà atteint ' + Replacer.PERCENT + '% de la puissance nécessaire.'
    ]
};

const lastPercents = {
    de: [
        'Endspurt! Nur noch ' + Replacer.PERCENT + '% und du hast es geschafft!',
        'Go Go Go! Du bist schon fast fertig!',
        'Die letzten ' + Replacer.PERCENT + '% warten! Das schaffst du!'
    ],
    fr: [
        'Dernière ligne droite ! Plus que ' + Replacer.PERCENT + '% et c’est gagné !',
        'Allez, allez ! Tu es presque arrivé !',
        'Les derniers ' + Replacer.PERCENT + '% t’attendent ! Tu peux le faire !'
    ]
};

const halfPercents = {
    de: [
        'Gut die Hälfte ist geschafft. Bleib dran!',
        'Du hast bereits die Hälfte hinter dir. Weiter so!'
    ],
    fr: [
        'Tu as fait la moitié. Continue comme ça !',
        'La moitié est derrière toi. Courage !'
    ]
};

const highPower = {
    de: [
        'Heisst du Tadej Pogačar? Du drückst grad eindrückliche ' + Replacer.WATT + ' Watt!',
        'Wow! ' + Replacer.WATT + ' Watt! Bist du gedopt?',
        'Du sitzt nicht das erste Mal auf dem Velo, oder? ' + Replacer.WATT + ' Watt sind eindrücklich!'
    ],
    fr: [
        'Tu t’appelles Tadej Pogačar ? Tu pousses ' + Replacer.WATT + ' watts impressionnants !',
        'Wow ! ' + Replacer.WATT + ' watts ! Tu es dopé ?',
        'Ce n’est pas ta première fois sur un vélo, hein ? ' + Replacer.WATT + ' watts, c’est énorme !'
    ]
};

const notLoaded = {
    de: [
        'Bleib dran, du machst das gut!',
        'Weiter so!',
        'Du leistest gerade ' + Replacer.WATT + ' Watt!'
    ],
    fr: [
        'Continue, tu t’en sors bien !',
        'Ne lâche rien !',
        'Tu produis actuellement ' + Replacer.WATT + ' watts !'
    ]
};

const getStarted = {
    de: [
        'Tritt in die Pedale, um die Energie für die KI zu erzeugen.',
        'Von alleine passiert nichts. Trete auf dem Home-Trainer, um die Antwort zu sehen.',
        'Los, ich weiss du kannst das!',
        'Lege jetzt los und tritt in die Pedale!'
    ],
    fr: [
        'Pédale pour générer l’énergie nécessaire à l’IA.',
        'Rien ne se passe tout seul. Pédale sur le vélo pour voir la réponse.',
        'Allez, je sais que tu peux le faire !',
        'C’est parti, pédale maintenant !'
    ]
};

const done = {
    de: [
        'Fertig! Du kannst aufhören zu treten!',
        'Gratuliere, du hast es geschafft!',
    ],
    fr: [
        'Terminé ! Tu peux arrêter de pédaler !',
        'Félicitations, tu as réussi !'
    ]
};

const reallyDone = {
    de: [
        'Du hast kannst aufhören zu treten, du hast es geschafft!',
        'Du hast die benötigte Energie erzeugt und kannst aufhören zu treten.'
    ],
    fr: [
        'Tu peux arrêter de pédaler, c’est gagné !',
        'Tu as produit l’énergie nécessaire, tu peux t’arrêter.'
    ]
};

const energyUsed = {
    de: [
        'Fertig! Du hast mehr als ' + Replacer.KCAL + ' kcal verbraucht, um diese Antwort anzuzeigen!',
        'Uff! Das waren gerade über ' + Replacer.KCAL + ' kcal, die du verbraucht hast!',
    ],
    fr: [
        'Terminé ! Tu as dépensé plus de ' + Replacer.KCAL + ' kcal pour afficher cette réponse !',
        'Ouf ! Tu viens de brûler plus de ' + Replacer.KCAL + ' kcal !'
    ]
};


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

function getKiloCalsFromWatthour(wh: number): string {
    const kcalWhFactor = 0.8598452279;
    const bodyEfficiencyFactor = 0.25;
    return (wh * kcalWhFactor / bodyEfficiencyFactor).toFixed(1);
}

export default class ToastService {
    static highPowerTimeout = false;
    static lowPowerTimeout = false;
    static notLoadedTimeout = false;
    static done = false;
    static startToast() {
        this.done = false;
        lastToastExpired() && store.addToast(getRandom(store.isDebug ? startDebug[store.lang] : start[store.lang]), 3000);
    }
    static stillPedalingToast() {
        lastToastExpired(true) && store.addToast(getRandom(reallyDone[store.lang]), 3000);
    }
    static progressToast(percent: number, loaded: boolean, currentWatts: number) {
        if (this.done) return;
        if (currentWatts > 400 && !this.highPowerTimeout) {
            this.highPowerTimeout = true;
            // wait 20 seconds before we trigger this toast again
            window.setTimeout(() => this.highPowerTimeout = false, 20000);
            return lastToastExpired() && store.addToast(getRandom(highPower[store.lang], Replacer.WATT, currentWatts.toString()), 3000);           
        } else if (currentWatts < 10) {
            if (!this.lowPowerTimeout) {
                this.lowPowerTimeout = true;
                // wait 10 seconds before we trigger this toast again
                window.setTimeout(() => this.lowPowerTimeout = false, 10000);
                return lastToastExpired() && store.addToast(getRandom(getStarted[store.lang]), 5000);    
            } 
        } else if (!loaded) {
            if (percent >= 100) {
                // user completed before response from AI arrived
                return lastToastExpired() && store.addToast(getRandom(tooFast[store.lang]), 5000);
            } else if (!this.notLoadedTimeout) {
                this.notLoadedTimeout = true;
                // wait 6 seconds before we trigger this toast again
                window.setTimeout(() => this.notLoadedTimeout = false, 6000);
                return lastToastExpired() && store.addToast(getRandom(notLoaded[store.lang], Replacer.WATT, currentWatts.toString()), 3000);      
            }
        } else {
            if (percent == 100 && !this.done) {
                this.done = true;
                return lastToastExpired() && store.addToast(getRandom(done[store.lang]), 5000);
            } else if (percent > 80) {
                return lastToastExpired() && store.addToast(getRandom(lastPercents[store.lang], Replacer.PERCENT, (100 - percent).toFixed(0)));
            } else if (percent > 55) {
                return lastToastExpired() && store.addToast(getRandom(highPercents[store.lang], Replacer.PERCENT, percent.toFixed(0)));
            } else if (percent > 45) {
                return lastToastExpired() && store.addToast(getRandom(halfPercents[store.lang], Replacer.PERCENT, percent.toFixed(0)));
            } else {
                return lastToastExpired() && store.addToast(getRandom(lowPercents[store.lang], Replacer.PERCENT, percent.toFixed(0)));
            } 
        }
    }

    static abort() {
        this.done = true;
    }

    static energyToast(wh: number) {
        store.addToast(getRandom(energyUsed[store.lang], Replacer.KCAL, getKiloCalsFromWatthour(wh)), 10000);
    }
}