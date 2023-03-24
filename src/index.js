const express = require('express');
const { PORT } = require('./config/serverConfig');

const app = express();

const emailService = require('./services/emailService');


const serverStartAndSetup = async () =>{
    app.listen(PORT, () => {
        console.log(`Server running on ${PORT}`);
    });
    emailService(
        'devnodemailer024@gmail.com',
        'reactjs4038@gmail.com',
        'Testing email',
        'This is a testing email SIR!'
    )
}

serverStartAndSetup();