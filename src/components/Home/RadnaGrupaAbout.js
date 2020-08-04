import React from 'react'
import Title from '../Title'
import styles from '../../css/biomasa-about.module.css'

const RadnaGrupaAbout = () => {
 return (
   <section className={styles.about}>
     <div className={styles.aboutCenter}>
       <article className={styles.aboutInfo}>
         <Title title="radna grupa" subtitle="za biomasu" />
         <p>
           Ovo regionalno telo, koje je osnovano sa ciljem razmatranja pitanja
           od značaja za održivu upotrebu biomase i održivo sprovođenje mera
           energetske efikasnosti u javnim objektima u Zlatiborskoj oblasti
         </p>
       </article>
     </div>
   </section>
 )
}

export default RadnaGrupaAbout
