import { getGoogleSheetsAuth } from '@/app/lib/googleConfig';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {

    const body = await request.json();
    const { brandName, phone, email, location } = body;
    console.log('Received form data:', body);
    console.log('Client email:', process.env.GOOGLE_CLIENT_EMAIL);
    console.log('Private key exists:', process.env.GOOGLE_PRIVATE_KEY);
// Don't log the full private key for security reasons

    const sheets = await getGoogleSheetsAuth();
    
    // Add row to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:D',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[brandName, phone, email, location]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Submission error:', error);
    return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 });
  }
}