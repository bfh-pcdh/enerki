export const ENV = [
  {
    NAME: 'BFH MLMP (für extern)',
    BASE_URL: 'https://inference.proxy.ti.bfh.ch',
    ENDPOINT: '/v1/chat/completions',
    MODEL: 'gpt-oss:120b',
    REASONING: 'low',
    WATT_PER_TOKEN: '180',
    TOKEN: '' // insert your TOKEN here
  },
  {
    NAME: 'BFH MLMP gemma (für extern)',
    BASE_URL: 'https://inference.proxy.ti.bfh.ch',
    ENDPOINT: '/v1/chat/completions',
    MODEL: 'gemma-4-26b',
    REASONING: 'low',
    WATT_PER_TOKEN: '180',
    TOKEN: '' // insert your TOKEN here
  },
  {
    NAME: 'BFH MLMP (für intern)',
    BASE_URL: 'https://inference.mlmp.ti.bfh.ch',
    ENDPOINT: '/v1/chat/completions',
    MODEL: 'gpt-oss:120b',
    REASONING: 'low',
    WATT_PER_TOKEN: '180',
    TOKEN: '' // insert your TOKEN here
  },
  {
    NAME: 'LM Studio (lokal)',
    BASE_URL: 'http://localhost:1234',
    ENDPOINT: '/v1/chat/completions',
    MODEL: 'gpt-oss:120b',
    REASONING: 'medium',
    WATT_PER_TOKEN: '180',
    TOKEN: '' // 'not_needed_for_localhost'
  },
  {
    NAME: 'OpenAI (ChatGPT)',
    BASE_URL: 'https://api.openai.com',
    ENDPOINT: '/v1/chat/completions',
    MODEL: 'gpt-5.6-luna', // 'gpt-3.5-turbo',
    REASONING: '',
    WATT_PER_TOKEN: '180',
    TOKEN: '' // insert token here
  }
];
