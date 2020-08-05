import React from 'react'
import Title from '../Title'
import styles from '../../css/services.module.css'
import {Link} from 'gatsby'


const Services = (props) => {
    return (
      <section className={styles.services}>
        <Title title={props.title} subtitle={props.subtitle} />
        <div className={styles.center}>
          {props.services.map((item, index) => {
            return (
              <div className={styles.card}>
                <div className={styles.header}>
                  <div className={styles.headerIcon}>
                    {item.icon}
                  </div>
                  <p className={styles.headerTitle}>{item.title}</p>
                </div>
                <div className={styles.body}>{item.image}</div>
                <div className={styles.footer}>
                  <p className={styles.footerText}>{item.text}</p>
                  <div className={styles.footerActions}>
                    <Link to={item.href} className={styles.footerAction}>
                      {item.primaryActionTitle}
                    </Link>
                    <Link
                      style={{
                        visibility:
                          item.projectsHref != undefined ? "visible" : "hidden",
                      }}
                      to="/projekat#projectList"
                      state={{ prevPath: item.projectsHref }}
                      className={styles.footerAction}
                    >
                      {item.secondaryActionTitle}
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    )
}

export default Services


