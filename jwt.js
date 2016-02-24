'use strict';

const jsonwebtoken = require('jsonwebtoken');
const keyId = process.argv[2];
const secret = process.argv[3];

const jwt = jsonwebtoken.sign({
    scope: 'app'
}, secret, {
    headers: {
        kid: keyId
    }
});

console.log(jwt);
