import React from 'react'
import Title from '../Title'
import styles from '../../css/biomasa-about.module.css'

const RadnaGrupaAbout = () => {
 return (
  <section className={styles.about}>

   <div className={styles.aboutCenter}>

    <article className={styles.aboutInfo}>
     <Title title="text o" subtitle="radnoj grupi za biomasu" />
     <p>
      Cum horribilem resurgere de sepulcris creaturis, sicut de iride et serpens.
      Pestilentia, ipsa screams. Pestilentia est haec ambulabat mortuos. Sicut malus voodoo.
     </p>
    </article>
   </div>
  </section>
 )
}

export default RadnaGrupaAbout
