import { QuizCard } from "@/models";

export const QUIZ: QuizCard[] = [
    {
        id: '1',
        question: {
            de: 'Wie viel Energie verbraucht ein ChatGPT-Prompt im Durchschnitt?',
            fr: 'Combien d’énergie consomme en moyenne une requête ChatGPT ?'
        },
        prompts: {
            de: [
                'Kurze Antwort: Wie viel Energie verbraucht ein ChatGPT-Prompt im Durchschnitt?',
                'Ausführliche Antwort: Wie viel Energie verbraucht ein ChatGPT-Prompt im Durchschnitt?',
                'Verbraucht ein ChatGPT-Prompt so viel Energie wie eine LED-Lampe in einer Sekunde, ein Smartphone in zehn Sekunden oder ein Laptop in einer Minute?'
            ],
            fr: [
                'Réponse courte : Combien d’énergie consomme en moyenne une requête ChatGPT ?',
                'Réponse détaillée : Combien d’énergie consomme en moyenne une requête ChatGPT ?',
                'Une requête ChatGPT consomme-t-elle autant d’énergie qu’une ampoule LED en une seconde, qu’un smartphone en dix secondes ou qu’un ordinateur portable en une minute ?'
            ]
        }
    },
    {
        id: '2',
        question: {
            de: 'Wieviel CO₂ verursacht eine Google-Suche?',
            fr: 'Combien de CO₂ génère une recherche Google ?'
        },
        prompts: {
            de: [
                'Wie viel CO₂ entsteht bei einer durchschnittlichen Google-Suche?',
                'Was erzeugt mehr CO₂: Eine Frage durch Google zu beantworten, oder mit einem KI-Modell? Erstelle eine Tabelle mit den wichtigsten Einfluss-Faktoren.',
                'Was erzeugt mehr CO₂: Eine Frage durch Google zu beantworten, oder mit einem KI-Modell? Halte die Antwort kurz.'
            ],
            fr: [
                'Combien de CO₂ est généré par une recherche Google moyenne ?',
                'Qu’est-ce qui génère plus de CO₂ : répondre à une question via Google ou via un modèle d’IA ? Crée un tableau avec les principaux facteurs d’influence.',
                'Qu’est-ce qui génère plus de CO₂ : répondre à une question via Google ou via un modèle d’IA ? Donne une réponse courte.'
            ]
        }
    },
    {
        id: '3',
        question: {
            de: 'Wie wirkt sich die steigende Nutzung energieintensiver digitaler Technologien langfristig auf die Gesundheit aus?',
            fr: 'Quel est l’impact à long terme de l’utilisation croissante des technologies numériques énergivores sur la santé ?'
        },
        prompts: {
            de: [
                'Neben dem ökologischen Fussabdruck: Welches Gesundheitsrisiko ist mit exzessiver digitaler Nutzung verbunden?',
                'Neben dem ökologischen Fussabdruck: Welches Gesundheitsrisiko ist mit exzessiver digitaler Nutzung verbunden? Mache mir eine ausführliche Analyse.',
                'Neben dem ökologischen Fussabdruck: Welches Gesundheitsrisiko ist mit exzessiver digitaler Nutzung verbunden? Gib mir eine möglichst kurze Antwort.'
            ],
            fr: [
                'En dehors de l’empreinte écologique : quel risque pour la santé est lié à une utilisation excessive du numérique ?',
                'En dehors de l’empreinte écologique : quel risque pour la santé est lié à une utilisation excessive du numérique ? Fais une analyse détaillée.',
                'En dehors de l’empreinte écologique : quel risque pour la santé est lié à une utilisation excessive du numérique ? Donne une réponse courte.'
            ]
        }
    },
    {
        id: '4',
        question: {
            de: 'Um wie viel Grad hat sich die durchschnittliche Erdtemperatur seit der vorindustriellen Zeit erhöht?',
            fr: 'De combien de degrés la température moyenne de la Terre a-t-elle augmenté depuis l’époque préindustrielle ?'
        },
        prompts: {
            de: [
                'Um wie viel Grad hat sich die durchschnittliche Erdtemperatur seit der vorindustriellen Zeit erhöht?',
                'Um wie viel Grad hat sich die durchschnittliche Erdtemperatur seit der vorindustriellen Zeit erhöht? Mache mir eine ausführliche Analyse.',
                'Um wie viel Grad hat sich die durchschnittliche Erdtemperatur seit der vorindustriellen Zeit erhöht? Gib mir eine möglichst kurze Antwort.'
            ],
            fr: [
                'De combien de degrés la température moyenne de la Terre a-t-elle augmenté depuis l’époque préindustrielle ?',
                'De combien de degrés la température moyenne de la Terre a-t-elle augmenté depuis l’époque préindustrielle ? Fais une analyse détaillée.',
                'De combien de degrés la température moyenne de la Terre a-t-elle augmenté depuis l’époque préindustrielle ? Donne une réponse courte.'
            ]
        }
    },
    {
        id: '5',
        question: {
            de: 'Was ist laut der WHO die grösste Gesundheitsbedrohung für die Menschheit im 21. Jahrhundert?',
            fr: 'Selon l’OMS, quelle est la plus grande menace pour la santé de l’humanité au XXIe siècle ?'
        },
        prompts: {
            de: [
                'Was ist laut der WHO die grösste Gesundheitsbedrohung für die Menschheit im 21. Jahrhundert?',
                'Was ist laut der WHO die grösste Gesundheitsbedrohung für die Menschheit im 21. Jahrhundert? Mache mir eine ausführliche Analyse.',
                'Was ist laut der WHO die grösste Gesundheitsbedrohung für die Menschheit im 21. Jahrhundert? Gib mir eine möglichst kurze Antwort.'
            ],
            fr: [
                'Selon l’OMS, quelle est la plus grande menace pour la santé de l’humanité au XXIe siècle ?',
                'Selon l’OMS, quelle est la plus grande menace pour la santé de l’humanité au XXIe siècle ? Fais une analyse détaillée.',
                'Selon l’OMS, quelle est la plus grande menace pour la santé de l’humanité au XXIe siècle ? Donne une réponse courte.'
            ]
        }
    },
    {
        id: '6',
        question: {
            de: 'Welche Transportmittel sollen laut WHO in Städten priorisiert werden?',
            fr: 'Quels moyens de transport doivent être prioritaires dans les villes selon l’OMS ?'
        },
        prompts: {
            de: [
                'Welche Transportmittel sollen laut WHO in Städten priorisiert werden?',
                'Welche Transportmittel sollen laut WHO in Städten priorisiert werden? Mache mir eine ausführliche Analyse.',
                'Welche Transportmittel sollen laut WHO in Städten priorisiert werden? Gib mir eine möglichst kurze Antwort.'
            ],
            fr: [
                'Quels moyens de transport doivent être prioritaires dans les villes selon l’OMS ?',
                'Quels moyens de transport doivent être prioritaires dans les villes selon l’OMS ? Fais une analyse détaillée.',
                'Quels moyens de transport doivent être prioritaires dans les villes selon l’OMS ? Donne une réponse courte.'
            ]
        }
    },
    {
        id: '7',
        question: {
            de: 'Schätze, wie viel Prozent der Menschen atmen laut WHO-Daten ungesunde Aussenluft ein, die grösstenteils durch die Verbrennung fossiler Brennstoffe verursacht wird?',
            fr: 'Estimez quel pourcentage de personnes respirent un air extérieur malsain, principalement causé par la combustion de combustibles fossiles, selon les données de l’OMS ?'
        },
        prompts: {
            de: [
                'Wie viel Prozent der Menschen atmen laut WHO-Daten ungesunde Aussenluft ein, die grösstenteils durch die Verbrennung fossiler Brennstoffe verursacht wird?',
                'Wie viel Prozent der Menschen atmen laut WHO-Daten ungesunde Aussenluft ein, die grösstenteils durch die Verbrennung fossiler Brennstoffe verursacht wird? Mache mir eine ausführliche Analyse.',
                'Wie viel Prozent der Menschen atmen laut WHO-Daten ungesunde Aussenluft ein, die grösstenteils durch die Verbrennung fossiler Brennstoffe verursacht wird? Gib mir eine möglichst kurze Antwort.'
            ],
            fr: [
                'Quel pourcentage de personnes respirent un air extérieur malsain, principalement causé par la combustion de combustibles fossiles, selon les données de l’OMS ?',
                'Quel pourcentage de personnes respirent un air extérieur malsain, principalement causé par la combustion de combustibles fossiles, selon les données de l’OMS ? Fais une analyse détaillée.',
                'Quel pourcentage de personnes respirent un air extérieur malsain, principalement causé par la combustion de combustibles fossiles, selon les données de l’OMS ? Donne une réponse courte.'
            ]
        }
    }
];