import { NextRequest, NextResponse } from 'next/server';
import { websites } from '@/constants'; // Adjust import path as needed
import { verifyFirebaseToken } from '@/lib/firebase'; // Adjust import path as needed

export async function GET(request: NextRequest) {
  try {
    // Authenticate first
    const token = request.headers.get('Authorization')?.split('Bearer ')[1];
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const user = await verifyFirebaseToken(token);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const uid = user.uid;
    const searchParams = request.nextUrl.searchParams;
    const title = searchParams.get('title');
    const template = searchParams.get('template');

    if (!title || !template || !(template in websites)) {
      return NextResponse.json({ error: "Invalid parameters" }, { status: 400 });
    }

    // Type assertion to let TypeScript know template is a valid key
    const validTemplate = template as keyof typeof websites;

    let fileContents = websites[validTemplate];
    fileContents = fileContents.replaceAll("user123user123", uid);
    fileContents = fileContents.replaceAll("user123user123", uid);
    fileContents = fileContents.replaceAll("mywebsitemywebsite", title);
    fileContents = fileContents.replaceAll("http://localhost:5237", process.env.HOST || "");

    // Create response with appropriate headers
    const response = new NextResponse(fileContents);
    response.headers.set('Content-Type', 'text/html');
    response.headers.set('Content-Disposition', `attachment; filename=${title}.html`);
    
    return response;
  } catch  {
    return NextResponse.json({ error: "Failed to download website" }, { status: 500 });
  }
}
