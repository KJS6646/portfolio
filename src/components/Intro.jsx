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
            <path d="M0,55 C90,55 90,30 180,30 C270,30 270,55 360,55 C450,55 450,80 540,80 C630,80 630,55 720,55 C810,55 810,30 900,30 C990,30 990,55 1080,55 C1170,55 1170,80 1260,80 C1350,80 1350,55 1440,55 C1530,55 1530,30 1620,30 C1710,30 1710,55 1800,55 C1890,55 1890,80 1980,80 C2070,80 2070,55 2160,55 C2250,55 2250,30 2340,30 C2430,30 2430,55 2520,55 C2610,55 2610,80 2700,80 C2790,80 2790,55 2880,55 L2880,100 L0,100 Z" />
          </svg>
        </div>
        <div className="wave-layer wave-layer--2">
          <svg viewBox="0 0 2880 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,60 C90,60 90,80 180,80 C270,80 270,60 360,60 C450,60 450,40 540,40 C630,40 630,60 720,60 C810,60 810,80 900,80 C990,80 990,60 1080,60 C1170,60 1170,40 1260,40 C1350,40 1350,60 1440,60 C1530,60 1530,80 1620,80 C1710,80 1710,60 1800,60 C1890,60 1890,40 1980,40 C2070,40 2070,60 2160,60 C2250,60 2250,80 2340,80 C2430,80 2430,60 2520,60 C2610,60 2610,40 2700,40 C2790,40 2790,60 2880,60 L2880,100 L0,100 Z" />
          </svg>
        </div>
        <div className="wave-layer wave-layer--3">
          <svg viewBox="0 0 2880 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,70 C90,70 90,55 180,55 C270,55 270,70 360,70 C450,70 450,85 540,85 C630,85 630,70 720,70 C810,70 810,55 900,55 C990,55 990,70 1080,70 C1170,70 1170,85 1260,85 C1350,85 1350,70 1440,70 C1530,70 1530,55 1620,55 C1710,55 1710,70 1800,70 C1890,70 1890,85 1980,85 C2070,85 2070,70 2160,70 C2250,70 2250,55 2340,55 C2430,55 2430,70 2520,70 C2610,70 2610,85 2700,85 C2790,85 2790,70 2880,70 L2880,100 L0,100 Z" />
          </svg>
        </div>
      </div>
    </section>
  )
}
