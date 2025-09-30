export enum USER_ROLE {
    USER = 'user',
    AI = 'assistant',
    DEV = 'developer'
};

export interface Message {
    role: USER_ROLE;
    content: string;
    loading: boolean;
    percent?: number;
};


export interface QuizCard {
    id: string;
    question: string;
    prompts: string[]
};