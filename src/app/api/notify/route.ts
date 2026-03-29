/* eslint-disable @typescript-eslint/no-explicit-any */
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

    const { data: adminEmail, error: adminError } = await resend.emails.send({
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

    if (adminError) {
      return NextResponse.json({ error: adminError }, { status: 500 });
    }

    // Send confirmation email to customer if it's an email address
    if (contactInfo && contactInfo.includes('@')) {
      const isFreeTier = tier === 'free';
      const customerSubject = "Your NextGen Sites request is confirmed! 🎉";

      let customerHtml = '';
      if (isFreeTier) {
        customerHtml = `
          <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
            <p>Hey ${name}!</p>
            <p>I&apos;got your request for <strong>${businessName}</strong> and I&apos;m excited to build your site!</p>
            <p>Here&apos;s what happens next:</p>
            <ol>
              <li>I&apos;ll review your info over the next 24 hours</li>
              <li>I&apos;ll get started building your free site</li>
              <li>A shareable link to your website will be in your email in 5-7 days!</li>
            </ol>
            <p>Your free site will include your products, contact info, and a clean design so customers can find you online. It will be ready within about a week.</p>
            <p>If you have any questions in the meantime, reply to this email or reach out at <a href="mailto:lizziemaea12@gmail.com">lizziemaea12@gmail.com</a>.</p>
            <p>Can&apos;t wait to help ${businessName} grow!</p>
            <p>— Lizzie<br>NextGen Sites<br><a href="https://next-gen-sites.vercel.app">next-gen-sites.vercel.app</a></p>
          </div>
        `;
      } else {
        // Starter or Pro (Seller)
        customerHtml = `
          <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
            <p>Hey ${name}!</p>
            <p>I got your request for <strong>${businessName}</strong> and it sounds like an awesome business — I&apos;d love to work with you!</p>
            <p>Since you&apos;re interested in a paid tier, here&apos;s what happens next:</p>
            <ol>
              <li>I&apos;ll review your info over the next 24 hours</li>
              <li>I&apos;ll reach out to discuss exactly what you want and confirm pricing</li>
              <li>Once we agree on details, I&apos;ll get started building your site</li>
              <li>I&apos;ll send you a video demonstration of your fully working site</li>
              <li>You&apos;re welcome to suggest edits, and once we have a final version, you pay via Venmo or cash</li>
              <li>I&apos;ll send you a shareable link with all your requested features within 24 hours!</li>
            </ol>
            <p>No payment is needed until we&apos;ve talked and you&apos;re happy with the plan.</p>
            <p>If you have any questions in the meantime, reply to this email or reach out at <a href="mailto:lizziemaea12@gmail.com">lizziemaea12@gmail.com</a>.</p>
            <p>Can&apos;t wait to help ${businessName} grow!</p>
            <p>— Lizzie<br>NextGen Sites<br><a href="https://next-gen-sites.vercel.app">next-gen-sites.vercel.app</a></p>
          </div>
        `;
      }

      await resend.emails.send({
        from: 'NextGen Sites <onboarding@resend.dev>',
        to: [contactInfo.trim()],
        subject: customerSubject,
        html: customerHtml,
      });
    }

    return NextResponse.json({ success: true, id: adminEmail?.id });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
