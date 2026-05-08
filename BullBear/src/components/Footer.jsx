import { BarChart2, Twitter, Linkedin, Github } from 'lucide-react'
import '../styles/global.css'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border)',
      padding: '48px 0 24px',
      marginTop: '60px'
    }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '36px', marginBottom: '36px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <BarChart2 size={20} color="var(--blue)" />
              <span style={{ fontWeight: 800, fontSize: '18px' }}>Bull<span style={{ color: 'var(--red)' }}>Bear</span> Hub</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: '1.7' }}>
              Your intelligent stock market companion. Analyze, track, and grow your investments with confidence.
            </p>
            <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" style={{
                  background: 'var(--bg-card)', border: '1px solid var(--border)',
                  padding: '8px', borderRadius: '8px', color: 'var(--text-secondary)',
                  display: 'flex', transition: 'var(--transition)'
                }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--blue)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <p style={{ fontWeight: 700, marginBottom: '14px', fontSize: '14px' }}>Platform</p>
            {['Dashboard', 'Market Overview', 'Portfolio', 'News', 'History'].map(item => (
              <p key={item} style={{ color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '8px', cursor: 'pointer' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--blue)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
              >{item}</p>
            ))}
          </div>
          <div>
            <p style={{ fontWeight: 700, marginBottom: '14px', fontSize: '14px' }}>Markets</p>
            {['Nifty 50', 'Sensex', 'NASDAQ', 'Dow Jones', 'S&P 500'].map(item => (
              <p key={item} style={{ color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '8px' }}>{item}</p>
            ))}
          </div>
          <div>
            <p style={{ fontWeight: 700, marginBottom: '14px', fontSize: '14px' }}>Disclaimer</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '12px', lineHeight: '1.7' }}>
              This platform is for educational and informational purposes only. Not financial advice. Always consult a SEBI-registered advisor before investing.
            </p>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>© 2025 BullBear Hub. All rights reserved.</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>Built with React & Recharts 🚀</p>
        </div>
      </div>
    </footer>
  )
}
