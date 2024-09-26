import nodemailer from "nodemailer";
import { generateHTMLTemplate } from "./generateHTMLTemplate";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  secure: true,
  port: 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = async (email: string, otp: string) => {
  await transporter.sendMail({
    from: process.env.EMAIL_FROM_USER,
    to: email,
    subject: "Hello World",
    html: generateHTMLTemplate(otp),
  });
};
