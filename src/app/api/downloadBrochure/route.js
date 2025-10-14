import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, mobile, project } = await req.json();

    if (!name || !mobile) {
      return Response.json(
        { success: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    // Configure transporter securely (use environment variables)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "vincitoregroup07@gmail.com", // set in .env.local
        pass: "wmwo nvfd sgli jvbh", // app password, not regular password
      },
    });

    // Email content
    const mailOptions = {
      from: `"Vincitore Group" <${process.env.EMAIL_USER}>`,
      to: "vincitoregroup07@gmail.com",
      subject: `Brochure Download Request - ${project}`,
      html: `
        <h2>📄 New Brochure Download Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Project:</strong> ${project}</p>
        <hr/>
        <p>Generated automatically from the Vincitore website.</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return Response.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
