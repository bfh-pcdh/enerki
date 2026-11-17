export const ENV = [
  {
    NAME: 'BFH MLMP GPT-oss (extern)',
    BASE_URL: 'https://inference.proxy.ti.bfh.ch',
    ENDPOINT: '/v1/chat/completions',
    MODEL: 'gpt-oss:120b',
    REASONING: 'low',
    JOULE_PER_INPUT_TOKEN: '0.1601',
    JOULE_PER_OUTPUT_TOKEN: '1.9598',
    TOKEN: '', // insert your TOKEN here,
    SEARCH_URL: 'https://api.tavily.com/search',
    SEARCH_KEY: '',
    MAX_TOOL_CALLS: 5
  },
  {
    NAME: 'BFH MLMP gemma (extern)',
    BASE_URL: 'https://inference.proxy.ti.bfh.ch',
    ENDPOINT: '/v1/chat/completions',
    MODEL: 'gemma-4-26b',
    REASONING: 'low',
    JOULE_PER_INPUT_TOKEN: '0.0916',
    JOULE_PER_OUTPUT_TOKEN: '1.177',
    TOKEN: '', // insert your TOKEN here
    SEARCH_URL: 'https://api.tavily.com/search',
    SEARCH_KEY: '',
    MAX_TOOL_CALLS: 3
  },
  // {
  //   NAME: 'BFH MLMP (intern)',
  //   BASE_URL: 'https://inference.mlmp.ti.bfh.ch',
  //   ENDPOINT: '/v1/chat/completions',
  //   MODEL: 'gpt-oss:120b',
  //   REASONING: 'low',
  //   JOULE_PER_INPUT_TOKEN: '0.1601',
  //   JOULE_PER_OUTPUT_TOKEN: '1.9598',
  //   TOKEN: '', // insert your TOKEN here
  //   SEARCH_URL: 'https://api.tavily.com/search',
  //   SEARCH_KEY: '',
  //   MAX_TOOL_CALLS: 5
  // },
  {
    NAME: 'LM Studio (lokal)',
    BASE_URL: 'http://localhost:1234',
    ENDPOINT: '/v1/chat/completions',
    MODEL: 'gpt-oss:120b',
    REASONING: 'medium',
    JOULE_PER_INPUT_TOKEN: '0.2',
    JOULE_PER_OUTPUT_TOKEN: '2',
    TOKEN: '', // insert your TOKEN here
    SEARCH_URL: '',
    SEARCH_KEY: '',
    MAX_TOOL_CALLS: 5
  },
  {
    NAME: 'OpenAI (ChatGPT)',
    BASE_URL: 'https://api.openai.com',
    ENDPOINT: '/v1/chat/completions',
    MODEL: 'gpt-5.6-luna', // 'gpt-3.5-turbo',
    REASONING: '',    
    JOULE_PER_INPUT_TOKEN: '0.2',
    JOULE_PER_OUTPUT_TOKEN: '2',
    TOKEN: '', // insert your TOKEN here
    SEARCH_URL: 'https://api.tavily.com/search',
    SEARCH_KEY: '',
    MAX_TOOL_CALLS: 5
  }
];
