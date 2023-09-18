import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();
import { generateEmailContent } from './src/components/contact/emailContent';

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass,
  },
});
export const mailOptions = {
  from: email,
  to: email,
};
export const sendContactEmail = async (data) => {
  try {
    await transporter.sendMail({
      ...generateEmailContent(data),
      subject: data.subject,
    });
    return { success: true };
  } catch (err) {
    console.error(err);
    throw new Error("Failed to send email");
  }
};
app.post("/contact", async (req, res) => {
  try {
    const data = req.body;
    if (!data || !data.name || !data.email || !data.subject || !data.message) {
      return res.status(400).json({ message: "Bad request" });
    }
    const result = await sendContactEmail(data, 'http://localhost:5000/contact');
    return res.status(200).json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Failed to send email" });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
