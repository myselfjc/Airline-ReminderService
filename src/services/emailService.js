const sender = require('../config/emailConfig');

const emailService = async (mailFrom, mailTo, mailSubject, mailBody) => {
        const response = await sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody
        });
        console.log(response);
}

module.exports = emailService;