import Link from 'next/link';
import { Rocket, CheckCircle, MessageSquare, Video, Link as LinkIcon, Mail } from 'lucide-react';

export default function Pricing() {
  return (
    <main>
      {/* Header Section */}
      <section className="bg-gradient text-center" style={{ padding: '80px 24px' }}>
        <div className="container animate-fade-in" style={{ maxWidth: '800px' }}>
          <h1 className="text-gradient" style={{ fontSize: '3.5rem', marginBottom: '24px' }}>
            Pricing & Tiers
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#475569', marginBottom: '0', maxWidth: '600px', margin: '0 auto' }}>
            Choose the perfect plan for your kid-owned business.
            No hidden fees, just simple pricing for professional results.
          </p>
        </div>
      </section>

      {/* Tiers Section */}
      <section style={{ padding: '80px 24px', backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div className="grid-cols-3">
            {/* Free Foundation */}
            <div className="card" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Free Foundation</h3>
              <p style={{ fontWeight: 700, fontSize: '2.5rem', color: 'var(--text-main)', marginBottom: '8px' }}>$0</p>
              <p style={{ fontSize: '1rem', marginBottom: '24px', fontWeight: 600, color: 'var(--primary)' }}>Built in 5-7 days</p>
              <ul style={{ listStyle: 'none', marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><CheckCircle size={20} color="var(--primary)" /> 1-page site</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><CheckCircle size={20} color="var(--primary)" /> Custom colors</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><CheckCircle size={20} color="var(--primary)" /> Product list</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><CheckCircle size={20} color="var(--primary)" /> Contact info</li>
              </ul>
              <Link href="/request?tier=free" className="btn btn-secondary" style={{ width: '100%', padding: '14px' }}>Choose Free</Link>
            </div>

            {/* Starter Shop */}
            <div className="card" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', border: '3px solid var(--primary)', position: 'relative', transform: 'scale(1.05)', zIndex: 10 }}>
              <span style={{
                position: 'absolute', top: '-16px', left: '50%', transform: 'translateX(-50%)',
                background: 'var(--primary)', color: 'white',
                padding: '6px 20px', borderRadius: '99px', fontSize: '0.875rem', fontWeight: 700,
                boxShadow: 'var(--shadow-primary)'
              }}>Most Popular</span>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Starter Shop</h3>
              <p style={{ fontWeight: 700, fontSize: '2.5rem', color: 'var(--text-main)', marginBottom: '8px' }}>$20</p>
              <p style={{ fontSize: '1rem', marginBottom: '24px', fontWeight: 600, color: 'var(--primary)' }}>Built in 1 week</p>
              <ul style={{ listStyle: 'none', marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><CheckCircle size={20} color="var(--primary)" /> Multi-page site</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><CheckCircle size={20} color="var(--primary)" /> Better design</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><CheckCircle size={20} color="var(--primary)" /> Order form</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><CheckCircle size={20} color="var(--primary)" /> Admin dashboard</li>
              </ul>
              <Link href="/request?tier=starter" className="btn btn-primary" style={{ width: '100%', padding: '14px' }}>Choose Starter</Link>
            </div>

            {/* Pro Store */}
            <div className="card" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Pro Store</h3>
              <p style={{ fontWeight: 700, fontSize: '2.5rem', color: 'var(--text-main)', marginBottom: '8px' }}>$50</p>
              <p style={{ fontSize: '1rem', marginBottom: '24px', fontWeight: 600, color: 'var(--primary)' }}>Built in 1-2 weeks</p>
              <ul style={{ listStyle: 'none', marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><CheckCircle size={20} color="var(--primary)" /> Everything in Starter</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><CheckCircle size={20} color="var(--primary)" /> Inventory tracker</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><CheckCircle size={20} color="var(--primary)" /> AI marketing help</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><CheckCircle size={20} color="var(--primary)" /> Manager dashboard</li>
              </ul>
              <Link href="/request?tier=pro" className="btn btn-secondary" style={{ width: '100%', padding: '14px' }}>Choose Pro</Link>
            </div>
          </div>

          {/* Note Section */}
          <div style={{
            marginTop: '80px',
            padding: '32px',
            backgroundColor: 'var(--background)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border)',
            maxWidth: '900px',
            margin: '80px auto 0'
          }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ background: 'var(--primary-light)', padding: '12px', borderRadius: '12px' }}>
                <Mail color="var(--primary)" size={24} />
              </div>
              <div>
                <h4 style={{ marginBottom: '12px' }}>Important Details</h4>
                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '16px' }}>
                  After submitting your request, I will reach out within <strong>24 hours</strong> to confirm your details before any payment or finalization. You will receive a video demo of your site within one week.
                </p>
                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '0' }}>
                  Paid users may suggest edits after they pay and before the site is published. Please note that continuing from there, there will be an additional cost for site updates. Contact <a href="mailto:lizziemaea12@gmail.com" style={{ color: 'var(--primary)', fontWeight: 600 }}>lizziemaea12@gmail.com</a> for more details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Paid Tiers Work */}
      <section style={{ padding: '80px 24px', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem' }}>How Paid Tiers Work</h2>
            <p>A simple step-by-step process to get your professional shop live.</p>
          </div>
          <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
            {/* Step Line (Mobile hidden) */}
            <div style={{
              position: 'absolute', top: '40px', left: '20px', right: '20px',
              height: '2px', background: 'var(--border)', zIndex: 0,
              display: 'none' // We'll handle this with a simpler approach for now
            }}></div>

            <div className="grid-cols-2" style={{ gap: '40px', maxWidth: '800px', margin: '0 auto' }}>
              <div className="text-center" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  background: 'var(--surface)', color: 'var(--primary)',
                  width: '64px', height: '64px', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px', boxShadow: 'var(--shadow-md)', border: '2px solid var(--primary-light)'
                }}>
                  <Rocket size={28} />
                </div>
                <h3>1. Submit Form</h3>
                <p>Fill out the request form with your business details and tier choice.</p>
              </div>
              <div className="text-center" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  background: 'var(--surface)', color: 'var(--primary)',
                  width: '64px', height: '64px', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px', boxShadow: 'var(--shadow-md)', border: '2px solid var(--primary-light)'
                }}>
                  <MessageSquare size={28} />
                </div>
                <h3>2. We Chat</h3>
                <p>We&apos;ll talk about your specific needs, colors, and products to get it just right.</p>
              </div>
              <div className="text-center" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  background: 'var(--surface)', color: 'var(--primary)',
                  width: '64px', height: '64px', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px', boxShadow: 'var(--shadow-md)', border: '2px solid var(--primary-light)'
                }}>
                  <Video size={28} />
                </div>
                <h3>3. Video Demo</h3>
                <p>I build a non-publishable version and send you a video walk-through.</p>
              </div>
              <div className="text-center" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  background: 'var(--surface)', color: 'var(--primary)',
                  width: '64px', height: '64px', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px', boxShadow: 'var(--shadow-md)', border: '2px solid var(--primary-light)'
                }}>
                  <LinkIcon size={28} />
                </div>
                <h3>4. Payment & Launch</h3>
                <p>You pay via Venmo or cash, and your site gets its live shareable link!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient text-center" style={{ padding: '100px 24px' }}>
        <div className="container">
          <h2 style={{ fontSize: '3rem', marginBottom: '24px' }}>Let&apos;s Build Your Dream Site</h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '48px', color: 'var(--text-main)', opacity: 0.8 }}>Start your request today and look like a pro next week.</p>
          <Link href="/request" className="btn btn-primary btn-large" style={{ padding: '20px 48px', fontSize: '1.25rem' }}>
            Get Your Site Now <Rocket size={24} style={{ marginLeft: '12px' }} />
          </Link>
        </div>
      </section>
    </main>
  );
}
