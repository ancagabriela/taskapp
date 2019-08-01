const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ancag.munteanu@gmail.com',
        subject: 'Thanks for joining us!',
        text: `Welcome ${name}!` //we can only use ` not ' or ""
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ancag.munteanu@gmail.com',
        subject: `We are sorry to see you leave ${name}`,
        text: 'How could we have improved our service?'
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}

//Testing
// sgMail.send({
//     to: 'ancag.munteanu@gmail.com',
//     from: 'ancag.munteanu@gmail.com',
//     subject: 'Testing',
//     text: 'It works!'
// })

//if you don't get a domain it will always be sent to spam
// check Sender Authentication  https://app.sendgrid.com/settings/sender_auth