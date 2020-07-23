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
                <Title title="" subtitle="biomasa"/>
                    <p>
                        <span>Biomasa</span> je biorazgradivi deo proizvoda, otpada i ostataka biološkog porekla iz polјoprivrede 
                        (uklјučujući bilјne i životinjske materije), 
                        šumarstva i povezanih industrija, kao i biorazgradivi deo industrijskog i komunalnog otpada
                    </p>

                    
                   
                    
                        
                </article>
            </div>
        </section>
    )
}

export default About
