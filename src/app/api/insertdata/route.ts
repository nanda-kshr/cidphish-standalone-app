import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
// import { Resend } from 'resend';

export async function POST(request: Request) {
  try {

    // const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { uid, websiteName, email, password } = body;
    
    if (!websiteName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const websitename = websiteName.replaceAll(" ", "-");

    if (!uid || !websitename || !email || !password) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }
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