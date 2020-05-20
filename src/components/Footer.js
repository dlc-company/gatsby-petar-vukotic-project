import React from 'react'
import styles from '../css/footer.module.css'
import links from '../constants/links'
import socialIcons from '../constants/social-icons'
import AniLink from "gatsby-plugin-transition-link/AniLink";


const Footer = () => {
    return (
      <footer className={styles.footer}>
        <div className={styles.links}>
          {links.map((item, index) => {
            return (
              <AniLink fade key={index} to={item.path}>
                {item.text}
              </AniLink>
            )
          })}
        </div>
        <div className={styles.icons}>
          {socialIcons.map((item, index) => {
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            )
          })}
        </div>
        <div className={styles.copyright}>
          copyright &copy; {new Date().getFullYear()} <br/>
          Izradu ovog sajta omogućio je ____ posredstvom ___. Regionalna
          razvojna agencija Uzice je u potpunosti odgovorna za sadržaj
          ovog sajta, koji ne mora nužno odražavati stavove ___ ili ___.
        </div>
      </footer>
    )
}

export default Footer
