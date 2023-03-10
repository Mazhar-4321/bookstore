import logger from '../config/myLogger';
const nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'syedmazharali742@gmail.com',
        pass: 'wifncqjudispvcld'
    }
});


export const sendEmail = async (recipient, message,response) => {
    try {
    var result=    await transporter.sendMail({
            from: 'syedmazharali742@gmail.com',
            to: recipient,
            subject: 'Reset Password Link',
            text: `${message}`
        }, (err, res) => {
            if (err) {
                logger.error("Could not Send Email",recipient)
                response.status(400).json({
                    code: 400,
                    error: "Email Sending Failed",
                  });
            }
            logger.info(`Email sent successfully ${recipient}`)
            response.status(200).json({
                code: 200,
                message: "Email Sent Successfully",
              });
        });
    } catch (err) {
        logger.error("Could not Send Email",recipient)
        throw new Error(err);
    }
}
