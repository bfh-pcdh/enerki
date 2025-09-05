export enum USER_ROLE {
    USER = 'user',
    AI = 'assistant'
};

export interface Message {
    role: USER_ROLE;
    content: string;
    loading: boolean;
    percent?: number;
};