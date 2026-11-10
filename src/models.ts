export enum USER_ROLE {
    USER = 'user',
    AI = 'assistant',
    DEV = 'developer',
    SYSTEM = 'system',
    TOOL = 'tool'
};

export interface Message {
    role: USER_ROLE;
    content: string;
    loading?: boolean;
    percent?: number;
    tool_call_id?: string;
};

export interface ExamplePrompt {
    de: string,
    fr: string,
    estimateFactor: number
};

export interface QuizCard {
    id: string;
    question: {de: string, fr: string};
    prompts: ExamplePrompt[]
};