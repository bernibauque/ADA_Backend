const crypto = require('crypto');

const data = 'Holis!';
const hash = crypto.createHash('sha256');
hash.update(data);
const hashOutput = hash.digest('hex');
console.log('Hash SHA-256" ', hashOutput);
