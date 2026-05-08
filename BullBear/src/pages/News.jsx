import { Clock, ArrowRight } from 'lucide-react'
import { newsArticles } from '../data/newsData'
import '../styles/news.css'

export default function News() {
  return (
    <div className="page-wrapper">
      <div className="container">
        <div className="page-header">
          <div>
            <h1 className="section-title">Financial News</h1>
            <p className="section-sub">Stay ahead with curated market news and financial updates.</p>
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {['All', 'Market', 'Economy', 'Tech', 'Global', 'IPO'].map(cat => (
              <button key={cat} style={{
                background: cat === 'All' ? 'var(--gradient-accent)' : 'var(--bg-card)',
                color: cat === 'All' ? '#fff' : 'var(--text-secondary)',
                border: '1px solid var(--border)',
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '13px',
                cursor: 'pointer',
                fontWeight: 500,
                transition: 'var(--transition)'
              }}>{cat}</button>
            ))}
          </div>
        </div>

        <div className="news-grid">
          {newsArticles.map(article => (
            <div key={article.id} className="glass-card news-card">
              <div className="news-color-bar" style={{ background: article.color }} />
              <div className="news-card-body">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span className="news-category" style={{ color: article.color }}>{article.category}</span>
                  <span style={{
                    background: article.tag === 'Bullish' ? 'var(--green-dim)' :
                                article.tag === 'Bearish' ? 'var(--red-dim)' : 'var(--blue-dim)',
                    color: article.tag === 'Bullish' ? 'var(--green)' :
                           article.tag === 'Bearish' ? 'var(--red)' : 'var(--blue)',
                    padding: '2px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 700
                  }}>{article.tag}</span>
                </div>
                <h3 className="news-headline">{article.headline}</h3>
                <p className="news-summary">{article.summary}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--text-muted)', fontSize: '12px' }}>
                    <Clock size={12} />
                    <span>{article.time}</span>
                  </div>
                  <button style={{
                    background: 'none', border: 'none', color: article.color,
                    display: 'flex', alignItems: 'center', gap: '4px',
                    fontSize: '13px', fontWeight: 600, cursor: 'pointer'
                  }}>Read More <ArrowRight size={13} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}