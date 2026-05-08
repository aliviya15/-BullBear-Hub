import { BarChart2, TrendingUp, TrendingDown, Code2, Globe, BookOpen, Layers, Rocket } from 'lucide-react'
import '../styles/about.css'

const tech = [
  { name: 'React.js', role: 'Frontend Framework', color: '#61dafb' },
  { name: 'React Router', role: 'Client-side Routing', color: '#f44250' },
  { name: 'Recharts', role: 'Data Visualization', color: '#9b6dff' },
  { name: 'Lucide React', role: 'Icon Library', color: '#f5a623' },
  { name: 'Axios', role: 'HTTP Client', color: '#5a29e4' },
  { name: 'CSS3', role: 'Styling & Animations', color: '#00d084' },
  { name: 'Vite', role: 'Build Tool', color: '#bd34fe' },
]

const scope = [
  { icon: Globe, title: 'Live API Integration', desc: 'Connect real-time market data APIs like NSE, BSE, Yahoo Finance.' },
  { icon: BookOpen, title: 'AI Market Insights', desc: 'Integrate AI models to summarize news and suggest trades.' },
  { icon: Layers, title: 'Portfolio Simulation', desc: 'Paper trading mode for beginners to practice without real money.' },
  { icon: Rocket, title: 'Mobile App', desc: 'React Native version for iOS and Android users.' },
]

export default function About() {
  return (
    <div className="page-wrapper">
      <div className="container">
        {/* Hero */}
        <div className="about-hero glass-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
            <div style={{ background: 'var(--blue-dim)', padding: '16px', borderRadius: '16px' }}>
              <BarChart2 size={32} color="var(--blue)" />
            </div>
            <div>
              <h1 style={{ fontSize: '32px', fontWeight: 900, letterSpacing: '-0.5px' }}>
                Bull<span style={{ color: 'var(--red)' }}>Bear</span> Hub
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Stock Market Intelligence Dashboard</p>
            </div>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.8', maxWidth: '700px' }}>
            BullBear Hub is a modern, full-featured stock market dashboard built with React.js. It was designed to give investors, students, and traders a single platform to monitor Indian and global markets, manage their portfolios, read financial news, and analyze bullish and bearish market conditions — all in one premium, dark-themed UI.
          </p>
        </div>

        {/* Bull vs Bear */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', margin: '28px 0' }}>
          <div className="glass-card bull-about-card" style={{ padding: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <TrendingUp size={24} color="var(--green)" />
              <h2 style={{ color: 'var(--green)', fontSize: '20px' }}>🐂 Bull Market</h2>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '14px' }}>
              A Bull Market is when stock prices are rising or expected to rise. The term "bull" refers to an upward trend — investors are optimistic, the economy is strong, and buying activity is high. Key characteristics include rising stock prices, strong GDP, low unemployment, and high investor confidence.
            </p>
          </div>
          <div className="glass-card bear-about-card" style={{ padding: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <TrendingDown size={24} color="var(--red)" />
              <h2 style={{ color: 'var(--red)', fontSize: '20px' }}>🐻 Bear Market</h2>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '14px' }}>
              A Bear Market is a period when stock prices fall 20% or more from recent highs. It's characterized by widespread pessimism, negative investor sentiment, declining corporate profits, and often associated with economic downturns or recession fears.
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <p className="section-title" style={{ marginBottom: '8px' }}>Tech Stack</p>
        <p className="section-sub">Technologies powering BullBear Hub.</p>
        <div className="tech-grid">
          {tech.map(t => (
            <div key={t.name} className="glass-card tech-card">
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: t.color, marginBottom: '10px' }} />
              <p style={{ fontWeight: 800, fontSize: '15px', marginBottom: '4px' }}>{t.name}</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '12px' }}>{t.role}</p>
            </div>
          ))}
        </div>

        {/* Future Scope */}
        <p className="section-title" style={{ margin: '40px 0 8px' }}>Future Scope</p>
        <p className="section-sub">What's coming next for BullBear Hub.</p>
        <div className="scope-grid" style={{ marginBottom: '40px' }}>
          {scope.map(s => (
            <div key={s.title} className="glass-card" style={{ padding: '24px', display: 'flex', gap: '16px' }}>
              <div style={{ background: 'var(--blue-dim)', padding: '12px', borderRadius: '12px', height: 'fit-content' }}>
                <s.icon size={20} color="var(--blue)" />
              </div>
              <div>
                <p style={{ fontWeight: 700, marginBottom: '6px' }}>{s.title}</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: '1.6' }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}