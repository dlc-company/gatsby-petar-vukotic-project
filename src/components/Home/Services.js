import React from 'react'
import Title from '../Title'
import styles from '../../css/services.module.css'
import services from '../../constants/services'
const Services = () => {
    return (
        <section className={styles.services}>
            <Title title="radni" subtitle="naslov"/>
            <div className={styles.center}>
                {
                    services.map((item,index)=>{
                        return <article key={index} className={styles.service}>
                            <span>{item.icon}</span>
                            <h4>{item.title}</h4>
                            <p>{item.text}</p>
                            <a href={item.href}><button>{item.button}</button></a>                          
                        </article>
                    })
                }
            </div>
        </section>
    )
}

export default Services


