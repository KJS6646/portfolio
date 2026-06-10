import { useState, useEffect } from 'react'
import Header from './components/Header'
import Intro from './components/Intro'
import Info from './components/Info'
import History from './components/History'
import Tech from './components/Tech'
import Contact from './components/Contact'

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'))

  return (
    <>
      <Intro />
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <div id="info" className="bg-alt">
          <Info />
        </div>
        <div id="history" className="bg-main">
          <History />
        </div>
        <div id="tech" className="bg-alt">
          <Tech />
        </div>
      </main>
      <div id="contact" className="bg-main">
        <Contact />
      </div>
    </>
  )
}
