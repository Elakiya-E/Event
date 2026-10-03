import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("[submit-enquiry] Received payload:", JSON.stringify(body));

    const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
    if (!scriptUrl) {
      console.error("[submit-enquiry] NEXT_PUBLIC_GOOGLE_SCRIPT_URL is not set");
      return NextResponse.json(
        { success: false, message: "Script URL not configured." },
        { status: 500 }
      );
    }

    console.log("[submit-enquiry] POSTing to Google Apps Script:", scriptUrl);

    // Step 1: POST to the /exec URL without following redirects.
    // Google Apps Script processes the request on the backend and responds
    // with a 302 redirect pointing to a "echo" delivery URL.
    const firstRes = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      redirect: "manual",
    });

    console.log("[submit-enquiry] First response status:", firstRes.status);

    // Step 2: If redirected (302/301/307/308), GET the Location URL to read
    // the response. Do NOT re-POST — the echo URL only accepts GET.
    let resultText: string;

    if (
      firstRes.status === 302 ||
      firstRes.status === 301 ||
      firstRes.status === 307 ||
      firstRes.status === 308
    ) {
      const location = firstRes.headers.get("location");
      console.log("[submit-enquiry] Redirect location:", location);

      if (!location) {
        return NextResponse.json(
          { success: false, message: "Redirect with no location header." },
          { status: 502 }
        );
      }

      // GET the echo URL to retrieve what the Apps Script returned
      const echoRes = await fetch(location, { method: "GET" });
      console.log("[submit-enquiry] Echo response status:", echoRes.status);
      resultText = await echoRes.text();
    } else {
      // No redirect — read the response directly
      resultText = await firstRes.text();
    }

    console.log("[submit-enquiry] Raw response body:", resultText);

    let result: Record<string, unknown> = { success: true };
    try {
      result = JSON.parse(resultText);
    } catch {
      // Non-JSON — treat a 200-range first response as success
      result = { success: firstRes.ok || firstRes.status < 400 };
    }

    if (result.success === false) {
      console.error("[submit-enquiry] Script returned failure:", result);
      return NextResponse.json(
        {
          success: false,
          message:
            (result.message as string) ||
            "Unable to save your enquiry. Please try again.",
        },
        { status: 502 }
      );
    }

    console.log("[submit-enquiry] ✅ Success:", result);
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unexpected error";
    console.error("[submit-enquiry] Exception:", message);
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
