const express = require('express');
require('./src/db/conn'); 
const bodyParser = require('body-parser');
const cors = require('cors');

const signupRoute = require('./src/route/signup');
const loginRoute = require('./src/route/login');
const userRoute = require('./src/route/user')

const app = express();
const createAdminAccount = require('./src/script/admin')

app.use(bodyParser.json());
app.use(cors());

createAdminAccount();

app.use('/user', signupRoute);
app.use('/auth', loginRoute);
app.use('/api', userRoute);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
