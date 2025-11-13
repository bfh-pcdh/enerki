import { store } from "@/store";

export function i18n(key: string): string {
    return Object.hasOwn(KEYS, key)
        ? KEYS[key][store.lang]
        : KEYS.NOTFOUND[store.lang]
}

const KEYS: {[key: string]: {de: string, fr: string}} = {
    NOTFOUND: {
        de: '[nicht übersetzt]',
        fr: '[non traduit]'
    },
    RESET_USER: {
        de: 'Soll enerKI für eine·n neue·n Benutzer·in zurückgesetzt werden?',
        fr: 'Faut-il réinitialiser enerKI pour un·e utilisateur·rice ?'
    },
    NEW_CARD: {
        de: 'Neue Karte ziehen',
        fr: 'Tirer une nouvelle carte'
    },
    SHOW_CARD: {
        de: 'Karte nochmal anzeigen',
        fr: 'Afficher la carte à nouveau'
    },
    RESET: {
        de: 'Zurücksetzen',
        fr: 'Réinitialiser'
    },
    LANGUAGE: {
        de: 'Sprache', 
        fr: 'Langue'
    },
    ERROR: {
        de: 'Leider ist etwas schief gegangen:',
        fr: 'Une erreur s’est produite :'
    },
    OK: {
        de: 'OK',
        fr: 'OK'
    },
    SAVE: {
        de: 'Speichern',
        fr: 'Enregistrer'
    },
    SEND: {
        de: 'Senden',
        fr: 'Envoyer'
    },
    QUIZCARD_TITLE: {
        de: 'Quiz-Karte #',
        fr: 'Carte Quiz #'
    },
    QUIZCARD_DESCRIPTION: {
        de: 'Versuche, diese Frage zu beantworten:',
        fr: 'Essaie de répondre à cette question :'
    },
    QUIZCARD_INSTRUCTION: {
        de: 'Drücke [Enter] um einen Prompt auszuwählen oder einen eigenen Prompt einzugeben.',
        fr: 'Appuie sur [Enter] pour choisir un prompt ou en saisir un personnalisé.'
    },
    POWERSIM_LABEL: {
        de: 'Wie stark trittst du in die Pedale?',
        fr: 'À quelle intensité pédales-tu ?'
    },
    POWERSIM_WATT: {
        de: 'Watt',
        fr: 'Watt'
    },
    CONNECT_TITLE: {
        de: 'Sensor verbinden',
        fr: 'Connecter le capteur'
    },
    CONNECT_NOTCONNECTED: {
        de: 'Es ist noch kein Sensor verbunden.',
        fr: 'Aucun capteur n’est encore connecté.'
    },
    CONNECT_INSTRUCTIONS: {
        de: 'Anleitung zum Einrichten',
        fr: 'Instructions de configuration'
    },
    CONNECT_POWERMETER: {
        de: 'Powermeter verbinden',
        fr: 'Connecter le powermètre'
    },
    CONNECT_POWERMETER_TOOLTIP: {
        de: 'Powermeter verbinden: Benötigt einen ANT+ USB-Adapter und kompatible Powermeter-Pedale',
        fr: 'Connecter le powermètre : nécessite un adaptateur USB ANT+ et des pédales powermètre compatibles'
    },
    CONNECT_DEBUG: {
        de: 'Ohne Sensor verwenden',
        fr: 'Utiliser sans capteur'
    },
    CONNECT_DEBUG_TOOLTIP: {
        de: 'Ohne Sensor verwenden: Im Debug-Modus wird ein Powermeter simuliert, um enerKI auch ohne Ergometer-Infrastruktur testen zu können.',
        fr: 'Utiliser sans capteur : en mode débogage, un powermètre est simulé pour tester enerKI sans infrastructure d’ergomètre.'
    },
    AUTH_CONFIRM: {
        de: '⚠️ Das Token wird unverschlüsselt gespeichert. Andere Websiten, die du mit diesem Browser besuchst, können das Token potenziell auslesen.' + 
            '\n\nMöchtest du es trotzdem speichern?',
        fr: '⚠️ Le jeton sera stocké sans chiffrement. D’autres sites visités avec ce navigateur pourraient potentiellement le lire.' +
            '\n\nVeux-tu quand même l’enregistrer ?'
    },
    AUTH_PERSIST: {
        de: 'Das Token auf diesem Computer speichern',
        fr: 'Enregistrer le jeton sur cet ordinateur'
    },
    CHAT_PLACEHOLDER: {
        de: 'Gib hier deinen Text ein',
        fr: 'Saisis ton texte ici'
    },
    CHAT_PLACEHOLDER_PROMPTS: {
        de: 'Gib hier deinen Text ein oder wähle einen der Prompts oben aus',
        fr: 'Saisis ton texte ici ou choisis un des prompts ci-dessus'
    }
};