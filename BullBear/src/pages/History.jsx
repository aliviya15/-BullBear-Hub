import { TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import { historyData, transactions } from '../data/portfolioData'
import '../styles/history.css'

export default function History() {
  return (
    <div className="page-wrapper">
      <div className="container">
        <div className="page-header">
          <div>
            <h1 className="section-title">History & Activity</h1>
            <p className="section-sub">Your complete transaction history and performance timeline.</p>
          </div>
        </div>

        {/* Growth Chart */}
        <div className="glass-card" style={{ padding: '28px', marginBottom: '24px' }}>
          <p style={{ fontWeight: 700, fontSize: '16px', marginBottom: '4px' }}>Portfolio Performance Timeline</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '22px' }}>Investment vs Current Value over time</p>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={historyData}>
              <defs>
                <linearGradient id="valGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00d084" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#00d084" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="invGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4f8ef7" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#4f8ef7" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
              <XAxis dataKey="date" tick={{ fill: 'var(--text-muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: 'var(--text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={v => `₹${(v/1000).toFixed(0)}k`} />
              <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', color: 'var(--text-primary)', fontSize: '12px' }} formatter={v => [`₹${v.toLocaleString()}`, '']} />
              <Area type="monotone" dataKey="value" stroke="#00d084" strokeWidth={2.5} fill="url(#valGrad)" name="Portfolio Value" />
              <Area type="monotone" dataKey="investment" stroke="#4f8ef7" strokeWidth={2} fill="url(#invGrad)" name="Invested" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Monthly Profit Cards */}
        <p style={{ fontWeight: 700, fontSize: '16px', marginBottom: '14px' }}>Monthly Profit Summary</p>
        <div className="monthly-grid">
          {historyData.map(d => (
            <div key={d.date} className="glass-card monthly-card">
              <p style={{ color: 'var(--text-muted)', fontSize: '12px', marginBottom: '6px' }}>{d.date}</p>
              <p style={{ fontSize: '20px', fontWeight: 800, color: 'var(--green)', marginBottom: '4px' }}>+₹{d.profit.toLocaleString()}</p>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>+{((d.profit / d.investment) * 100).toFixed(1)}% return</p>
              <div style={{ marginTop: '10px', height: '4px', background: 'var(--bg-secondary)', borderRadius: '2px' }}>
                <div style={{ width: `${Math.min((d.profit / 30000) * 100, 100)}%`, height: '100%', background: 'var(--green)', borderRadius: '2px' }} />
              </div>
            </div>
          ))}
        </div>

        {/* Transaction Table */}
        <p style={{ fontWeight: 700, fontSize: '16px', margin: '28px 0 14px' }}>Transaction Log</p>
        <div className="glass-card" style={{ padding: '24px', marginBottom: '40px' }}>
          <div style={{ overflowX: 'auto' }}>
            <table className="portfolio-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr>
                  {['Date', 'Type', 'Symbol', 'Qty', 'Price', 'Total', 'Status'].map(h => (
                    <th key={h} style={{ textAlign: 'left', padding: '10px 14px', color: 'var(--text-muted)', fontWeight: 600, fontSize: '12px', borderBottom: '1px solid var(--border)', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                    <td style={{ padding: '12px 14px', color: 'var(--text-muted)', fontSize: '12px' }}>{tx.date}</td>
                    <td style={{ padding: '12px 14px' }}>
                      <span style={{
                        background: tx.type === 'BUY' ? 'var(--green-dim)' : 'var(--red-dim)',
                        color: tx.type === 'BUY' ? 'var(--green)' : 'var(--red)',
                        padding: '3px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 800,
                        display: 'flex', alignItems: 'center', gap: '3px', width: 'fit-content'
                      }}>
                        {tx.type === 'BUY' ? <ArrowDownRight size={11} /> : <ArrowUpRight size={11} />}
                        {tx.type}
                      </span>
                    </td>
                    <td style={{ padding: '12px 14px', fontWeight: 700 }}>{tx.symbol}</td>
                    <td style={{ padding: '12px 14px' }}>{tx.qty}</td>
                    <td style={{ padding: '12px 14px' }}>{tx.price}</td>
                    <td style={{ padding: '12px 14px', fontWeight: 700 }}>{tx.total}</td>
                    <td style={{ padding: '12px 14px' }}>
                      <span style={{ background: 'rgba(0,208,132,0.1)', color: 'var(--green)', padding: '2px 8px', borderRadius: '20px', fontSize: '11px', fontWeight: 600 }}>{tx.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}