import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { 
      businessName, 
      whatYouSell, 
      description, 
      productsList, 
      colors, 
      style, 
      name, 
      contactInfo, 
      tier, 
      extras 
    } = data;

    const { data: emailData, error } = await resend.emails.send({
      from: 'NextGen Sites <onboarding@resend.dev>',
      to: ['lizziemaea12@gmail.com'],
      subject: `New NextGen Sites Request - ${businessName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #4F46E5; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">New Website Request</h2>
          
          <p><strong>Business Name:</strong> ${businessName}</p>
          <p><strong>What they sell:</strong> ${whatYouSell}</p>
          <p><strong>Description:</strong> ${description}</p>
          <p><strong>Products List:</strong> ${productsList || 'None specified'}</p>
          <p><strong>Colors & Style:</strong> ${colors || 'Not specified'} (${style})</p>
          
          <h3 style="color: #F43F5E; margin-top: 30px;">Contact Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Contact Info:</strong> ${contactInfo}</p>
          
          <h3 style="color: #4F46E5; margin-top: 30px;">Plan Details</h3>
          <p><strong>Tier Selected:</strong> <span style="text-transform: uppercase; font-weight: bold;">${tier}</span></p>
          <p><strong>Extra Notes:</strong> ${extras || 'None'}</p>
          
          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
            Sent automatically by NextGen Sites Notification System via Resend.
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: emailData?.id });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
