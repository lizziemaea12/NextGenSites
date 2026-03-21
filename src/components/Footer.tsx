export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--text-main)',
      color: 'white',
      padding: '48px 0',
      marginTop: 'auto'
    }}>
      <div className="container grid-cols-2" style={{ alignItems: 'center' }}>
        <div>
          <h2 style={{ color: 'white', marginBottom: '8px' }}>NextGen Sites 🚀</h2>
          <p style={{ color: '#94A3B8', marginBottom: 0 }}>Built by a kid, for kid businesses.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
          <h4 style={{ color: 'white', marginBottom: '4px' }}>Let&apos;s Chat</h4>
          <a href="mailto:lizziemaea12@gmail.com" style={{ color: '#94A3B8' }}>lizziemaea12@gmail.com</a>
          <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>Working site with shareable link will be in your email within 3-5 days! Contact me if you have any questions.</p>
        </div>
      </div>
    </footer>
  );
}
