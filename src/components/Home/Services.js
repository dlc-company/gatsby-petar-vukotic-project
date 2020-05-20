import React from 'react'
import Title from '../Title'
import styles from '../../css/services.module.css'
import services from '../../constants/services'

const Services = () => {
    return (
        <section className={styles.services}>
            
            <div className={styles.center}>
                {
                    services.map((item,index)=>{
                        return (
                        <a href={item.href}>
                            <article key={index} className={styles.service}>
                            {/* <span>{item.icon}</span> */}
                            {/* <h4>{item.title}</h4> */}
                            {/* <p>{item.text}</p> */}
                            <p>{item.link}</p>
                            <div className={styles.imagebox}>{item.image}</div>
                        
                            {/* <a href={item.href}><button>{item.button}</button></a>                           */}
                        </article>
                        </a>
                    )})
                }
            </div>
        </section>
    )
}

export default Services


