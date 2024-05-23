const jwt = require('jsonwebtoken');
const {secretKey} = require('../db/jwtConn');

function authenticateToken (req, res, next) {
    const authHeader = req.header("Authorization");
    if(!authHeader){
        return res.status(401).json({message: "UnAuthorize:Missing Token"});
    }
    const [bearer, token] = authHeader.split(" ");
    if (bearer !== "Bearer" || !token ){
        return res.status(401).json({message: "UnAuthorize: Invalid token format"});
    }


    jwt.verify(token, secretKey, (err, user) => {
        if(err){
            console.log({'error': err.message});
            return res.status(401).json({message: "Forbidden: Invalid token"});
        }
        req.user = user;
        next();
    });

}

function verifyToken(token){
    return jwt.verify(token, secretKey);
}

module.exports = {authenticateToken, verifyToken};