import React from 'react'
import Title from '../Title'
import styles from '../../css/biomasa-about.module.css'
import img from '../../images/jude-beck-syPEv7Xzn4w-unsplash.jpg'
import styled from 'styled-components'

const About = () => {
    return (
      <section className={styles.about}>
        <div className={styles.aboutCenter}>
          <article className={styles.aboutInfo}>
            <Title title="upravljanje" subtitle="otpadom" />
            <p>
              Upravljanje otpadom je sakupljanje, transport, obrada ili
              odlaganje, upravljanje i praćenje otpadnih materijala. Termin se
              obično odnosi na proizvode nastale ljudskom aktivnošću, a proces
              se obično preduzima da bi se smanjio njihov uticaj na zdravlje
              ljudi, životnu sredinu ili estetiku. Upravljanje otpadom je
              posebna praksa iz obnove resursa koja je usredsređena na odlaganje
              stope potrošnje prirodnog bogatstva. Svi materijali otpadaka, bilo
              da su čvrsti, tečni, gasoviti ili radioaktivni, spadaju u
              nadležnosti upravljanja otpadom.
            </p>
          </article>
        </div>
      </section>
    )
}

export default About
