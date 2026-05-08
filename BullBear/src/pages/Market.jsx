import { TrendingUp, TrendingDown } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import { indices, chartData } from '../data/marketData'
import '../styles/market.css'

export default function Market() {
  return (
    <div className="page-wrapper">
      <div className="container">
        <div className="page-header">
          <div>
            <h1 className="section-title">Market Overview</h1>
            <p className="section-sub">Live snapshot of major global indices and market trends.</p>
          </div>
          <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}>Last updated: 3:30 PM IST</span>
        </div>

        {/* Index Cards */}
        <div className="indices-grid">
          {indices.map(idx => (
            <div key={idx.name} className={`glass-card index-card ${idx.bull ? 'bull-card' : 'bear-card'}`}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '12px', marginBottom: '4px' }}>{idx.region}</p>
                  <p style={{ fontWeight: 800, fontSize: '16px' }}>{idx.name}</p>
                </div>
                {idx.bull
                  ? <TrendingUp size={20} color="var(--green)" />
                  : <TrendingDown size={20} color="var(--red)" />
                }
              </div>
              <p style={{ fontSize: '26px', fontWeight: 900, margin: '14px 0 6px', letterSpacing: '-0.5px' }}>{idx.value}</p>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <span style={{ color: idx.bull ? 'var(--green)' : 'var(--red)', fontWeight: 700, fontSize: '14px' }}>{idx.change}</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}>{idx.points} pts</span>
                {idx.bull ? <span className="badge-bull">Bullish</span> : <span className="badge-bear">Bearish</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="glass-card chart-panel" style={{ padding: '28px', marginTop: '24px' }}>
          <p style={{ fontWeight: 700, fontSize: '16px', marginBottom: '6px' }}>Index Trend — YTD 2025</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '22px' }}>Nifty 50, Sensex, and NASDAQ performance comparison</p>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
              <XAxis dataKey="date" tick={{ fill: 'var(--text-muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis yAxisId="left" tick={{ fill: 'var(--text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} domain={['auto', 'auto']} />
              <YAxis yAxisId="right" orientation="right" tick={{ fill: 'var(--text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} domain={['auto', 'auto']} />
              <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', color: 'var(--text-primary)', fontSize: '12px' }} />
              <Line yAxisId="left" type="monotone" dataKey="nifty" stroke="#4f8ef7" strokeWidth={2.5} dot={false} name="Nifty 50" />
              <Line yAxisId="left" type="monotone" dataKey="sensex" stroke="#00d084" strokeWidth={2.5} dot={false} name="Sensex" />
              <Line yAxisId="right" type="monotone" dataKey="nasdaq" stroke="#9b6dff" strokeWidth={2.5} dot={false} name="NASDAQ" />
            </LineChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', gap: '20px', marginTop: '16px', flexWrap: 'wrap' }}>
            {[['Nifty 50', '#4f8ef7'], ['Sensex', '#00d084'], ['NASDAQ', '#9b6dff']].map(([label, color]) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                <div style={{ width: '20px', height: '3px', background: color, borderRadius: '2px' }} />
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Heatmap-style sector grid */}
        <div style={{ marginTop: '28px', marginBottom: '40px' }}>
          <p style={{ fontWeight: 700, fontSize: '16px', marginBottom: '16px' }}>Sector Performance</p>
          <div className="sector-grid">
            {[
              { name: 'Banking', perf: '+2.14%', bull: true },
              { name: 'IT', perf: '+1.87%', bull: true },
              { name: 'Auto', perf: '+3.24%', bull: true },
              { name: 'Pharma', perf: '-0.72%', bull: false },
              { name: 'Energy', perf: '+1.42%', bull: true },
              { name: 'FMCG', perf: '+0.58%', bull: true },
              { name: 'Realty', perf: '-1.34%', bull: false },
              { name: 'Metal', perf: '+2.91%', bull: true },
              { name: 'Media', perf: '-2.15%', bull: false },
              { name: 'Telecom', perf: '+0.34%', bull: true },
            ].map(sec => (
              <div key={sec.name} className={`sector-tile ${sec.bull ? 'sector-bull' : 'sector-bear'}`}>
                <p style={{ fontWeight: 700, fontSize: '13px' }}>{sec.name}</p>
                <p style={{ fontSize: '15px', fontWeight: 800 }}>{sec.perf}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}