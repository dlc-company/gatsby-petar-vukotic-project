import React, {useState} from 'react' // importujemo useState za toggle i koristimo React Hook
import AniLink from "gatsby-plugin-transition-link/AniLink";
import styles from '../css/navbar.module.css'
import { FaAlignRight } from 'react-icons/fa'
import links from '../constants/links'
import socialIcons from '../constants/social-icons'
import logo from '../images/er_Lexo.png'

const Navbar = () => {
    const [isOpen, setNav] = (useState(false)) // useState(React Hook) prima dva params: 1. true/false (false je default) 2. funkciju koja upravlja sa toggle
    const toggleNav = () => {
        setNav(isOpen => !isOpen) // ako je toggle bio false (zatvoren) onda ce funkcija setNav promeniti vrednost u true(otvoren) preko !isOpen sto vraca true
    }
    console.log(isOpen); // testiramo u Chrome Inspect(CTRL+Shift+I) da li je isOpen(true||false)
    
       const url = 
       console.log(url)
    
    return (
      <nav
        className={window.location.pathname == '/' ? `${styles.navbarHome}`: `${styles.navbar}`}       
      >
        <div className={styles.navCenter}>
          <div className={styles.navHeader}>
            <img src={logo} alt="rra logo" />
            <button
              type="button"
              className={styles.logoBtn}
              onClick={toggleNav}
            >
              <FaAlignRight className={styles.logoIcon} />
            </button>
          </div>
          <ul
            className={
              isOpen
                ? `${styles.navLinks} ${styles.showNav}`
                : `${styles.navLinks}`
            }
          >
            {links.map((item, index) => {
              {
                /* u map func kao drugi param stavljamo index jer renderujemo List */
              }
              return (
                <li key={index}>
                  {" "}
                  {/* u return odredjujemo u kom html elementu zelimo da renderujemo(prikazemo) podatke, u nasem slucaju nav linkove */}
                  <AniLink fade to={item.path}>
                    {/* Link je objekat i objekat ima property path - pogledaj u link.js fajlu */}
                    {item.text}{" "}
                    {/* ista logika, pristupamo drugom property -> text - pogledaj u link.js fajlu */}
                  </AniLink>
                </li>
              )
            })}
          </ul>{" "}
          {/* koristimo ternary operator(shorthand za if i ako je true koristimo jedan css class, ako je false drugi) */}
          <div className={styles.navSocialLinks}>
            {socialIcons.map((item, index) => {
              {
                /* React trazi da u map func koristimo key={} i zbog toga u map() prosledjujemo index property, url je property objekta social-links kome pristupamo, a _blank nam otvara link na novoj strani, noopener i noreferrer su zbog security-a - pogledaj social-icons.js; icon je naravno drugi property i social icon se nece videti na manjem prozoru - - pogledaj social-icons.js */
              }
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
        </div>
      </nav>
    )
}

export default Navbar
