import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { TrendingUp, Menu, X, BarChart2 } from 'lucide-react'
import '../styles/navbar.css'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Market', path: '/market' },
  { label: 'News', path: '/news' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'History', path: '/history' },
  { label: 'About', path: '/about' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link to="/" className="nav-logo">
          <BarChart2 size={22} className="logo-icon" />
          <span>Bull<span className="bear">Bear</span> Hub</span>
        </Link>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={location.pathname === link.path ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/dashboard" className="nav-cta" onClick={() => setOpen(false)}>
              Launch App
            </Link>
          </li>
        </ul>

        <button className="hamburger" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </nav>
  )
}