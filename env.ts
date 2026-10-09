export const ENV = [
  {
    NAME: 'BeeChat',
    BASE_URL: 'https://inference.mlmp.ti.bfh.ch',
    ENDPOINT: '/api/v1/chat/completions',
    MODEL: 'gpt-oss:120b',
    TOKEN: '' // insert your TOKEN here
  },
  {
    NAME: 'LM Studio (lokal)',
    BASE_URL: 'http://localhost:1234',
    ENDPOINT: '/v1/chat/completions',
    MODEL: 'gpt-oss:120b',
    TOKEN: '' // 'not_needed_for_localhost'
  },
  {
    NAME: 'OpenAI (ChatGPT)',
    BASE_URL: 'https://api.openai.com',
    ENDPOINT: '/v1/chat/completions',
    MODEL: 'gpt-5.6-luna', // 'gpt-3.5-turbo',
    TOKEN: '' // insert token here
  }
];
