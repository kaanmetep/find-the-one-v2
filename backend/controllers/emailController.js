import nodemailer from "nodemailer";

export const sendSupportMail = async (req, res) => {
  const { supportName, supportEposta, supportMessage } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      host: "smtppro.zoho.eu",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: "kaan@kmpcodes.com",
      subject: `Message from ${supportName}`,
      text: `Sender: ${supportName} <${supportEposta}>\n\nMessage: ${supportMessage}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Support message sent successfully." });
  } catch (error) {
    console.error("Support mail error:", error);
    res.status(500).json({
      message: "Failed to send support message.",
      error: error.message,
      stack: error.stack,
    });
  }
};
