const { createCipheriv, randomBytes, createDecipheriv } = require('crypto');

/// Plaintext
const message = 'i like turtles';
console.log(`plaintext:  ${message}`);

/// Cipher
const cipherKey = randomBytes(32);
/// initialization vector
const iv = randomBytes(16);

const cipher = createCipheriv(algorithm='aes256', key=cipherKey, iv);
const decipher = createDecipheriv(algorithm='aes256', key=cipherKey, iv);

/// Encrypt
const encryptedMessage = cipher.update(message, inputEncoding='utf8', inputEncoding='hex') + cipher.final('hex');
console.log(`Encrypted: ${encryptedMessage}`);

/// Decrypt
const decryptedMessage = decipher.update(encryptedMessage, inputEncoding='hex', outputEncoding='utf-8') + decipher.final('utf8');
console.log(`Deciphered: ${decryptedMessage.toString('utf-8')}`);