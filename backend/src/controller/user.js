const userServices = require('../services/user');

async function getUsers(req, res){
    try{
        const users = await userServices.getUsers();
        res.json(users);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
}

module.exports = {getUsers};