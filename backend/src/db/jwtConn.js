const crypto = require('crypto');

const secretKey = crypto.randomBytes(32).toString();

module.exports = {
  secretKey: secretKey,
};