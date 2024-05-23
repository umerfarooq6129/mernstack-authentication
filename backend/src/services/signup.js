const User = require('../modals/user');
const bcrypt = require('bcrypt');

async function createUser(userData) {
    const { name, email, password } = userData; 
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        name,
        email,
        password: hashedPassword,
        role: 'customer'
    });

    const savedUser = await newUser.save();
    return savedUser;
}

module.exports = { createUser };
