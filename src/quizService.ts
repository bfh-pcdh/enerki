import { QuizCard } from "./models";
import { QUIZ } from "./assets/quizcards";

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