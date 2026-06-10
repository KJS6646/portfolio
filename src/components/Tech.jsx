import { motion } from 'framer-motion'

const CATEGORIES = [
  {
    title: 'Language',
    skills: [
      { name: 'Delphi', img: 'delphi.png' },
      { name: 'JavaScript', img: 'javascript.png' },
      { name: 'Java', img: 'java.png' },
      { name: 'HTML', img: 'html.png' },
      { name: 'CSS', img: 'css.png' },
    ],
  },
  {
    title: 'Framework / Platform',
    skills: [
      { name: 'React', img: 'react.png' },
      { name: 'Vue', img: 'vuejs.png' },
      { name: 'Spring Boot', img: 'springboot.png' },
      { name: 'Nexacro', color: '#e85d04' },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'Oracle', img: 'oracle.png' },
      { name: 'PostgreSQL', img: 'postgresql.png' },
    ],
  },
  {
    title: 'CI/CD',
    skills: [
      { name: 'Jenkins', img: 'jenkins.png' },
      { name: 'Docker', img: 'docker.png' },
    ],
  },
  {
    title: 'Tool',
    skills: [
      { name: 'Toad', img: 'toad.png' },
      { name: 'DBeaver', img: 'Dbeaver.png' },
      { name: 'Tortoise SVN', img: 'svn.png' },
      { name: 'Git', img: 'git.png' },
    ],
  },
]

function TechBadge({ skill }) {
  return (
    <motion.div
      className="tech-badge"
      whileHover={{ scale: 1.06, y: -2 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {skill.img ? (
        <img src={`/image/${skill.img}`} alt={skill.name} className="tech-badge__img" />
      ) : (
        <span className="tech-badge__dot" style={{ background: skill.color }} />
      )}
      <span className="tech-badge__name">{skill.name}</span>
    </motion.div>
  )
}

export default function Tech() {
  return (
    <section className="section">
      <motion.h2
        className="section__title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        기술
      </motion.h2>

      <div className="tech__stack">
        {CATEGORIES.map((cat, ci) => (
          <motion.div
            key={cat.title}
            className="tech__row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ delay: ci * 0.1, duration: 0.5 }}
          >
            <span className="tech__row-label">{cat.title}</span>
            <div className="tech__badges">
              {cat.skills.map((skill, si) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: ci * 0.1 + si * 0.06, duration: 0.35 }}
                >
                  <TechBadge skill={skill} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
