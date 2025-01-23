import { NextRequest, NextResponse } from 'next/server';
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const companyRecipientEmail = "garrygs059@gmail.com"

export async function POST(req: NextRequest) {
    const { fullName, phoneNo, email, message } = await req.json();

    if (!fullName || !phoneNo || !email || !message) {
        return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: companyRecipientEmail,
            subject: 'New Contact Form Submission',
            text: `You have a new message from ${fullName} (${email}, ${phoneNo}):\n\n${message}`,
            html: `<p>You have a new message from <strong>${fullName}</strong> (${email}, ${phoneNo}):</p><p>${message}</p>`,
        });
        console.log("executed sendMail() ")

        return NextResponse.json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
    }
}
