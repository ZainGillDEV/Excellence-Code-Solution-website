import { site } from "@/data/site";

/**
 * Email delivery via SMTP (nodemailer).
 *
 * Configure in .env.local:
 *   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
 *   MAIL_FROM   — the "from" address
 *   MAIL_TO     — where enquiries are delivered (defaults to site.email)
 *
 * When SMTP is not configured the API still succeeds and stores the
 * enquiry — it just logs that no mail was sent, so local development and a
 * first deploy work without an email account.
 */

const smtpConfigured = Boolean(
  process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS
);

export const mailerReady = smtpConfigured;

let transporterPromise = null;

async function getTransporter() {
  if (!smtpConfigured) return null;

  if (!transporterPromise) {
    transporterPromise = import("nodemailer").then(({ default: nodemailer }) =>
      nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })
    );
  }

  return transporterPromise;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function notificationHtml(data) {
  const row = (label, value) => `
    <tr>
      <td style="padding:8px 14px;color:#6f6879;font-size:13px;width:120px;">${label}</td>
      <td style="padding:8px 14px;color:#2e2140;font-size:13px;font-weight:600;">${escapeHtml(
        value
      )}</td>
    </tr>`;

  return `
  <div style="font-family:system-ui,-apple-system,'Segoe UI',sans-serif;background:#fcfaff;padding:24px;">
    <div style="max-width:560px;margin:auto;background:#fff;border:1px solid #efe9f5;border-radius:16px;overflow:hidden;">
      <div style="background:linear-gradient(135deg,#74489f,#8a63b4);padding:20px 24px;">
        <div style="color:#fff;font-size:18px;font-weight:700;">New enquiry — ${site.name}</div>
        <div style="color:rgba(255,255,255,.8);font-size:13px;">via the website contact form</div>
      </div>
      <table style="width:100%;border-collapse:collapse;">
        ${row("Name", data.name)}
        ${row("Email", data.email)}
        ${data.phone ? row("Phone", data.phone) : ""}
        ${row("Subject", data.subject)}
      </table>
      <div style="padding:14px 24px 24px;">
        <div style="color:#6f6879;font-size:13px;margin-bottom:6px;">Message</div>
        <div style="color:#2e2140;font-size:14px;line-height:1.7;white-space:pre-wrap;">${escapeHtml(
          data.message
        )}</div>
      </div>
    </div>
  </div>`;
}

function autoReplyHtml(data) {
  return `
  <div style="font-family:system-ui,-apple-system,'Segoe UI',sans-serif;background:#fcfaff;padding:24px;">
    <div style="max-width:560px;margin:auto;background:#fff;border:1px solid #efe9f5;border-radius:16px;overflow:hidden;">
      <div style="background:linear-gradient(135deg,#74489f,#8a63b4);padding:22px 24px;">
        <div style="color:#fff;font-size:19px;font-weight:700;">Thanks for getting in touch</div>
      </div>
      <div style="padding:22px 24px;color:#4c4658;font-size:14px;line-height:1.75;">
        <p style="margin:0 0 12px;">Hi ${escapeHtml(data.name)},</p>
        <p style="margin:0 0 12px;">
          We've received your message about <strong>${escapeHtml(
            data.subject
          )}</strong> and a member of our team will get back to you within 24 hours.
        </p>
        <p style="margin:0 0 18px;">In the meantime, feel free to reply to this email with anything you'd like to add.</p>
        <p style="margin:0;color:#2e2140;font-weight:600;">— The ${site.fullName} team</p>
      </div>
    </div>
  </div>`;
}

export async function sendContactEmails(data) {
  const transporter = await getTransporter();

  if (!transporter) {
    console.info(
      "[mailer] SMTP not configured — enquiry stored but no email sent."
    );
    return { sent: false, reason: "smtp-not-configured" };
  }

  const from = process.env.MAIL_FROM || process.env.SMTP_USER;
  const to = process.env.MAIL_TO || site.email;

  // The notification to the team is what matters; a failed auto-reply must
  // never fail the request.
  await transporter.sendMail({
    from: `"${site.name} Website" <${from}>`,
    to,
    replyTo: `"${data.name}" <${data.email}>`,
    subject: `New enquiry: ${data.subject} — ${data.name}`,
    text: `${data.name} <${data.email}>\n${data.phone || ""}\n\n${data.message}`,
    html: notificationHtml(data),
  });

  try {
    await transporter.sendMail({
      from: `"${site.fullName}" <${from}>`,
      to: data.email,
      subject: `We've received your message — ${site.name}`,
      text: `Hi ${data.name},\n\nThanks for contacting ${site.fullName}. We'll get back to you within 24 hours.\n\n— The ${site.name} team`,
      html: autoReplyHtml(data),
    });
  } catch (error) {
    console.warn("[mailer] auto-reply failed:", error.message);
  }

  return { sent: true };
}
