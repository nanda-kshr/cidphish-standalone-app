import { NextRequest, NextResponse } from 'next/server';
import { db, verifyFirebaseToken } from '@/lib/firebase'; 

export async function POST(request: NextRequest) {
  try {
    // Authenticate user
    const token = request.headers.get('Authorization')?.split('Bearer ')[1];
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const user = await verifyFirebaseToken(token);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Parse request body
    const { websiteName } = await request.json();
    
    if (!websiteName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const formattedWebsiteName = websiteName.replaceAll(" ", "-");
    
    // Query Firestore
    const querySnapshot = await db
      .collection("websites")
      .where("uid", "==", user.uid)
      .where("websiteName", "==", formattedWebsiteName)
      .get();

    if (!querySnapshot.empty) {
      const deletePromises = querySnapshot.docs.map(doc => doc.ref.delete());
      await Promise.all(deletePromises);
    }

    return NextResponse.json({ message: "Website deleted successfully" }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Failed to delete website" }, { status: 500 });
  }
}