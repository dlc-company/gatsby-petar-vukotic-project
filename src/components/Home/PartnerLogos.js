import React from 'react'
import styles from '../../css/partnerlogos.module.css'
import Title from '../Title'
import partners from '../../constants/partners'

const PartnerLogos = () => {
    return (
      <section className={styles.partners}>
      <Title title="nasi" subtitle="partneri"/>
      <div className={styles.center}>
          {
              partners.map((item,index)=>{
                  return (
                  <a href={item.href}>
                      <article key={index} className={styles.partners}>                    
                      <div className={styles.partnerCards}>{item.image}</div>                     
                  </article>
                  </a>
              )})
          }
      </div>
  </section>
    )
}

export default PartnerLogos
