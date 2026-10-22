const projectTypes = new Set([
  "Freelance Web Project",
  "Full-time Role",
  "UI/UX Design & Frontend",
  "Technical Consultation",
]);

export async function POST(request: Request) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return Response.json(
      { success: false, message: "The contact form is not configured yet. Please email directly." },
      { status: 503 }
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ success: false, message: "Invalid form submission." }, { status: 400 });
  }

  if (!payload || typeof payload !== "object") {
    return Response.json({ success: false, message: "Invalid form submission." }, { status: 400 });
  }

  const { name, email, projectType, message } = payload as Record<string, unknown>;
  if (
    typeof name !== "string" ||
    name.trim().length < 1 ||
    name.length > 120 ||
    typeof email !== "string" ||
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    typeof projectType !== "string" ||
    !projectTypes.has(projectType) ||
    typeof message !== "string" ||
    message.trim().length < 10 ||
    message.length > 5000
  ) {
    return Response.json({ success: false, message: "Please check the form fields and try again." }, { status: 400 });
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: name.trim(),
        email: email.trim(),
        subject: `New TILABS Inquiry: ${projectType} from ${name.trim()}`,
        project_type: projectType,
        message: message.trim(),
        from_name: "TILABS Portfolio Contact",
      }),
      cache: "no-store",
    });

    const result = (await response.json()) as { success?: boolean };
    if (!response.ok || !result.success) {
      return Response.json(
        { success: false, message: "Unable to send your message right now. Please email directly." },
        { status: 502 }
      );
    }

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { success: false, message: "Unable to send your message right now. Please email directly." },
      { status: 502 }
    );
  }
}