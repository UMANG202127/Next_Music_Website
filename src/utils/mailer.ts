import nodemailer from 'nodemailer';
import User from '@/models/userModel';
import bcryptjs from 'bcryptjs';

export const sendEmail = async({email, emailType, userId}: any) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10)

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId,
        {
          verifyToken: hashedToken,
          verifyTokenExpiry: Date.now() +  3600000
        }
      )
      
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId,
        {
          forgotPasswordToken: hashedToken,
          forgotPasswordTokenExpiry: Date.now() +  3600000
        }
      )
    }

    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "435b68f001d770",
        pass: "56a65fa67f988a"
        //todo add these credentials to the .env file.
      }
    });

    const mailOptions =  {
      from: 'umangnimble2002@gmail.com',
      to: email,
      subject: emailType === "VERIFY" ?  "Verify Your Email" :"Reset Your Password",
      html: `<p>Click <a href="${process.env.domain}/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}</p>`
    }

    const mailresponse = await transport.sendMail(mailOptions);
    return mailresponse;

  } catch (error:any) {
    throw new Error(error.message);
  }
}