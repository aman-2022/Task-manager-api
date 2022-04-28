const sgMail = require ('@sendgrid/mail');

sgMail.setApiKey(process.env.sendgridAPIKey)
const sendWelcomeEmail = (email,name) =>{

    sgMail.send({
        to:email,
        from:'info@mnyinfotech.com',
        subject:'Thanks for joining in!',
        text:`Welcome to the app,${name}.`
    })
}

const sendCancelationEmail = (email,name) =>{

    sgMail.send({
        to:email,
        from:'info@mnyinfotech.com',
        subject: 'Sorry for the inconvenience.',
        text:`Goodbye,${name}.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}