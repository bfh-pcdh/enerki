import { store } from "./store";

interface QuizCard {
    question: string;
    answerOptions: 
        {
            answer: string,
            correct: boolean
        }[],
    prompts: string[]
}

const QUIZ: QuizCard[]  = [
    {
        question: 'Wie viel Energie verbraucht ein ChatGPT-Prompt im Durchschnitt?',
        answerOptions: [
           {
            answer: 'ungefähr so viel wie eine LED-Lampe für 1 Sekunde leuchtet',
            correct: false
           },
           {
            answer: 'ungefähr so viel wie ein Smartphone für 10 Sekunden benutzt wird',
            correct: true
           },
           {
            answer: 'ungefähr so viel wie ein Laptop für 1 Minute läuft ',
            correct: false
           },
        ],
        prompts: [
            'Kurze Antwort: Wie viel Energie verbraucht ein ChatGPT-Prompt im Durchschnitt?',
            'Ausführliche Antwort: Wie viel Energie verbraucht ein ChatGPT-Prompt im Durchschnitt?',
            'Verbraucht ein ChatGPT-Prompt so viel Energie wie eine LED-Lampe in einer Sekunde, ein Smartphone in zehn Sekunden oder ein Laptop in einer Minute?'
        ]
    },
    {
        question: 'Wieviel CO₂ verursacht eine Google-Suche?',
        answerOptions: [
           {
            answer: 'ca. 0,2 g CO₂',
            correct: true
           },
           {
            answer: 'ca. 20 g CO₂',
            correct: false
           },
           {
            answer: 'gar nichts',
            correct: false
           },
        ],
        prompts: [
            'Wie viel CO2 entsteht bei einer durchschnittlichen Google-Suche?',
            'Was erzeugt mehr CO2: Eine Frage durch Google zu beantworten, oder mit einem KI-Modell? Erstelle eine Tabelle mit den wichtigsten Einfluss-Faktoren.',
            'Was erzeugt mehr CO2: Eine Frage durch Google zu beantworten, oder mit einem KI-Modell? Halte die Antwort kurz.'
        ]
    },
    {
        question: 'Wie wirkt sich die steigende Nutzung energieintensiver digitaler Technologien langfristig auf die Gesundheit aus?',
        answerOptions: [
           {
            answer: 'Erhöhtes Risiko für Hitzestress und Dehydrierung',
            correct: true
           },
           {
            answer: 'Verbesserte Fitness mit Apps',
            correct: true
           },
           {
            answer: 'Schnellere Genesung bei Krankheiten durch digitalen Informationszugang',
            correct: false
           },
        ],
        prompts: [
            'Wie wirkt sich die steigende Nutzung energieintensiver digitaler Technologien langfristig auf die Gesundheit aus?',
            'Ausführliche Antwort',
            'Verbraucht ein ChatGPT-Prompt so viel Energie wie eine LED-Lampe in einer Sekunde, ein Smartphone in zehn Sekunden oder ein Laptop in einer Minute?'
        ]
    }
];

export default class QuizService {
    static lastQuizCard = -1;
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