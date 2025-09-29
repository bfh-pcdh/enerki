export const ENV = {
                // BeeChat                             // LM Studio
    BASE_URL:   'https://inference.mlmp.ti.bfh.ch',    // 'http://localhost:1234',
    ENDPOINT:   '/api/chat/completions',               // '/v1/chat/completions',        
    MODEL:      
                //  'beechat-v3-gpt-oss', 
                //  'gpt-oss:120b',
                 'enerki', // use special BeeChat with system prompt
    TOKEN:      ''                                      // 'not_needed_for_localhost' // insert your TOKEN here
}