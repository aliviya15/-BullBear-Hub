import { TrendingUp, TrendingDown, DollarSign, PieChart, Eye, Activity } from 'lucide-react'
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend, CartesianGrid
} from 'recharts'
import { topGainers, topLosers, chartData, watchlist } from '../data/marketData'
import { historyData } from '../data/portfolioData'
import '../styles/dashboard.css'

const summaryCards = [
  { label: 'Total Investment', value: '₹2,40,000', sub: '+₹24,000 this month', icon: DollarSign, color: 'var(--blue)', bg: 'var(--blue-dim)' },
  { label: 'Current Value', value: '₹2,64,000', sub: '₹24,000 profit', icon: TrendingUp, color: 'var(--green)', bg: 'var(--green-dim)' },
  { label: 'Total P&L', value: '+₹24,000', sub: '+10.0% overall return', icon: Activity, color: 'var(--purple)', bg: 'rgba(155,109,255,0.12)' },
  { label: 'Portfolio Health', value: '4 / 5', sub: '4 stocks in profit', icon: PieChart, color: 'var(--gold)', bg: 'rgba(245,166,35,0.12)' },
]

export default function Dashboard() {
  return (
    <div className="page-wrapper">
      <div className="container">
        <div className="page-header">
          <div>
            <h1 className="section-title">Dashboard</h1>
            <p className="section-sub">Welcome back! Here's your portfolio overview for today.</p>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span className="badge-bull">🐂 Market Bullish</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}>May 12, 2025 · 3:30 PM IST</span>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="summary-grid">
          {summaryCards.map(card => (
            <div key={card.label} className="glass-card summary-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '6px' }}>{card.label}</p>
                  <p style={{ fontSize: '24px', fontWeight: 800, marginBottom: '4px' }}>{card.value}</p>
                  <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{card.sub}</p>
                </div>
                <div style={{ background: card.bg, padding: '12px', borderRadius: '12px' }}>
                  <card.icon size={22} color={card.color} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="charts-row">
          <div className="glass-card chart-panel">
            <p style={{ fontWeight: 700, marginBottom: '18px' }}>Portfolio Growth (₹)</p>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={historyData}>
                <defs>
                  <linearGradient id="portGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f8ef7" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#4f8ef7" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                <XAxis dataKey="date" tick={{ fill: 'var(--text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: 'var(--text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={v => `₹${(v/1000).toFixed(0)}k`} />
                <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', color: 'var(--text-primary)', fontSize: '12px' }} formatter={v => [`₹${v.toLocaleString()}`, '']} />
                <Area type="monotone" dataKey="value" stroke="#4f8ef7" strokeWidth={2.5} fill="url(#portGrad)" name="Value" />
                <Area type="monotone" dataKey="investment" stroke="#9b6dff" strokeWidth={1.5} fill="none" strokeDasharray="4 4" name="Invested" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="glass-card chart-panel">
            <p style={{ fontWeight: 700, marginBottom: '18px' }}>Monthly Profit (₹)</p>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={historyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                <XAxis dataKey="date" tick={{ fill: 'var(--text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: 'var(--text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', color: 'var(--text-primary)', fontSize: '12px' }} />
                <Bar dataKey="profit" fill="#00d084" name="Profit" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="bottom-row">
          {/* Watchlist */}
          <div className="glass-card panel">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <p style={{ fontWeight: 700 }}>Watchlist</p>
              <Eye size={16} color="var(--text-muted)" />
            </div>
            {watchlist.map(s => (
              <div key={s.symbol} className="watchlist-row">
                <div className="stock-symbol-box">{s.symbol.slice(0, 2)}</div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 600, fontSize: '14px' }}>{s.symbol}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '12px' }}>{s.price}</p>
                </div>
                <span style={{ color: s.bull ? 'var(--green)' : 'var(--red)', fontWeight: 700, fontSize: '13px' }}>{s.change}</span>
              </div>
            ))}
          </div>

          {/* Top Gainers */}
          <div className="glass-card panel">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <p style={{ fontWeight: 700 }}>Top Gainers</p>
              <TrendingUp size={16} color="var(--green)" />
            </div>
            {topGainers.map(s => (
              <div key={s.symbol} className="watchlist-row">
                <div className="stock-symbol-box" style={{ background: 'var(--green-dim)' }}>{s.symbol.slice(0, 2)}</div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 600, fontSize: '13px' }}>{s.symbol}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '12px' }}>{s.price}</p>
                </div>
                <span className="badge-bull">{s.change}</span>
              </div>
            ))}
          </div>

          {/* Top Losers */}
          <div className="glass-card panel">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <p style={{ fontWeight: 700 }}>Top Losers</p>
              <TrendingDown size={16} color="var(--red)" />
            </div>
            {topLosers.map(s => (
              <div key={s.symbol} className="watchlist-row">
                <div className="stock-symbol-box" style={{ background: 'var(--red-dim)' }}>{s.symbol.slice(0, 2)}</div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 600, fontSize: '13px' }}>{s.symbol}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '12px' }}>{s.price}</p>
                </div>
                <span className="badge-bear">{s.change}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}