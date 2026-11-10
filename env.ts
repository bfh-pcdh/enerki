export const ENV = [
  {
    NAME: 'BFH MLMP (für extern)',
    BASE_URL: 'https://inference.proxy.ti.bfh.ch',
    ENDPOINT: '/v1/chat/completions',
    MODEL: 'gpt-oss:120b',
    REASONING: 'low',
    JOULE_PER_INPUT_TOKEN: '0.1601',
    JOULE_PER_OUTPUT_TOKEN: '1.9598',
    TOKEN: '' // insert your TOKEN here
  },
  {
    NAME: 'BFH MLMP gemma (für extern)',
    BASE_URL: 'https://inference.proxy.ti.bfh.ch',
    ENDPOINT: '/v1/chat/completions',
    MODEL: 'gemma-4-26b',
    REASONING: 'low',
    JOULE_PER_INPUT_TOKEN: '0.0916',
    JOULE_PER_OUTPUT_TOKEN: '1.177',
    TOKEN: '' // insert your TOKEN here
  },
  {
    NAME: 'BFH MLMP (für intern)',
    BASE_URL: 'https://inference.mlmp.ti.bfh.ch',
    ENDPOINT: '/v1/chat/completions',
    MODEL: 'gpt-oss:120b',
    REASONING: 'low',
    JOULE_PER_INPUT_TOKEN: '0.1601',
    JOULE_PER_OUTPUT_TOKEN: '1.9598',
    TOKEN: '' // insert your TOKEN here
  },
  {
    NAME: 'LM Studio (lokal)',
    BASE_URL: 'http://localhost:1234',
    ENDPOINT: '/v1/chat/completions',
    MODEL: 'gpt-oss:120b',
    REASONING: 'medium',
    JOULE_PER_INPUT_TOKEN: '0.2',
    JOULE_PER_OUTPUT_TOKEN: '2',
    TOKEN: '' // 'not_needed_for_localhost'
  },
  {
    NAME: 'OpenAI (ChatGPT)',
    BASE_URL: 'https://api.openai.com',
    ENDPOINT: '/v1/chat/completions',
    MODEL: 'gpt-5.6-luna', // 'gpt-3.5-turbo',
    REASONING: '',    
    JOULE_PER_INPUT_TOKEN: '0.2',
    JOULE_PER_OUTPUT_TOKEN: '2',
    TOKEN: '' // insert token here
  }
];
