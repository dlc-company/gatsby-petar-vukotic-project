import React from 'react'
import Title from '../Title'
import styles from '../../css/biomasa-about.module.css'
import img from '../../images/jude-beck-syPEv7Xzn4w-unsplash.jpg'
import styled from 'styled-components'

const UdruzenjaSumovlasnikaAbout = () => {
 return (
   <section className={styles.about}>
     <div className={styles.aboutCenter}>
       <article className={styles.aboutInfo}>
         <Title title="udruženja" subtitle="sumovlasnika" />
         <p>
           Najoptimalnije i najfunkcionalnije
           rešavanje svih (ili većine) problema u privatnim šumama (posebno onih
           čiji vlasnici ne žive u blizini svojih šuma) je osnivanje udruženja.
           Članom 73 Zakona o šuma je definisano:„Udruženje iz stava 1. ovog
           člana koje poseduje više od 100 ha šume, bez obzira na ukupnu
           površinu šuma u svojini, ima prioritet pri korišćenju sredstva
           Budžetskog fonda.“ Članovi Udruženja ostaju vlasnici svojih šuma,
           udruživanjm ništa ne gube, samo mogu dobiti, a ako nisu zadovoljni,
           mogu i izaći iz udruženja.
         </p>
       </article>
     </div>
   </section>
 )
}

export default UdruzenjaSumovlasnikaAbout
