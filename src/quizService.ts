import { store } from "./store";

export default class QuizService {
    constructor() {
        window.setTimeout(() => {
            store.examplePrompts = [
                'Wie viel CO2 entsteht bei einer durchschnittlichen Google-Suche?',
                'Was erzeugt mehr CO2: Eine Frage durch Google zu beantworten, oder mit einem KI-Modell? Erstelle eine Tabelle mit den wichtigsten Einfluss-Faktoren.',
                'Was erzeugt mehr CO2: Eine Frage durch Google zu beantworten, oder mit einem KI-Modell? Halte die Antwort kurz.'
            ];
            console.log('QuizService constructor, example prompts are', store.examplePrompts);
        }, 200);
    }
}