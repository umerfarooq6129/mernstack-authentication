const bcrypt = require('bcrypt');
const User = require('../modals/user');
const { generateToken } = require('../utils/jwtUtils')
const {verifyToken } = require('../utils/authMiddleware')

async function Login(email, password){
    try{
        const existUser = await User.findOne({email});
        if(!existUser){
            throw new Error("User not found");
        }
        const isPasswordValid = bcrypt.compare(password, existUser.password);
        if(!isPasswordValid){
            throw new Error("Incorrect Password");
        }
        const Token = generateToken(existUser);
        return Token;
    }
    catch(err){
        console.log("error message", err.message);
        throw new Error("Invalid Crediential")
    }
}

async function refreshToken(oldToken){
    try{
        const decodeToken = verifyToken(oldToken);
        const user = User.findById(decodeToken._id)
        if(!user){
            throw new Error("User not found");
        }
        const newToken = generateToken(user);
        return newToken;
    }
    catch(err){
        console.log("error message", err.message);
        throw new Error("Invalid Crediential")
    }
}

module.exports = {Login}