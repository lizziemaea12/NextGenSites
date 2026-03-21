import { Lightbulb, Users, Rss } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container" style={{ padding: '80px 24px', maxWidth: '800px' }}>
      <div className="card text-center" style={{ padding: '60px 40px', marginBottom: '60px', overflow: 'hidden', position: 'relative' }}>
        {/* Background blobs */}
        <div style={{ position: 'absolute', top: '-50px', left: '-50px', width: '200px', height: '200px', background: 'var(--primary-light)', borderRadius: '50%', filter: 'blur(40px)', zIndex: 0 }}></div>
        <div style={{ position: 'absolute', bottom: '-50px', right: '-50px', width: '200px', height: '200px', background: '#FFE4E6', borderRadius: '50%', filter: 'blur(40px)', zIndex: 0 }}></div>
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '24px' }}>Why NextGen Sites?</h1>
          <p style={{ fontSize: '1.25rem', color: '#334155', fontWeight: 500, marginBottom: '16px' }}>
            Built by a kid, for kid businesses.
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '32px' }}>
            I know what it&apos;s like to run a business as a kid. Whether you sell at craft fairs, neighborhood stands, or online to your friends—having a professional website makes a huge difference. 
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '0' }}>
            My goal is to help you <strong>sell more products</strong> and <strong>look professional</strong> without making things complicated. No corporate jargon. Just cool, fast websites that work.
          </p>
        </div>
      </div>

      <div className="grid-cols-3" style={{ marginBottom: '60px' }}>
        <div className="text-center">
          <div style={{ background: 'var(--primary-light)', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: 'var(--primary)' }}><Users size={32} /></div>
          <h3>I Get It</h3>
          <p>I understand the hustle of craft fairs and small product businesses.</p>
        </div>
        <div className="text-center">
          <div style={{ background: 'var(--primary-light)', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: 'var(--primary)' }}><Lightbulb size={32} /></div>
          <h3>Sales Focused</h3>
          <p>Everything is designed to help you sell more effectively.</p>
        </div>
        <div className="text-center">
          <div style={{ background: 'var(--primary-light)', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: 'var(--primary)' }}><Rss size={32} /></div>
          <h3>Simple & Fast</h3>
          <p>You focus on making your products. I&apos;ll handle the tech.</p>
        </div>
      </div>

      <div className="text-center" style={{ padding: '40px', background: 'var(--text-main)', color: 'white', borderRadius: 'var(--radius-lg)' }}>
        <h2 style={{ color: 'white', marginBottom: '16px' }}>Let&apos;s build something awesome.</h2>
        <p style={{ color: '#cbd5e1', marginBottom: '32px' }}>Fill out the request form and I&apos;ll get back to you with the next steps!</p>
        <Link href="/request" className="btn btn-primary btn-large">
          Get Started Now
        </Link>
      </div>
    </div>
  );
}
