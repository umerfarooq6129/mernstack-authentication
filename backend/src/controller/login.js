const authService = require("../services/login");

async function login(req, res) {
    try{
        const {email, password} = req.body;
        const token = await authService.Login(email, password);
        res.json({token:token});
    } catch(err){
        res.status(401).json({message: "Invalid Creidential"});
    }
}

async function refreshToken(req, res) {
    try{
        const {token} = req.body;
        const newToken = await authService.refrehToken(token);
        res.json({newToken:newToken});
    } catch(err){
        res.status(401).json({message: "Invalid Token"});
    }
}

module.exports = {
    login, 
    refreshToken
}