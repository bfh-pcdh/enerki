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

export type Tool = {
    type: string;
    function: {
      name: string;
      description: string;
      parameters: {
        type: string;
        properties: {
          query: { type: string; description: string };
        };
        required: string[];
      };
    };
  };

export enum TOOL_TYPE {
    SEARCH = 'web_search',
    SITE = 'web_site'
  }
  
export type API_BODY = {
    model: string;
    messages: Message[];
    reasoning?: {
      effort: string;
    };
    tools?: Tool[];
    tool_choice?: 'auto';
    'background-tasks'?: {
      follow_up_generation: boolean;
    };
  };