import React from 'react'
import styles from '../../css/partnerlogos.module.css'

const PartnerLogos = () => {
    return (
        <div className={styles.row}>
            <h4>nasi partneri</h4>
        <div className={styles.column}>
          <img src={require("../../images/logo1.jpg")}  style={{width:"100%"}}/>
        </div>

        <div className={styles.column}>
          <img src={require("../../images/logo3.png")}  style={{width:"100%"}}/>
        </div>

        <div className={styles.column}>
          <img src={require("../../images/logo2.png")}  style={{width:"100%"}}/>
        </div>

      </div>
    )
}

export default PartnerLogos
