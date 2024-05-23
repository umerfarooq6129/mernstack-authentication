const user = require('../modals/user');

async function getUsers(){
    const users = await user.find();
    return users;
}

module.exports = {getUsers};