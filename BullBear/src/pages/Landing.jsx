import { Link } from 'react-router-dom'
import { TrendingUp, TrendingDown, BarChart2, Shield, Zap, Globe, Star } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import '../styles/landing.css'

const heroChartData = [
  { t: 'Mon', v: 21200 }, { t: 'Tue', v: 21800 }, { t: 'Wed', v: 21500 },
  { t: 'Thu', v: 22100 }, { t: 'Fri', v: 22417 },
]

const features = [
  { icon: BarChart2, title: 'Real-Time Charts', desc: 'Interactive charts powered by Recharts with live market simulation and trend analysis.' },
  { icon: Shield, title: 'Portfolio Tracker', desc: 'Track every rupee invested. Monitor your profit, loss, and portfolio allocation effortlessly.' },
  { icon: Globe, title: 'Global Markets', desc: 'Stay connected with Nifty, Sensex, NASDAQ, Dow Jones and S&P 500 all in one place.' },
  { icon: Zap, title: 'Smart Watchlist', desc: 'Create a personalized watchlist and get at-a-glance updates on your favorite stocks.' },
]

const stats = [
  { label: 'Stocks Tracked', value: '5,000+' },
  { label: 'Indices Covered', value: '12' },
  { label: 'Users Active', value: '18,400+' },
  { label: 'Data Points/Day', value: '2M+' },
]

const testimonials = [
  { name: 'Arjun Mehta', role: 'Retail Investor', text: 'BullBear Hub completely changed how I track my portfolio. Clean UI and accurate data. Love it!', stars: 5 },
  { name: 'Sneha Iyer', role: 'Finance Student', text: 'Perfect for learning how markets work. The charts and news in one dashboard is a game changer.', stars: 5 },
  { name: 'Rahul Sharma', role: 'Day Trader', text: 'The gainers/losers section and global market overview save me 30 minutes every morning.', stars: 4 },
]

export default function Landing() {
  return (
    <div className="landing">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg-grid" />
        <div className="container hero-inner">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="badge-bull"> Bullish</span>
              <span style={{ margin: '0 8px', color: 'var(--text-muted)' }}>vs</span>
              <span className="badge-bear"> Bearish</span>
              <span style={{ marginLeft: '10px', color: 'var(--text-secondary)', fontSize: '13px' }}>— Master Both Sides</span>
            </div>
            <h1 className="hero-heading">
              Your Complete<br />
              <span className="gradient-text">Stock Market</span><br />
            </h1>
            <p className="hero-sub">
              Track markets, manage your portfolio, read financial news, and analyze trends — all from one premium dashboard built for the modern investor.
            </p>
            <div className="hero-btns">
              <Link to="/dashboard"><button className="btn-primary"> Open Dashboard</button></Link>
              <Link to="/market"><button className="btn-outline">View Markets</button></Link>
            </div>
            <div className="hero-stats">
              {stats.map(s => (
                <div key={s.label} className="hero-stat">
                  <span className="hero-stat-val">{s.value}</span>
                  <span className="hero-stat-lbl">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-chart-box glass-card">
            <div className="chart-box-header">
              <div>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>NIFTY 50</p>
                <p style={{ fontSize: '22px', fontWeight: 800 }}>22,417.85</p>
              </div>
              <span className="badge-bull">+274.3 (+1.24%)</span>
            </div>
            <ResponsiveContainer width="100%" height={180}>
              <AreaChart data={heroChartData}>
                <defs>
                  <linearGradient id="heroGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00d084" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#00d084" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="t" tick={{ fill: 'var(--text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis hide domain={['auto', 'auto']} />
                <Tooltip
                  contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', color: 'var(--text-primary)', fontSize: '12px' }}
                  formatter={val => [`₹${val.toLocaleString()}`, 'Nifty']}
                />
                <Area type="monotone" dataKey="v" stroke="#00d084" strokeWidth={2.5} fill="url(#heroGrad)" />
              </AreaChart>
            </ResponsiveContainer>

            <div style={{ display: 'flex', gap: '10px', marginTop: '14px' }}>
              {[
                { sym: 'RELIANCE', chg: '+1.87%', bull: true },
                { sym: 'INFY', chg: '+2.41%', bull: true },
                { sym: 'ZOMATO', chg: '-3.42%', bull: false },
              ].map(s => (
                <div key={s.sym} style={{
                  flex: 1, background: 'var(--bg-secondary)', borderRadius: '10px',
                  padding: '10px', border: '1px solid var(--border)'
                }}>
                  <p style={{ fontSize: '11px', fontWeight: 700 }}>{s.sym}</p>
                  <p style={{ fontSize: '12px', color: s.bull ? 'var(--green)' : 'var(--red)', fontWeight: 600 }}>{s.chg}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <p className="section-title">Why BullBear Hub?</p>
          <p className="section-sub">A professional-grade platform designed for Indian and global market investors.</p>
          <div className="features-grid">
            {features.map(f => (
              <div key={f.title} className="glass-card feature-card">
                <div className="feature-icon-box">
                  <f.icon size={22} color="var(--blue)" />
                </div>
                <h3 style={{ marginBottom: '8px', fontSize: '16px' }}>{f.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <p className="section-title">What Investors Say</p>
          <p className="section-sub">Trusted by traders, students, and investors across India.</p>
          <div className="testimonials-grid">
            {testimonials.map(t => (
              <div key={t.name} className="glass-card testimonial-card">
                <div style={{ display: 'flex', marginBottom: '12px' }}>
                  {Array(t.stars).fill(0).map((_, i) => <Star key={i} size={14} fill="var(--gold)" color="var(--gold)" />)}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7', marginBottom: '16px' }}>"{t.text}"</p>
                <div>
                  <p style={{ fontWeight: 700, fontSize: '14px' }}>{t.name}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '12px' }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="glass-card cta-box">
            <h2 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '12px' }}>Ready to Trade Smarter?</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>Join thousands of investors who analyze both bullish and bearish trends with BullBear Hub.</p>
            <Link to="/dashboard"><button className="btn-primary" style={{ fontSize: '15px', padding: '14px 36px' }}>Get Started Free →</button></Link>
          </div>
        </div>
      </section>
    </div>
  )
}