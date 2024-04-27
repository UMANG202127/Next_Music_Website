import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import { Elsie } from "next/font/google";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {

    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "435b68f001d770",
        pass: "********988a",
      },
    });

    const mailOptions = {
      from: "umangnimble2002@gmail.com",
      to: email,
      subject:
        emailType === "verify" ? "verify your email" : "Reset your Password",
      html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${
        emailType === "VERIFY" ? "verify your email" : "reset your password"
      }
            or copy and paste the link givern below in your browser.
            <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
            </p>`, // html body
    };

    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
