import { NextResponse } from "next/server"
import { z } from "zod"

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  sessionType: z.string().min(1),
  message: z.string().min(10),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    // -------------------------------------------------------
    // Email sending goes here.
    // Option A — Resend (recommended):
    //   1. npm install resend
    //   2. Add RESEND_API_KEY to .env.local
    //   3. Uncomment and fill in the block below:
    //
    // import { Resend } from "resend"
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: "no-reply@yourdomain.com",
    //   to: "hello@prashantkumar.com",
    //   subject: `New inquiry from ${data.name}`,
    //   text: `
    //     Name: ${data.name}
    //     Email: ${data.email}
    //     Phone: ${data.phone || "—"}
    //     Session type: ${data.sessionType}
    //     Message: ${data.message}
    //   `,
    // })
    // -------------------------------------------------------

    console.log("Contact form submission:", data)

    return NextResponse.json({ success: true })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid form data." }, { status: 400 })
    }
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 })
  }
}
