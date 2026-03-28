import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header style={{ 
      position: 'sticky', top: 0, zIndex: 50, 
      backgroundColor: 'rgba(255, 255, 255, 0.9)', 
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--border)' 
    }}>
      <div className="container" style={{ 
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' 
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800, fontSize: '1.5rem', color: 'var(--primary)' }}>
          <Sparkles size={28} />
          <span>NextGen Sites</span>
        </Link>
        <nav style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <Link href="/about" style={{ fontWeight: 600 }}>Why Me?</Link>
          <Link href="/portfolio" style={{ fontWeight: 600 }}>Portfolio</Link>
          <Link href="/pricing" style={{ fontWeight: 600 }}>Pricing</Link>
          <Link href="/request" className="btn btn-primary" style={{ padding: '8px 20px' }}>Get Your Site</Link>
        </nav>
      </div>
    </header>
  );
}
