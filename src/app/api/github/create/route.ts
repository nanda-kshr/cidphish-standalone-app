import { NextRequest, NextResponse } from 'next/server';
import { db, verifyFirebaseToken } from '@/lib/firebase'; 


export async function POST(request: NextRequest) {
  try {
    // Authenticate Firebase token
    const idToken = request.headers.get('authorization')?.split('Bearer ')[1];
    if (!idToken) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    const decodedToken = await verifyFirebaseToken(idToken);
    const uid = decodedToken.uid;
    
    // Parse request body
    const { websiteName, templateUsed } = await request.json();
    
    if (!websiteName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    
    const formattedWebsiteName = websiteName.replaceAll(" ", "-");

    await db.collection("websites").add({
      uid,
      websiteName: formattedWebsiteName,
      templateUsed,
      createdAt: new Date(),
    });
    
    return NextResponse.json({ message: "Website added successfully" }, { status: 201 });
  } catch {

    return NextResponse.json({ error: "Failed to add website" }, { status: 500 });
  }
}