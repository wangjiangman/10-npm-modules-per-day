var uuid = require('uuid');

console.log(uuid.v1());
console.log(uuid.v4());

const buffer = new Array(32);
console.log(uuid.v1(null, buffer, 0));
console.log(uuid.v1(null, buffer, 16));