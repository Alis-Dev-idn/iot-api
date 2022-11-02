const nodemailer = require("nodemailer");

const SendMail =  async (username, email, code) => {
    let transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: true,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PWD
        }
    });

    let send = await transporter.sendMail({
        from: '"Activate Account" <no-replay@smpvanilla.com>',
        to: email,
        subject: "Activated Your Account",
        html: `<p>active account : 
        <a href=\"${process.env.SSL? `https://${process.env.HOST_URL}:${process.env.PORT_HOST}/active?username=${username}&code=${code}` 
        : `http://${process.env.HOST_URL}:${process.env.PORT_HOST}/active?username=${username}&code=${code}` }\">klik</a></p>`
    });
    console.log(send.messageId);
    return send.messageId;
}

module.exports = SendMail;