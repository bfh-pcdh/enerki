export const ENV = {
                // BeeChat                              // LM Studio
    BASE_URL:   'https://inference.mlmp.ti.bfh.ch',    // 'http://localhost:1234',
    ENDPOINT:   '/api/chat/completions',                // '/v1/chat/completions',        
    MODEL:      'gpt-oss:120b',                         // 'openai/gpt-oss-20b',
    PROMPT_ENHANCEMENT:
    'Be honest to the user and admit when you don\'t know something. Do not try to make up answers if you don\'t know. ' +
    'Unless stated otherwise, answer in reasonable length and do not create too huge answer messages.',
    TOKEN:      ''   // 'not_needed_for_localhost' // insert your TOKEN here
}