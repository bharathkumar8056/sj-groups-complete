import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }
  return text.replace(/[&<>"']/g, (char) => map[char])
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, message } = body

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Check if Resend API key is configured
    const resendApiKey = process.env.RESEND_API_KEY
    
    if (resendApiKey) {
      // Use Resend API (free tier available at https://resend.com)
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "noreply@sjgroups.com",
          to: "sjgroupsvpm@gmail.com",
          subject: `Product Inquiry from ${name} - SJ GROUPS`,
          replyTo: email,
          html: `
            <h2>New Product Inquiry</h2>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
            <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
            <p><strong>Company:</strong> ${escapeHtml(company || "Not provided")}</p>
            <hr />
            <p><strong>Message:</strong></p>
            <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
          `,
        }),
      })

      if (!response.ok) {
        const error = await response.text()
        console.error("Resend API error:", error)
        throw new Error("Failed to send email via Resend")
      }

      return NextResponse.json(
        { success: true, message: "Email sent successfully!" },
        { status: 200 }
      )
    } else {
      // Fallback: Log the message (emails won't actually be sent until Resend is configured)
      console.log("Email received (service not configured - add RESEND_API_KEY to .env.local):", {
        name,
        email,
        phone,
        company,
        message,
        timestamp: new Date().toISOString(),
      })

      return NextResponse.json(
        { 
          success: true, 
          message: "Thank you! Your message has been received. We'll contact you shortly at " + email 
        },
        { status: 200 }
      )
    }
  } catch (error) {
    console.error("Email sending error:", error)
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    )
  }
}

