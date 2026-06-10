import { motion } from 'framer-motion'

const CONTACTS = [
  { label: 'NAME', value: '김준석' },
  { label: 'Email', value: 'clotheswing@naver.com', href: 'mailto:clotheswing@naver.com' },
  { label: 'Phone', value: '010-8458-6646' },
  { label: 'Address', value: '부산광역시 사상구 괘법동' },
  { label: 'GitHub', value: 'github.com/KJS6646', href: 'https://github.com/KJS6646', external: true },
]

export default function Contact() {
  return (
    <section className="section">
      <motion.h2
        className="section__title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        연락처
      </motion.h2>

      <motion.table
        className="contact__table"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <tbody>
          {CONTACTS.map(({ label, value, href, external }) => (
            <tr key={label}>
              <th>{label}</th>
              <td>
                {href ? (
                  <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
                    {value}
                  </a>
                ) : value}
              </td>
            </tr>
          ))}
        </tbody>
      </motion.table>
    </section>
  )
}
