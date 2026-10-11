
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[char];
  });
}

export async function POST(request: Request) {
  try {
    if (
      !process.env.RESEND_API_KEY ||
      !process.env.CONTACT_TO_EMAIL ||
      !process.env.RESEND_FROM_EMAIL
    ) {
      console.error("Contact API environment variables are missing.");

      return NextResponse.json(
        { success: false, message: "The enquiry service is not configured." },
        { status: 500 }
      );
    }

    const body = await request.json();

    // Honeypot field for basic bot filtering.
    if (clean(body.website, 200)) {
      return NextResponse.json({ success: true });
    }

    const name = clean(body.name, 100);
    const email = clean(body.email, 254).toLowerCase();
    const phone = clean(body.phone, 30);
    const interest = clean(body.interest, 100);
    const message = clean(body.message, 3000);

    if (!name || !email || !phone || !interest || !message) {
      return NextResponse.json(
        { success: false, message: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a little more detail about your enquiry.",
        },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeInterest = escapeHtml(interest);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: [process.env.CONTACT_TO_EMAIL],
      replyTo: email,
      subject: `New IRIS consultation enquiry — ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;color:#343a31;max-width:640px;margin:auto">
          <div style="background:#343a31;padding:28px;color:#f7f5f0">
            <p style="letter-spacing:3px;font-size:11px">IRIS LIVING SPACES</p>
            <h1 style="font-family:Georgia,serif;font-weight:normal">
              New consultation enquiry
            </h1>
          </div>
          <div style="padding:28px;border:1px solid #e3e2d8">
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Phone:</strong> ${safePhone}</p>
            <p><strong>Area of interest:</strong> ${safeInterest}</p>
            <hr style="border:none;border-top:1px solid #e3e2d8;margin:24px 0" />
            <p><strong>Enquiry details:</strong></p>
            <p style="line-height:1.8">${safeMessage}</p>
          </div>
          <p style="color:#777c63;font-size:12px;padding:12px 0">
            Submitted through the IRIS Living Spaces website contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend delivery error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "We could not send your enquiry. Please try again.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been submitted successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again shortly.",
      },
      { status: 500 }
    );
  }
}
