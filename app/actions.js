'use server' 
import nodemailer from "nodemailer";

export async function submitMemberShipForm(file) {
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const transporter = nodemailer.createTransport({
        host:process.env.SMTP_HOST,
        port:465,
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    const mailOptions = {
        from: process.env.MAIL_FROM,
        to: process.env.MAIL_TO,
        subject: "Form Upload - Membership Form",
        text: "Please find the attached membership form.",
        attachments: [
            {
                filename: "membership.pdf",
                content: fileBuffer,
            },
        ],
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent: " + info.response);
        return { success: true };
    } catch(err) {
        console.log({err});
        return { success: false, error: err.message };
        
    }

}