const { createHash, scryptSync, randomBytes, timingSafeEqual } = require('crypto');

function hash(str) {
    return createHash('sha256').update(str).digest('hex');
}

function signup(email, password) {
    const salt = randomBytes(16).toString('hex');
    const hashedPassword = scryptSync(password, salt, 32).toString('hex');
    const hashedPasswordNoSalt = hash(password);

    const user = { email, password1: `${salt}:${hashedPassword}`, password2: `${salt}:${hashedPasswordNoSalt}` }
  
    users.push(user);

    return user
}

function login(email, password) {
    const user = users.find(v => v.email === email);
  
    const [salt, key] = user.password1.split(':');
    const hashedBuffer = scryptSync(password, salt, 32);
  
    const keyBuffer = Buffer.from(key, 'hex');
    const match = timingSafeEqual(hashedBuffer, keyBuffer);
    
    if (match) {
        return 'login success!'
    } else {
        return 'login fail!'
    }
}

const users = [];

const user = signup('foo@bar.com', 'password');

console.log(user)

const result = login('foo@bar.com', 'password')

console.log(result)