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
                <Title title="text o" subtitle="biomasi"/>
                    <p>
                        Cum horribilem resurgere de sepulcris creaturis, sicut de iride et serpens.
                        Pestilentia, ipsa screams. Pestilentia est haec ambulabat mortuos. Sicut malus voodoo.
                    </p>

                    <p>
                        Aenean a dolor vulnerum aperire accedunt, mortui iam vivam.
                        Qui tardius moveri, sed in magna copia sint terribiles legionis.
                        Alii missing oculis aliorum sicut serpere crabs nostram. Putridi odores aere implent.
                    </p>
                   
                    
                        
                </article>
            </div>
        </section>
    )
}

export default About
