const { createHmac } = require('crypto');

const password = 'super-secret!';
const message = '🎃 hello jack'

// using password as key
const hmac = createHmac(algorithm='sha256', key=password).update(data=message).digest('hex');

console.log(hmac);