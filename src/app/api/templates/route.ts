import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import { websites } from '@/constants'; 

export async function GET() {
  try {
    const templateNames = Object.keys(websites);
    return NextResponse.json(templateNames);
  } catch (err) {
    console.error('Error getting templates:', err);
    return NextResponse.json(
      { error: 'Failed to get templates' },
      { status: 500 }
    );
  }
}


export async function getFileContents(filePath: string): Promise<string> {
  try {
    return await fs.readFile(filePath, 'utf8');
  } catch (err) {
    throw new Error('Error reading the file: ' + (err as Error).message);
  }
}