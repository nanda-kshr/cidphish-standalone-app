import { NextRequest, NextResponse } from 'next/server';
import { auth, db } from '@/lib/firebase'; 

export async function GET(request: NextRequest) {
    try {
        // Get query parameters from URL
        const searchParams = request.nextUrl.searchParams;
        const websiteName = searchParams.get('websiteName');
        
        // Extract the token from Authorization header
        const authHeader = request.headers.get('Authorization');
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        
        const token = authHeader.split(' ')[1];
        
        // Verify the token
        let decodedToken;
        try {
            decodedToken = await auth.verifyIdToken(token);
        } catch {
            return NextResponse.json({ error: "Invalid token" }, { status: 401 });
        }
        
        const uid = decodedToken.uid;
        
        if (!uid || !websiteName) {
            return NextResponse.json({ error: "UID and Website Name are required." }, { status: 400 });
        }
        
        const snapshot = await db.collection("credentials")
            .where("uid", "==", uid)
            .where("websiteName", "==", websiteName)
            .get();

        if (snapshot.empty) {
            return NextResponse.json({ message: "No credentials found for the provided UID and Website Name." }, { status: 404 });
        }

        const credentials = snapshot.docs.map(doc => {
            const data = doc.data();
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { id: _id, uid: _uid, ...rest } = data;
            return rest;
        });

        console.log(`Fetched credentials for UID: ${uid}, Website: ${websiteName}`, credentials);

        return NextResponse.json(credentials, { status: 200 });
    } catch {
        return NextResponse.json({ error: "Failed to fetch credentials" }, { status: 500 });
    }
}