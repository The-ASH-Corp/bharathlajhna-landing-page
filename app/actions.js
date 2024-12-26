'use server' 
import { createTableWithRowHeaders } from "@/utils/functions";
import nodemailer from "nodemailer";

export async function submitMemberShipForm({file = undefined,data = undefined}) {
    
    let mailOptions;
    const transporter = nodemailer.createTransport({
    host:process.env.SMTP_HOST,
    port:465,
    secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    try {
    if(file){
        console.log("Sendind mail from form file");
                const fileBuffer = Buffer.from(await file.arrayBuffer());

                mailOptions = {
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
    } else if(data){

        console.log("Sendind mail from form data");
        const tableHtml = createTableWithRowHeaders([data])
        
                mailOptions = {
                    from: process.env.MAIL_FROM,
                    to: process.env.MAIL_TO,
                    subject: "You Have An Enquiry From BLM Website-Membership Page",
                    // text: `Please find the details of the membership form:\n\n${JSON.stringify(data, null, 2)}`,
                    html: `
                    <p>Please find the details of the membership form:</p>
                    ${tableHtml}
                  `,
                };
    }


        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent: " + info.response);
        return { success: true };
    } catch(err) {
        console.log({err});
        return { success: false, error: err.message };
        
    }

}


export async function submitResume(formData) {
    try {

        const {name, mobileNo,email,address, whyShouldWeHireYou,file} = formData;



        const transporter = nodemailer.createTransport({
            host:process.env.SMTP_HOST,
            port:465,
            secure: true,
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS,
                },
            });

            const fileBuffer = Buffer.from(await file.originFileObj.arrayBuffer());
            const tableHtml = createTableWithRowHeaders([{name,mobileNo,email,address,whyShouldWeHireYou}])
            const mailOptions = {
                from: process.env.MAIL_FROM,
                to: process.env.MAIL_TO,
                subject: "You Have a new Job Application From BLM Website-Membership Page",
                // text: `Please find the details of the membership form:\n\n${JSON.stringify(data, null, 2)}`,
                html: `
                <p>Please find the details of the membership form:</p>
                ${tableHtml}
              `,
              attachments: [
                {
                    filename: `${name}.pdf`,
                    content: fileBuffer,
                },
            ],
            };
            const info = await transporter.sendMail(mailOptions);
            console.log("Email sent: " + info.response);
            return { success: true };
    } catch (error) {
        console.log({error});
        return { success: false, error: error.message };
    }
}