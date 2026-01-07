import nodemailer from "nodemailer";

export const sendEmail = async (to, subject, text) => {
  try {
    console.log("📧 Preparing to send email...");
    console.log("EMAIL_USER =", process.env.EMAIL_USER);
    console.log("EMAIL_PASS loaded =", !!process.env.EMAIL_PASS);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Student Portal" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
    });
    

    console.log("✅ Email sent successfully to:", to);
  } catch (error) {
    console.error("❌ Email error:", error.message);
  }
};
