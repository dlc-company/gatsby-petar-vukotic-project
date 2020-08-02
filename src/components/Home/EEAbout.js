import React from 'react'
import Title from '../Title'
import styles from '../../css/biomasa-about.module.css'
import img from '../../images/jude-beck-syPEv7Xzn4w-unsplash.jpg'
import styled from 'styled-components'

const EEAbout = () => {
 return (
   <section className={styles.about}>
     <div className={styles.aboutCenter}>
       <article className={styles.aboutInfo}>
         <Title title="energetska" subtitle="efikasnost" />
         <p>
           Energetska efikasnost znači iskorišćenje manje količine energije za
           obavlјanje nekog posla ili određene aktivnosti.
         </p>
       </article>
     </div>
   </section>
 )
}

export default EEAbout
