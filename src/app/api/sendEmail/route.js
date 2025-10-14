import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, mobile, message } = data;

    // 1. Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "vincitoregroup07@gmail.com",
        pass: "wmwo nvfd sgli jvbh",
      },
    });

    const mailOptions = {
      from: `"Vincitore Group Website" <no-reply@gmail.com>`, // professional sender name
      to: "vincitoregroup07@gmail.com", // recipient email
      subject: "New Inquiry from Vincitore Group Website",
      text: `You have received a new inquiry from the Vincitore Group website.

Name: ${name}
Mobile: ${mobile}
Message: ${message}

Please respond promptly.`,
      html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
      <div style="text-align: center; margin-bottom: 20px;">
        <img src="https://vincitoregroup.vercel.app/vincitore-gold.png" alt="Vincitore Group Logo" style="width: 150px;" />
        <h2 style="color: #B97D00;">New Inquiry Received</h2>
      </div>
      <p>Hello Vincitore Group Team,</p>
      <p>You have received a new inquiry from your website contact form:</p>
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr>
          <td style="padding: 8px; font-weight: bold; border: 1px solid #ddd;">Name</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold; border: 1px solid #ddd;">Mobile</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${mobile}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold; border: 1px solid #ddd;">Message</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${message}</td>
        </tr>
      </table>
      <p style="margin-top: 20px;">Please follow up with the client as soon as possible.</p>
      <p style="color: #888; font-size: 12px;">This email was generated automatically by Vincitore Group Website.</p>
    </div>
  `,
    };

    // 3. Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent!" }),
      {
        status: 200,
      }
    );
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      {
        status: 500,
      }
    );
  }
}
