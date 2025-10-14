import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, mobile, amount, interest } = data;

    // 1. Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "vincitoregroup07@gmail.com",
        pass: "wmwo nvfd sgli jvbh",
      },
    });

    // 2. Email options
    const mailOptions = {
      from: `"Vincitore Group Website" <no-reply@gmail.com>`,
      to: "vincitoregroup07@gmail.com",
      subject: "New Investor Enquiry from Vincitore Group Website",
      text: `You have received a new investor enquiry.

Name: ${name}
Mobile: ${mobile}
Approx Amount: ${amount} Lacs
Interest Type: ${interest}

Please follow up promptly.`,
      html: `
  <div style="font-family: Arial, sans-serif; color: #333; background-color: #FFFFF0; padding: 20px; border-redius: 10px;">
    <div style="text-align: center; margin-bottom: 30px;">
      <img src="https://vincitoregroup.vercel.app/vincitore-gold.png" 
           alt="Vincitore Group Logo" 
           style="width: 150px; margin-bottom: 10px;" />
      <h2 style="color: #222; margin: 0; font-size: 22px;">New Investor Enquiry Received</h2>
    </div>

    <div>
      <p style="margin: 10px 0; color: #111;"><strong>Name:</strong> ${name}</p>
      <p style="margin: 10px 0; color: #111;"><strong>Mobile:</strong> ${mobile}</p>
      <p style="margin: 10px 0; color: #111;"><strong>Approx Amount:</strong> ${amount} Lacs</p>
      <p style="margin: 10px 0; color: #111;"><strong>Interest Type:</strong> ${interest}</p>
    </div>

    <p style="margin-top: 20px; color: #222;">
      Please follow up with the investor as soon as possible.
    </p>

    <p style="color: #888; font-size: 12px; margin-top: 30px;">
      This email was generated automatically by Vincitore Group website.
    </p>
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
