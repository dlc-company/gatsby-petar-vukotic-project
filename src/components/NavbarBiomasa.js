import React, {useState} from 'react' // importujemo useState za toggle i koristimo React Hook
import AniLink from "gatsby-plugin-transition-link/AniLink";
import styles from '../css/navbarbiomasa.module.css'
import links from '../constants/biomasa-links'
const Navbar = () => {
    const [isOpen, setNav] = (useState(true)) // useState(React Hook) prima dva params: 1. true/false (false je default) 2. funkciju koja upravlja sa toggle
    const toggleNav = () => {
        setNav(isOpen => isOpen) // ako je toggle bio false (zatvoren) onda ce funkcija setNav promeniti vrednost u true(otvoren) preko !isOpen sto vraca true
    }
    console.log(isOpen); // testiramo u Chrome Inspect(CTRL+Shift+I) da li je isOpen(true||false)
    
    return (
        <nav className={styles.navbar}>
            <div className={styles.navCenter}>
                <div className={styles.navHeader}>
                <ul className={`${styles.navLinks} ${styles.showNav}`}> 
                    {links.map((item, index) => { {/* u map func kao drugi param stavljamo index jer renderujemo List */}
                        return (
                          <li key={index}>
                            {" "}
                            {/* u return odredjujemo u kom html elementu zelimo da renderujemo(prikazemo) podatke, u nasem slucaju nav linkove */}
                            <AniLink
                              fade
                              to={item.path}
                              state={{ prevPath: window.location.pathname }}
                            >
                              {/* Link je objekat i objekat ima property path - pogledaj u link.js fajlu */}
                              {item.text}{" "}
                              {/* ista logika, pristupamo drugom property -> text - pogledaj u link.js fajlu */}
                            </AniLink>
                          </li>
                        )
                    })}
                </ul> {/* koristimo ternary operator(shorthand za if i ako je true koristimo jedan css class, ako je false drugi) */}      
                </div>
                
            
            </div>
        </nav>
    )
}

export default Navbar
