import { useState } from 'react'
import { Plus, Trash2, TrendingUp, TrendingDown } from 'lucide-react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { initialPortfolio } from '../data/portfolioData'
import '../styles/portfolio.css'

const COLORS = ['#4f8ef7', '#00d084', '#9b6dff', '#f5a623', '#ff4d6d']

export default function Portfolio() {
  const [portfolio, setPortfolio] = useState(initialPortfolio)
  const [form, setForm] = useState({ symbol: '', name: '', qty: '', buyPrice: '', currentPrice: '', sector: '' })
  const [showForm, setShowForm] = useState(false)

  const totalInvested = portfolio.reduce((a, s) => a + s.qty * s.buyPrice, 0)
  const totalCurrent = portfolio.reduce((a, s) => a + s.qty * s.currentPrice, 0)
  const totalPnL = totalCurrent - totalInvested
  const pnlPct = ((totalPnL / totalInvested) * 100).toFixed(2)

  const pieData = portfolio.map(s => ({
    name: s.symbol,
    value: parseFloat(((s.qty * s.currentPrice / totalCurrent) * 100).toFixed(1))
  }))

  const handleAdd = () => {
    if (!form.symbol || !form.qty || !form.buyPrice || !form.currentPrice) return
    setPortfolio([...portfolio, { ...form, id: Date.now(), qty: +form.qty, buyPrice: +form.buyPrice, currentPrice: +form.currentPrice }])
    setForm({ symbol: '', name: '', qty: '', buyPrice: '', currentPrice: '', sector: '' })
    setShowForm(false)
  }

  const handleDelete = id => setPortfolio(portfolio.filter(s => s.id !== id))

  return (
    <div className="page-wrapper">
      <div className="container">
        <div className="page-header">
          <div>
            <h1 className="section-title">My Portfolio</h1>
            <p className="section-sub">Track your investments and monitor profit & loss in real time.</p>
          </div>
          <button className="btn-primary" onClick={() => setShowForm(!showForm)} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Plus size={16} /> Add Stock
          </button>
        </div>

        {/* Summary */}
        <div className="portfolio-summary">
          {[
            { label: 'Invested', value: `₹${totalInvested.toLocaleString()}`, color: 'var(--blue)' },
            { label: 'Current Value', value: `₹${totalCurrent.toLocaleString()}`, color: 'var(--purple)' },
            { label: 'Total P&L', value: `${totalPnL >= 0 ? '+' : ''}₹${totalPnL.toLocaleString()}`, color: totalPnL >= 0 ? 'var(--green)' : 'var(--red)' },
            { label: 'Return %', value: `${pnlPct >= 0 ? '+' : ''}${pnlPct}%`, color: pnlPct >= 0 ? 'var(--green)' : 'var(--red)' },
          ].map(item => (
            <div key={item.label} className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '6px' }}>{item.label}</p>
              <p style={{ fontSize: '22px', fontWeight: 800, color: item.color }}>{item.value}</p>
            </div>
          ))}
        </div>

        {/* Add Form */}
        {showForm && (
          <div className="glass-card add-form">
            <p style={{ fontWeight: 700, marginBottom: '16px' }}>Add New Stock</p>
            <div className="form-grid">
              {[
                ['Symbol', 'symbol', 'e.g. RELIANCE'],
                ['Company Name', 'name', 'e.g. Reliance Industries'],
                ['Qty', 'qty', 'No. of shares'],
                ['Buy Price (₹)', 'buyPrice', 'e.g. 2840'],
                ['Current Price (₹)', 'currentPrice', 'e.g. 2912'],
                ['Sector', 'sector', 'e.g. Energy'],
              ].map(([label, key, ph]) => (
                <div key={key}>
                  <label style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>{label}</label>
                  <input
                    className="stock-input"
                    placeholder={ph}
                    value={form[key]}
                    onChange={e => setForm({ ...form, [key]: e.target.value })}
                  />
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
              <button className="btn-primary" onClick={handleAdd}>Add Stock</button>
              <button className="btn-outline" onClick={() => setShowForm(false)}>Cancel</button>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="portfolio-main">
          {/* Table */}
          <div className="glass-card table-card">
            <p style={{ fontWeight: 700, marginBottom: '16px' }}>Holdings</p>
            <div style={{ overflowX: 'auto' }}>
              <table className="portfolio-table">
                <thead>
                  <tr>
                    {['Symbol', 'Company', 'Qty', 'Buy Price', 'LTP', 'Invested', 'Current', 'P&L', 'Return', ''].map(h => (
                      <th key={h}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {portfolio.map(s => {
                    const invested = s.qty * s.buyPrice
                    const current = s.qty * s.currentPrice
                    const pnl = current - invested
                    const ret = ((pnl / invested) * 100).toFixed(2)
                    const bull = pnl >= 0
                    return (
                      <tr key={s.id} className="table-row">
                        <td><span className="sym-badge">{s.symbol}</span></td>
                        <td style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>{s.name}</td>
                        <td>{s.qty}</td>
                        <td>₹{s.buyPrice.toLocaleString()}</td>
                        <td style={{ fontWeight: 700 }}>₹{s.currentPrice.toLocaleString()}</td>
                        <td>₹{invested.toLocaleString()}</td>
                        <td>₹{current.toLocaleString()}</td>
                        <td style={{ color: bull ? 'var(--green)' : 'var(--red)', fontWeight: 700 }}>
                          {bull ? '+' : ''}₹{pnl.toLocaleString()}
                        </td>
                        <td>
                          <span style={{ color: bull ? 'var(--green)' : 'var(--red)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '3px' }}>
                            {bull ? <TrendingUp size={13} /> : <TrendingDown size={13} />}
                            {ret}%
                          </span>
                        </td>
                        <td>
                          <button onClick={() => handleDelete(s.id)} style={{ background: 'var(--red-dim)', border: 'none', color: 'var(--red)', padding: '6px 8px', borderRadius: '6px', cursor: 'pointer' }}>
                            <Trash2 size={13} />
                          </button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pie */}
          <div className="glass-card" style={{ padding: '24px' }}>
            <p style={{ fontWeight: 700, marginBottom: '16px' }}>Allocation</p>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" innerRadius={65} outerRadius={100} paddingAngle={3} dataKey="value">
                  {pieData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Tooltip formatter={v => [`${v}%`, '']} contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', fontSize: '12px' }} />
                <Legend iconType="circle" iconSize={10} wrapperStyle={{ fontSize: '12px', color: 'var(--text-secondary)' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}