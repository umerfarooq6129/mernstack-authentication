const jwt = require("jsonwebtoken");
const { secretKey} = require("../db/jwtConn");

function generateToken(user){
    const payload = {
        id: user.id,
        name: user.name,
        email: user.email
    }
    return jwt.sign(payload, secretKey, {expiresIn: '1h'});
}

module.exports = {
    generateToken
}