import { motion } from 'framer-motion'
import { useTyping } from '../hooks/useTyping'

export default function Intro() {
  const displayed = useTyping('김준석의 포트폴리오', { speed: 85, delay: 900 })

  return (
    <section className="intro" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}image/intro2.png)` }}>
      <div className="intro__overlay" />

      <motion.div
        className="intro__content"
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <p className="intro__label">Welcome to my</p>
        <h1 className="intro__title">DEVELOPER</h1>
        <div className="intro__subtitle">
          <span>{displayed}</span>
          <span className="intro__cursor" aria-hidden="true" />
        </div>
      </motion.div>

      <motion.div
        className="intro__scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <div className="scroll-mouse" />
        <span>scroll</span>
      </motion.div>

      <div className="intro__wave">
        <div className="wave-layer wave-layer--1">
          <svg viewBox="0 0 2880 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,50 C100,50 260,5 360,5 C460,5 620,50 720,50 C820,50 980,95 1080,95 C1180,95 1340,50 1440,50 C1540,50 1700,5 1800,5 C1900,5 2060,50 2160,50 C2260,50 2420,95 2520,95 C2620,95 2780,50 2880,50 L2880,100 L0,100 Z" />
          </svg>
        </div>
        <div className="wave-layer wave-layer--2">
          <svg viewBox="0 0 2880 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,50 C100,50 260,95 360,95 C460,95 620,50 720,50 C820,50 980,5 1080,5 C1180,5 1340,50 1440,50 C1540,50 1700,95 1800,95 C1900,95 2060,50 2160,50 C2260,50 2420,5 2520,5 C2620,5 2780,50 2880,50 L2880,100 L0,100 Z" />
          </svg>
        </div>
        <div className="wave-layer wave-layer--3">
          <svg viewBox="0 0 2880 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,50 C50,50 130,15 180,15 C230,15 310,50 360,50 C410,50 490,85 540,85 C590,85 670,50 720,50 C770,50 850,15 900,15 C950,15 1030,50 1080,50 C1130,50 1210,85 1260,85 C1310,85 1390,50 1440,50 C1490,50 1570,15 1620,15 C1670,15 1750,50 1800,50 C1850,50 1930,85 1980,85 C2030,85 2110,50 2160,50 C2210,50 2290,15 2340,15 C2390,15 2470,50 2520,50 C2570,50 2650,85 2700,85 C2750,85 2830,50 2880,50 L2880,100 L0,100 Z" />
          </svg>
        </div>
      </div>
    </section>
  )
}
