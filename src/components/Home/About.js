import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
import img from '../../images/jude-beck-syPEv7Xzn4w-unsplash.jpg'
import styled from 'styled-components'

const About = () => {
    return (
        <section className={styles.about}>
            <Title title="radni" subtitle="naslov" />
            <div className={styles.aboutCenter}>
                <article className={styles.aboutImg}>
                    <div className={styles.imgContainer}>
                        <img src={img} alt="about organization"/>
                    </div>
                </article>
                <article className={styles.aboutInfo}>
                    <h4>radni naslov</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, fugiat.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, fugiat.</p>
                        <button type="button" className="btn-primary">
                            procitajte vise
                        </button>
                </article>
            </div>
        </section>
    )
}

export default About
