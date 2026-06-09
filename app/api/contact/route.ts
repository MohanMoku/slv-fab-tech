import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: "mohanmoku2004@gmail.com",
        subject: "New Website Enquiry",
        html: `
      <h2>New Enquiry</h2>
      ${Object.entries(data)
                .map(([key, value]) => `<p><b>${key}</b>: ${value}</p>`)
                .join("")}
    `,
    });

    return NextResponse.json({
        success: true,
    });
}