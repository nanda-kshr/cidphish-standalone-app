import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase'; // Adjust this import to match your firebase setup
import { verifyFirebaseToken } from '@/lib/firebase'; // Assume you have this auth helper

export async function GET(request: NextRequest) {
  try {
    // Get the token from the Authorization header
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: "Authentication required" }, { status: 401 });
    }
    
    const token = authHeader.split('Bearer ')[1];
    const user = await verifyFirebaseToken(token);
    
    if (!user || !user.uid) {
      return NextResponse.json({ error: "User not authenticated" }, { status: 400 });
    }
    
    const uid = user.uid;

    // Step 1: Query Firestore to get websites for the authenticated user
    const websitesSnapshot = await db.collection("websites")
                                   .where("uid", "==", uid)
                                   .get();

    if (websitesSnapshot.empty) {
      return NextResponse.json({ message: "No websites found for this user" }, { status: 404 });
    }

    // Prepare a map to store email counts
    const emailCounts: Record<string, number> = {};

    // Step 2: Query Firestore to get the count of emails grouped by websiteName
    const credentialsSnapshot = await db.collection("credentials")
                                      .where("uid", "==", uid)
                                      .get();

    // Count emails for each websiteName
    credentialsSnapshot.docs.forEach((doc) => {
      const { websiteName } = doc.data();
      if (websiteName) {
        emailCounts[websiteName] = (emailCounts[websiteName] || 0) + 1;
      }
    });
    
    // Step 3: Extract websites and merge with email counts
    const websites = websitesSnapshot.docs.map(doc => {
      const { websiteName, templateUsed, createdAt } = doc.data();
      return {
        websiteName,
        templateUsed,
        entries: emailCounts[websiteName] || 0,
        createdAt: createdAt?.toDate() || null
      };
    });

    // Step 4: Return combined data
    return NextResponse.json({ websites }, { status: 200 });
  } catch  {
    return NextResponse.json({ error: "Failed to fetch templates" }, { status: 500 });
  }
}