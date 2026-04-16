import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default async function handler(
  req: any,
  res: any
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, phone, message }: ContactPayload = req.body ?? {};

    if (!name || !email || !message) {
      return res.status(400).json({
        error: "Name, email, and message are required.",
      });
    }

    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safePhone = escapeHtml((phone || "").trim());
    const safeMessage = escapeHtml(message.trim()).replace(/\n/g, "<br />");

    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!toEmail || !fromEmail || !process.env.RESEND_API_KEY) {
      return res.status(500).json({
        error: "Email environment variables are not configured.",
      });
    }

    const { error } = await resend.emails.send({
      from: `Tune Town Website <${fromEmail}>`,
      to: [toEmail],
      replyTo: email.trim(),
      subject: `New Website Inquiry from ${name.trim()}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2 style="margin-bottom: 16px;">New Contact Form Submission</h2>
          <table cellpadding="8" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%; max-width: 700px;">
            <tr>
              <td style="font-weight: bold; width: 140px;">Name</td>
              <td>${safeName}</td>
            </tr>
            <tr>
              <td style="font-weight: bold;">Email</td>
              <td>${safeEmail}</td>
            </tr>
            <tr>
              <td style="font-weight: bold;">Phone</td>
              <td>${safePhone || "-"}</td>
            </tr>
            <tr>
              <td style="font-weight: bold; vertical-align: top;">Message</td>
              <td>${safeMessage}</td>
            </tr>
          </table>
        </div>
      `,
    });

    if (error) {
      return res.status(500).json({
        error: "Failed to send email.",
        details: error.message,
      });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({
      error: "Unexpected server error.",
    });
  }
}