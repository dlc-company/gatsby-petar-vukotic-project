import React from "react"
import Title from "../Title"
import styles from "../../css/aboutMapCompanies.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "uzice_kopaonik.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    aboutImage1: file(relativePath: { eq: "uzice_novi-okov.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`



const AboutMapCompanies = () => {
 const { aboutImage } = useStaticQuery(getAbout)
 const { aboutImage1 } = useStaticQuery(getAbout)

 return (
  <div>
   <section id="ADKopaonikBeogradOgranakUzice" className={styles.about}>
   {/* <Title title="o" subtitle="nama" /> */}
   <div className={styles.aboutCenter}>
    <article className={styles.aboutImg}>
     <div className={styles.imgContainer}>
      {/* <img src={img} alt="about society" /> */}
      <Img fluid={aboutImage.childImageSharp.fluid} alt="about society" />
     </div>
    </article>
    <article className={styles.aboutInfo}>
      <h4>AD Kopaonik Beograd – Ogranak Užice</h4>
     <p>
       <span>Delatnost:</span> <br /> Trgovina na veliko i malo 
      <br/>
       <span>Proizvodni/prodajni asortiman:</span> <br /> pelet i briket
       <br/>
       <span>Godišnji kapacitet:</span> <br /> 450t pelet / 50t briket
     <br/>
       <span>Adresa:</span><br />Pekarska bb, 31000 Užice
      <br/>
       <span>Kontakt osoba:</span><br />Aleksandar Milekić
      <br/>
       <span>Telefon:</span><br /> 031/564 215
      <br/>
       <span>Email:</span><br />kopaonik.ue@gmail.com
      <br/>
       <span>Sertifikat kvaliteta drvne biomase:</span><br />EN plus ya A2 kvalitet
      </p>
     {/* <button type="button" className="btn-primary">
      procitajte vise
          </button> */}
    </article>
   </div>
  </section>
   <section id="NOVIOKOV" className={styles.about}>
    {/* <Title title="o" subtitle="nama" /> */}
    <div className={styles.aboutCenter}>
     <article className={styles.aboutImg}>
      <div className={styles.imgContainer}>
       {/* <img src={img} alt="about society" /> */}
       <Img fluid={aboutImage1.childImageSharp.fluid} alt="about society" />
      </div>
     </article>
     <article className={styles.aboutInfo}>
      <h4>NOVI OKOV d.o.o.</h4>
      <p>
       <span>Delatnost:</span> <br /> Trgovina
      <br />
       <span>Proizvodni/prodajni asortiman:</span> <br /> pelet, briket,ćumur, cepano drvo na paleti
       <br />
       <span>Godišnji kapacitet:</span> <br /> 100t
     <br />
       <span>Adresa:</span><br />E-763, 31000 Užice
      <br />
       <span>Kontakt osoba:</span><br />Dragana Stojanović
      <br />
       <span>Telefon:</span><br /> 031/565 880
      <br />
       <span>Email:</span><br />noviokov@gmail.com
      <br />
       <span>Web adresa:</span> <br /> <a href="http://www.okov.rs" target="_blank">http://www.okov.rs</a>
      <br/>
       <span>Sertifikat kvaliteta drvne biomase:</span><br />Din plus, N cert, Önorm gepruft
      </p>
      {/* <button type="button" className="btn-primary">
      procitajte vise
          </button> */}
     </article>
    </div>
   </section>
  </div>
 )
}

export default AboutMapCompanies