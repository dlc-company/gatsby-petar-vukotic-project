import React from 'react'
import Title from '../Title'
import styles from '../../css/biomasa-about.module.css'
import {Link} from 'gatsby'

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
         <p>Program rada grupe možete pogledati
          <a href="https://assets.ctfassets.net/oyhajly20a7m/2rWhOQXrfJxsY160OnLOdt/e605bc41a909d23cb7407887849b14e9/Program_rada_RGBE.pdf"> ovde.</a>
          </p>

       </article>
     </div>
   </section>
 )
}

export default RadnaGrupaAbout
