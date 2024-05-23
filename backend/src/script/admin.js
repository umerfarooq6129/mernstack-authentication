const User = require('../modals/user');
const bcrypt = require('bcrypt');

async function createAdminAccount() {
    try{
        const existAdmin = await User.findOne({ email: 'admin@gmail.com' });
        if(!existAdmin){
            const newAdmin = new User({
                name: 'admin',
                email: 'admin@gmail.com',
                password: await bcrypt.hash('admin', 10),
                role: 'admin'
            })
            await newAdmin.save();
            console.log('admin account created successfully');
        } else{
            console.log('admin already exists');
        }
    }
    catch(err){
        console.log(err.message)
    }
}
module.exports = createAdminAccount;