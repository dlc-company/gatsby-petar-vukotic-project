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
    aboutImage2: file(relativePath: { eq: "uzice_metalfon.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    aboutImage3: file(relativePath: { eq: "uzice_sumadija.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    aboutImage4: file(relativePath: { eq: "uzice_danicic.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

  }
`



const AboutMapCompanies = () => {
  const { aboutImage, aboutImage1, aboutImage2, aboutImage3, aboutImage4 } = useStaticQuery(getAbout)
 // const { aboutImage1 } = useStaticQuery(getAbout)

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
     <section id="METALFON" className={styles.about}>
       {/* <Title title="o" subtitle="nama" /> */}
       <div className={styles.aboutCenter}>
         <article className={styles.aboutImg}>
           <div className={styles.imgContainer}>
             {/* <img src={img} alt="about society" /> */}
             <Img fluid={aboutImage2.childImageSharp.fluid} alt="about society" />
           </div>
         </article>
         <article className={styles.aboutInfo}>
           <h4>METALFON d.o.o.</h4>
           <p>
             <span>Delatnost:</span> <br /> Trgovina na veliko i malo
      <br />
             <span>Proizvodni/prodajni asortiman:</span> <br />drvni pelet
       <br />
             <span>Adresa:</span><br />Gorjani bb, 31000 Užice
      <br />
             <span>Kontakt osoba:</span><br />Đorđe Radović
      <br />
             <span>Telefon:</span><br />031/549 009, 065/200 41 61
      <br />
             <span>Email:</span><br />metalfon.doo@mts.rs
      <br />
             <span>Sertifikat kvaliteta drvne biomase:</span><br />EN plus
      </p>
           {/* <button type="button" className="btn-primary">
      procitajte vise
          </button> */}
         </article>
       </div>
     </section>
     <section id="SUMADIJA" className={styles.about}>
       {/* <Title title="o" subtitle="nama" /> */}
       <div className={styles.aboutCenter}>
         <article className={styles.aboutImg}>
           <div className={styles.imgContainer}>
             {/* <img src={img} alt="about society" /> */}
             <Img fluid={aboutImage3.childImageSharp.fluid} alt="about society" />
           </div>
         </article>
         <article className={styles.aboutInfo}>
           <h4>ŠUMADIJA d.o.o.</h4>
           <p>
             <span>Delatnost:</span> <br /> Rezanje i obrada drveta
      <br />
             <span>Proizvodni/prodajni asortiman:</span> <br />sečka(borova)
       <br />
             <span>Adresa:</span><br />Kremna bb, 31000 Užice
      <br />
             <span>Kontakt osoba:</span><br />Milosav Šimšić
      <br />
             <span>Telefon:</span><br />064/270 72 64
      <br />
             <span>Email:</span><br />simsic.m@open.telekom.rs
      <br />
             <span>Web adresa:</span><br /><a href="http://www.simsicm.rs" target="_blank">http://www.simsicm.rs</a>
      </p>
           {/* <button type="button" className="btn-primary">
      procitajte vise
          </button> */}
         </article>
       </div>
     </section>
     <section id="DANICIC" className={styles.about}>
       {/* <Title title="o" subtitle="nama" /> */}
       <div className={styles.aboutCenter}>
         <article className={styles.aboutImg}>
           <div className={styles.imgContainer}>
             {/* <img src={img} alt="about society" /> */}
             <Img fluid={aboutImage4.childImageSharp.fluid} alt="about society" />
           </div>
         </article>
         <article className={styles.aboutInfo}>
           <h4>Stovarište “Daničić“</h4>
           <p>
             <span>Delatnost:</span> <br />Prodaja ogreva
      <br />
             <span>Proizvodni/prodajni asortiman:</span> <br />Pelet, drveni briket, ugljani briket
       <br />
             <span>Godišnji kapacitet:</span> <br />2000 tona
     <br />
             <span>Adresa:</span><br />Kralja Dragutina 1 Užice
      <br />
             <span>Kontakt osoba:</span><br />Bojan Daničić, Darko Daničić
      <br />
             <span>Telefon:</span><br />064/137-01-83, 060/0-553-036
      <br />
             <span>Email:</span><br />darko.danicic@gmail.com
      <br />
             <span>Sertifikat kvaliteta drvne biomase:</span><br />Jugoinspekt Beograd
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