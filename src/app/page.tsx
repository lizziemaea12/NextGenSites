import Link from 'next/link';
import { Rocket, Paintbrush, Store, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient text-center" style={{ padding: '80px 24px', overflow: 'hidden' }}>
        <div className="container animate-fade-in" style={{ maxWidth: '800px' }}>
          <h1 className="text-gradient" style={{ fontSize: '3.5rem', marginBottom: '24px' }}>
            Websites for Kid-Owned Businesses
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#475569', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
            Get a professional website to show off your products, build trust,
            and sell more even after the fair ends. As a kid business owner, I know what works.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link href="/request" className="btn btn-primary btn-large">
              Get Your FREE Site <Rocket size={20} />
            </Link>
            <Link href="/portfolio" className="btn btn-secondary btn-large">
              View My Work
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: '80px 24px', backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem' }}>How It Works</h2>
            <p>Three simple steps to launch your digital storefront.</p>
          </div>
          <div className="grid-cols-3">
            <div className="card text-center">
              <div style={{
                background: 'var(--primary-light)', color: 'var(--primary)',
                width: '64px', height: '64px', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 20px'
              }}>
                <Paintbrush size={32} />
              </div>
              <h3>1. Submit Info</h3>
              <p>Tell me about your business, products, and color preferences using a simple form.</p>
            </div>
            <div className="card text-center">
              <div style={{
                background: 'rgba(244, 63, 94, 0.1)', color: 'var(--secondary)',
                width: '64px', height: '64px', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 20px'
              }}>
                <Rocket size={32} />
              </div>
              <h3>2. I Build Your Site</h3>
              <p>I design and code a clean, mobile-friendly website tailored to your brand.</p>
            </div>
            <div className="card text-center">
              <div style={{
                background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e',
                width: '64px', height: '64px', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 20px'
              }}>
                <Store size={32} />
              </div>
              <h3>3. You Start Selling</h3>
              <p>Share your new link with customers to boost your sales and credibility!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tiers Section */}
      <section style={{ padding: '80px 24px', backgroundColor: 'var(--background)' }}>
        <div className="container text-center">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Pricing & Tiers</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 60px' }}>
            Pick the plan that fits where your business is at right now.
          </p>
          <div className="grid-cols-3">
            <div className="card" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Free Foundation</h3>
              <p style={{ fontWeight: 700, fontSize: '2rem', color: 'var(--text-main)', marginBottom: '8px' }}>$0</p>
              <p style={{ fontSize: '0.875rem', marginBottom: '24px', fontWeight: 600 }}>Built in 5-7 days</p>
              <ul style={{ listStyle: 'none', marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={20} color="var(--primary)" /> 1-page site</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={20} color="var(--primary)" /> Custom colors</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={20} color="var(--primary)" /> Product list</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={20} color="var(--primary)" /> Contact info</li>
              </ul>
              <Link href="/request?tier=free" className="btn btn-secondary" style={{ width: '100%' }}>Choose Free</Link>
            </div>
            <div className="card" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', border: '2px solid var(--primary)', position: 'relative' }}>
              <span style={{
                position: 'absolute', top: '-16px', right: '24px',
                background: 'var(--primary)', color: 'white',
                padding: '4px 16px', borderRadius: '99px', fontSize: '0.875rem', fontWeight: 600
              }}>Most Popular</span>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Starter Shop</h3>
              <p style={{ fontWeight: 700, fontSize: '2rem', color: 'var(--text-main)', marginBottom: '8px' }}>$20</p>
              <p style={{ fontSize: '0.875rem', marginBottom: '24px', fontWeight: 600 }}>Built in 1 week</p>
              <ul style={{ listStyle: 'none', marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={20} color="var(--primary)" /> Multi-page site</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={20} color="var(--primary)" /> Better design</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={20} color="var(--primary)" /> Order form</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={20} color="var(--primary)" /> Admin dashboard</li>
              </ul>
              <Link href="/request?tier=starter" className="btn btn-primary" style={{ width: '100%' }}>Choose Starter</Link>
            </div>
            <div className="card" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Pro Store</h3>
              <p style={{ fontWeight: 700, fontSize: '2rem', color: 'var(--text-main)', marginBottom: '8px' }}>$50</p>
              <p style={{ fontSize: '0.875rem', marginBottom: '24px', fontWeight: 600 }}>Built in 1-2 weeks</p>
              <ul style={{ listStyle: 'none', marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={20} color="var(--primary)" /> Everything in Starter</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={20} color="var(--primary)" /> Inventory tracker</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={20} color="var(--primary)" /> AI marketing help</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={20} color="var(--primary)" /> Manager dashboard</li>
              </ul>
              <Link href="/request?tier=pro" className="btn btn-secondary" style={{ width: '100%' }}>Choose Pro</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient text-center" style={{ padding: '80px 24px' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Ready to look professional?</h2>
          <Link href="/request" className="btn btn-primary btn-large">
            Start Your Request <Rocket size={20} style={{ marginLeft: '8px' }} />
          </Link>
        </div>
      </section>
    </>
  );
}
