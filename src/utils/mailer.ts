import nodemailer from 'nodemailer';

export const sendEmail = async({email, emailType, userId}:any) => {

    try {
        //TODO: configure mail for usage


        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // Use `true` for port 465, `false` for all other ports
            auth: {
              user: "maddison53@ethereal.email",
              pass: "jn7jnAPss4f63QBp6D",
            },
          });

          const mailOptions ={
            from: 'umangnimble2002@gmail.com', 
            to: email,
            subject: emailType === 'verify' ? "verify your email" : "Reset your Password", 
            html: "<b>Hello world?</b>", // html body
          }

          const mailResponse = await transporter.sendMail(mailOptions)
          return mailResponse

    } catch (error:any) {
        throw new Error(error.message)
    }
}