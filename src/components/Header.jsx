import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { href: '#info', label: '소개' },
  { href: '#history', label: '경력' },
  { href: '#tech', label: '기술' },
  { href: '#contact', label: '연락처' },
]

export default function Header({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const ids = ['contact', 'tech', 'history', 'info']
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id)
          return
        }
      }
      setActiveSection('')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <a href="#" className="header__logo">
        <img src="/image/logo.png" alt="KJS Portfolio" />
      </a>

      <nav className={`header__nav${menuOpen ? ' header__nav--open' : ''}`}>
        {NAV_ITEMS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={`header__link${activeSection === href.slice(1) ? ' header__link--active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>

      <div className="header__controls">
        <button className="theme-btn" onClick={onToggleTheme} aria-label="테마 변경">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <button
          className={`hamburger${menuOpen ? ' hamburger--open' : ''}`}
          onClick={() => setMenuOpen(m => !m)}
          aria-label="메뉴"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
