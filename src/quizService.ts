import { QuizCard } from "./models";

const QUIZ: QuizCard[]  = [
    {
        id: '1',
        question: 'Wie viel Energie verbraucht ein ChatGPT-Prompt im Durchschnitt?',
        prompts: [
            'Kurze Antwort: Wie viel Energie verbraucht ein ChatGPT-Prompt im Durchschnitt?',
            'Ausführliche Antwort: Wie viel Energie verbraucht ein ChatGPT-Prompt im Durchschnitt?',
            'Verbraucht ein ChatGPT-Prompt so viel Energie wie eine LED-Lampe in einer Sekunde, ein Smartphone in zehn Sekunden oder ein Laptop in einer Minute?'
        ]
    },
    {
        id: '2',
        question: 'Wieviel CO₂ verursacht eine Google-Suche?',
        prompts: [
            'Wie viel CO2 entsteht bei einer durchschnittlichen Google-Suche?',
            'Was erzeugt mehr CO2: Eine Frage durch Google zu beantworten, oder mit einem KI-Modell? Erstelle eine Tabelle mit den wichtigsten Einfluss-Faktoren.',
            'Was erzeugt mehr CO2: Eine Frage durch Google zu beantworten, oder mit einem KI-Modell? Halte die Antwort kurz.'
        ]
    },
    {
        id: '3',
        question: 'Wie wirkt sich die steigende Nutzung energieintensiver digitaler Technologien langfristig auf die Gesundheit aus?',
        prompts: [
            'Wie wirkt sich die steigende Nutzung energieintensiver digitaler Technologien langfristig auf die Gesundheit aus?',
            'Erläutere, inwiefern sich die steigende Nutzung energieintensiver digitaler Technologien über längere Frist auf die Gesundheit auswirkt.',
            'Mache eine Auflistung von Auswirkungen energieintensiver Technologien auf die Gesundheit.'
        ]
    }
];

export default class QuizService {
    static lastQuizCard = -1;
    constructor() {}

    static drawRandomQuizCard(): QuizCard {
        let i = Math.floor(Math.random() * QUIZ.length);
        // don't draw the same card twice in a row
        while (i == this.lastQuizCard) {
            i = Math.floor(Math.random() * QUIZ.length);
        }
        this.lastQuizCard = i;
        return QUIZ[i];
    }
}