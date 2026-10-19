import { motion } from 'framer-motion'
import { useTyping } from '../hooks/useTyping'
import ParticlesBg from './ParticlesBg'

export default function Intro() {
  const displayed = useTyping('김준석의 포트폴리오', { speed: 85, delay: 900 })

  return (
    <section className="intro" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}image/intro2.png)` }}>
      <div className="intro__overlay" />
      <ParticlesBg />

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

    </section>
  )
}
