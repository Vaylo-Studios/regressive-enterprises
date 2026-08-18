import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site-config";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const email = String(body.email ?? "").trim();
  const address = String(body.address ?? "").trim();
  const projectType = String(body.projectType ?? "").trim();
  const details = String(body.details ?? "").trim();

  if (!name || !phone || !details) {
    return NextResponse.json(
      { error: "Name, phone, and a description of the project are required." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ADMIN_NOTIFY_EMAIL;
  const from = process.env.EMAIL_FROM;

  if (!apiKey || !to || !from) {
    console.error("[api/quote] Missing RESEND_API_KEY, ADMIN_NOTIFY_EMAIL, or EMAIL_FROM");
    return NextResponse.json(
      { error: "Something went wrong on our end. Please call us directly instead." },
      { status: 500 }
    );
  }

  const html = `
    <h2>New project inquiry, ${siteConfig.name}</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email || "not provided")}</p>
    <p><strong>Property address:</strong> ${escapeHtml(address || "not provided")}</p>
    <p><strong>Project type:</strong> ${escapeHtml(projectType || "not specified")}</p>
    <p><strong>Details:</strong></p>
    <p>${escapeHtml(details).replace(/\n/g, "<br />")}</p>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: email || undefined,
        subject: `New project inquiry: ${name}`,
        html,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("[api/quote] Resend error", res.status, text);
      return NextResponse.json(
        { error: "Something went wrong sending your message. Please call us directly instead." },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("[api/quote] fetch failed", err);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please call us directly instead." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
