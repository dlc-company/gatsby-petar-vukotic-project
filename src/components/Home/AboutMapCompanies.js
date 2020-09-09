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
    aboutImage5: file(relativePath: { eq: "arilje_agrogrk.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    aboutImage6: file(relativePath: { eq: "b-basta_3mkom.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    aboutImage7: file(relativePath: { eq: "b-basta_malisevac.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    aboutImage8: file(relativePath: { eq: "b-basta_inflame-pellets.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    aboutImage9: file(relativePath: { eq: "b-basta_raspellets.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    aboutImage10: file(relativePath: { eq: "b-basta_microtri.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    aboutImage11: file(relativePath: { eq: "pozega_sevar.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    aboutImage12: file(relativePath: { eq: "pozega_sm-eco-pelet.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    aboutImage13: file(relativePath: { eq: "kosjeric_novi-okov.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    aboutImage14: file(relativePath: { eq: "cajetina_gorstak.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    aboutImage15: file(relativePath: { eq: "zlatibor_noviokov.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    aboutImage16: file(relativePath: { eq: "cajetina_ikonic1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`



const AboutMapCompanies = () => {
  const {
    aboutImage,
    aboutImage1,
    aboutImage2,
    aboutImage3,
    aboutImage4,
    aboutImage5,
    aboutImage6,
    aboutImage7,
    aboutImage8,
    aboutImage9,
    aboutImage10,
    aboutImage11,
    aboutImage12,
    aboutImage13,
    aboutImage14,
    aboutImage15,
    aboutImage16,
  } = useStaticQuery(getAbout)
 // const { aboutImage1 } = useStaticQuery(getAbout)

 return (
   <div>
     <section id="ADKopaonikBeogradOgranakUzice" className={styles.about}>
       {/* <Title title="o" subtitle="nama" /> */}
       <div className={styles.aboutCenter}>
         <article className={styles.aboutImg}>
           <div className={styles.imgContainer}>
             {/* <img src={img} alt="about society" /> */}
             <Img
               fluid={aboutImage.childImageSharp.fluid}
               alt="about society"
             />
           </div>
         </article>
         <article className={styles.aboutInfo}>
           <h4>AD Kopaonik Beograd – Ogranak Užice</h4>
           <p>
             <span>Delatnost:</span> <br /> Trgovina na veliko i malo
             <br />
             <span>Proizvodni/prodajni asortiman:</span> <br /> pelet i briket
             <br />
             <span>Godišnji kapacitet:</span> <br /> 450t pelet / 50t briket
             <br />
             <span>Adresa:</span>
             <br />
             Pekarska bb, 31000 Užice
             <br />
             <span>Kontakt osoba:</span>
             <br />
             Aleksandar Milekić
             <br />
             <span>Telefon:</span>
             <br /> 031/564 215
             <br />
             <span>Email:</span>
             <br />
             kopaonik.ue@gmail.com
             <br />
             <span>Sertifikat kvaliteta drvne biomase:</span>
             <br />
             EN plus ya A2 kvalitet
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
             <Img
               fluid={aboutImage1.childImageSharp.fluid}
               alt="about society"
             />
           </div>
         </article>
         <article className={styles.aboutInfo}>
           <h4>NOVI OKOV d.o.o.</h4>
           <p>
             <span>Delatnost:</span> <br /> Trgovina
             <br />
             <span>Proizvodni/prodajni asortiman:</span> <br /> pelet,
             briket,ćumur, cepano drvo na paleti
             <br />
             <span>Godišnji kapacitet:</span> <br /> 100t
             <br />
             <span>Adresa:</span>
             <br />
             E-763, 31000 Užice
             <br />
             <span>Kontakt osoba:</span>
             <br />
             Dragana Stojanović
             <br />
             <span>Telefon:</span>
             <br /> 031/565 880
             <br />
             <span>Email:</span>
             <br />
             noviokov@gmail.com
             <br />
             <span>Web adresa:</span> <br />{" "}
             <a href="http://www.okov.rs" target="_blank">
               http://www.okov.rs
             </a>
             <br />
             <span>Sertifikat kvaliteta drvne biomase:</span>
             <br />
             Din plus, N cert, Önorm gepruft
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
             <Img
               fluid={aboutImage2.childImageSharp.fluid}
               alt="about society"
             />
           </div>
         </article>
         <article className={styles.aboutInfo}>
           <h4>METALFON d.o.o.</h4>
           <p>
             <span>Delatnost:</span> <br /> Trgovina na veliko i malo
             <br />
             <span>Proizvodni/prodajni asortiman:</span> <br />
             drvni pelet
             <br />
             <span>Adresa:</span>
             <br />
             Gorjani bb, 31000 Užice
             <br />
             <span>Kontakt osoba:</span>
             <br />
             Đorđe Radović
             <br />
             <span>Telefon:</span>
             <br />
             031/549 009, 065/200 41 61
             <br />
             <span>Email:</span>
             <br />
             metalfon.doo@mts.rs
             <br />
             <span>Sertifikat kvaliteta drvne biomase:</span>
             <br />
             EN plus
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
             <Img
               fluid={aboutImage3.childImageSharp.fluid}
               alt="about society"
             />
           </div>
         </article>
         <article className={styles.aboutInfo}>
           <h4>ŠUMADIJA d.o.o.</h4>
           <p>
             <span>Delatnost:</span> <br /> Rezanje i obrada drveta
             <br />
             <span>Proizvodni/prodajni asortiman:</span> <br />
             sečka(borova)
             <br />
             <span>Adresa:</span>
             <br />
             Kremna bb, 31000 Užice
             <br />
             <span>Kontakt osoba:</span>
             <br />
             Milosav Šimšić
             <br />
             <span>Telefon:</span>
             <br />
             064/270 72 64
             <br />
             <span>Email:</span>
             <br />
             simsic.m@open.telekom.rs
             <br />
             <span>Web adresa:</span>
             <br />
             <a href="http://www.simsicm.rs" target="_blank">
               http://www.simsicm.rs
             </a>
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
             <Img
               fluid={aboutImage4.childImageSharp.fluid}
               alt="about society"
             />
           </div>
         </article>
         <article className={styles.aboutInfo}>
           <h4>Stovarište “Daničić“</h4>
           <p>
             <span>Delatnost:</span> <br />
             Prodaja ogreva
             <br />
             <span>Proizvodni/prodajni asortiman:</span> <br />
             Pelet, drveni briket, ugljani briket
             <br />
             <span>Godišnji kapacitet:</span> <br />
             2000 tona
             <br />
             <span>Adresa:</span>
             <br />
             Kralja Dragutina 1 Užice
             <br />
             <span>Kontakt osoba:</span>
             <br />
             Bojan Daničić, Darko Daničić
             <br />
             <span>Telefon:</span>
             <br />
             064/137-01-83, 060/0-553-036
             <br />
             <span>Email:</span>
             <br />
             darko.danicic@gmail.com
             <br />
             <span>Sertifikat kvaliteta drvne biomase:</span>
             <br />
             Jugoinspekt Beograd
           </p>
           {/* <button type="button" className="btn-primary">
      procitajte vise
          </button> */}
         </article>
       </div>
     </section>
     <section id="AGROGRK" className={styles.about}>
       {/* <Title title="o" subtitle="nama" /> */}
       <div className={styles.aboutCenter}>
         <article className={styles.aboutImg}>
           <div className={styles.imgContainer}>
             {/* <img src={img} alt="about society" /> */}
             <Img
               fluid={aboutImage5.childImageSharp.fluid}
               alt="about society"
             />
           </div>
         </article>
         <article className={styles.aboutInfo}>
           <h4>AGRO GRK t.a.r.</h4>
           <p>
             <span>Delatnost:</span> <br />
             Trgovina stočnom hranom i prerada ogrevnog drveta
             <br />
             <span>Proizvodni/prodajni asortiman:</span> <br />
             Paletirane cepanice 25cm, 33cm
             <br />
             <span>Godišnji kapacitet:</span> <br />
             500 prm
             <br />
             <span>Adresa:</span>
             <br />
             Bogojevići bb, 31230 Arilje
             <br />
             <span>Kontakt osoba:</span>
             <br />
             Vladimir Grković
             <br />
             <span>Telefon:</span>
             <br />
             062/235 286
             <br />
             <span>Email:</span>
             <br />
             radmilgrkovic@yahoo.com
           </p>
           {/* <button type="button" className="btn-primary">
      procitajte vise
          </button> */}
         </article>
       </div>
     </section>
     <section id="RPPG3MKOM" className={styles.about}>
       {/* <Title title="o" subtitle="nama" /> */}
       <div className={styles.aboutCenter}>
         <article className={styles.aboutImg}>
           <div className={styles.imgContainer}>
             {/* <img src={img} alt="about society" /> */}
             <Img
               fluid={aboutImage6.childImageSharp.fluid}
               alt="about society"
             />
           </div>
         </article>
         <article className={styles.aboutInfo}>
           <h4>RPPG “3M-KOM”</h4>
           <p>
             <span>Delatnost:</span> <br />
             Prerada drveta i proizvodnja ogreva
             <br />
             <span>Proizvodni/prodajni asortiman:</span> <br />
             cepano drvo
             <br />
             <span>Godišnji kapacitet:</span> <br />
             400m3 (600 prm)
             <br />
             <span>Adresa:</span>
             <br />
             Bušinsko polje bb, 31250 Bajina Bašta
             <br />
             <span>Kontakt osoba:</span>
             <br />
             Goran Jelisavčić
             <br />
             <span>Telefon:</span>
             <br />
             065/863 30 57
             <br />
             <span>Email:</span>
             <br />
             goranbbasta@open.telekom.rs
           </p>
           {/* <button type="button" className="btn-primary">
      procitajte vise
          </button> */}
         </article>
       </div>
     </section>
     <section id="RPPUMALISEVAC" className={styles.about}>
       {/* <Title title="o" subtitle="nama" /> */}
       <div className={styles.aboutCenter}>
         <article className={styles.aboutImg}>
           <div className={styles.imgContainer}>
             {/* <img src={img} alt="about society" /> */}
             <Img
               fluid={aboutImage7.childImageSharp.fluid}
               alt="about society"
             />
           </div>
         </article>
         <article className={styles.aboutInfo}>
           <h4>RPPU “MALIŠEVAC”</h4>
           <p>
             <span>Delatnost:</span> <br />
             Obrada drveta i proizvodnja peleta
             <br />
             <span>Proizvodni/prodajni asortiman:</span> <br />
             drvni peleti
             <br />
             <span>Godišnji kapacitet:</span> <br />
             100t
             <br />
             <span>Adresa:</span>
             <br />
             Beserovina bb, 31250 Bajina Bašta
             <br />
             <span>Kontakt osoba:</span>
             <br />
             Zoran Milićević
             <br />
             <span>Telefon:</span>
             <br />
             064/185 90 10
             <br />
             <span>Email:</span>
             <br />
             malisevac@yahoo.com
             <br />
             <span>Web adresa:</span>
             <br />
             <a href="http://www.pelet-malisevac.rs" target="_blank">
               pelet-malisevac.rs
             </a>
           </p>
           {/* <button type="button" className="btn-primary">
      procitajte vise
          </button> */}
         </article>
       </div>
     </section>
     <section id="INFLAMEPELLETS" className={styles.about}>
       {/* <Title title="o" subtitle="nama" /> */}
       <div className={styles.aboutCenter}>
         <article className={styles.aboutImg}>
           <div className={styles.imgContainer}>
             {/* <img src={img} alt="about society" /> */}
             <Img
               fluid={aboutImage8.childImageSharp.fluid}
               alt="about society"
             />
           </div>
         </article>
         <article className={styles.aboutInfo}>
           <h4>INFLAME-PELLETS d.o.o.</h4>
           <p>
             <span>Delatnost:</span> <br />
             Proizvodnja peleta
             <br />
             <span>Proizvodni/prodajni asortiman:</span> <br />
             drvni peleti i sečka
             <br />
             <span>Godišnji kapacitet:</span> <br />
             600t
             <br />
             <span>Adresa:</span>
             <br />
             Milutina Uskokovića 19, 31250 Bajina Bašta
             <br />
             <span>Kontakt osoba:</span>
             <br />
             Elvis Andrić
             <br />
             <span>Telefon:</span>
             <br />
             066/467 319
             <br />
             <span>Email:</span>
             <br />
             andric.elvis@yahoo.com
           </p>
           {/* <button type="button" className="btn-primary">
      procitajte vise
          </button> */}
         </article>
       </div>
     </section>
     <section id="RASPELLETS" className={styles.about}>
       {/* <Title title="o" subtitle="nama" /> */}
       <div className={styles.aboutCenter}>
         <article className={styles.aboutImg}>
           <div className={styles.imgContainer}>
             {/* <img src={img} alt="about society" /> */}
             <Img
               fluid={aboutImage9.childImageSharp.fluid}
               alt="about society"
             />
           </div>
         </article>
         <article className={styles.aboutInfo}>
           <h4>RAS&PELLETS</h4>
           <p>
             <span>Delatnost:</span> <br />
             Proizvodnja proizvoda od drveta, plute, slame i pruća
             <br />
             <span>Proizvodni/prodajni asortiman:</span> <br />
             pelet
             <br />
             <span>Adresa:</span>
             <br />
             Braće Dragutina i Rada čučkovića 3 31250 Bajina Bašta
             <br />
             <span>Kontakt osoba:</span>
             <br />
             Rada Damjanović
             <br />
             <span>Telefon:</span>
             <br />
             064/843 09 23
           </p>
           {/* <button type="button" className="btn-primary">
      procitajte vise
          </button> */}
         </article>
       </div>
     </section>
     <section id="MICROTRI" className={styles.about}>
       {/* <Title title="o" subtitle="nama" /> */}
       <div className={styles.aboutCenter}>
         <article className={styles.aboutImg}>
           <div className={styles.imgContainer}>
             {/* <img src={img} alt="about society" /> */}
             <Img
               fluid={aboutImage10.childImageSharp.fluid}
               alt="about society"
             />
           </div>
         </article>
         <article className={styles.aboutInfo}>
           <h4>MICRO TRI d.o.o.</h4>
           <p>
             <span>Delatnost:</span> <br />
             Proizvodnja
             <br />
             <span>Proizvodni/prodajni asortiman:</span> <br />
             briket
             <br />
             <span>Godišnji kapacitet:</span>
             100t
             <br />
             <span>Adresa:</span>
             <br />
             Milenka Topalovića bb 31250 Bajina Bašta
             <br />
             <span>Kontakt osoba:</span>
             <br />
             Rajko Marić
             <br />
             <span>Telefon:</span>
             <br />
             031/864-389
             <br />
             <span>Email:</span>
             <br />
             office@microtri.rs
             <br />
             <span>Web adresa:</span>
             <br />
             <a href="http://www.microtri.rs/" target="_blank">
               http://www.microtri.rs
             </a>
           </p>
           {/* <button type="button" className="btn-primary">
      procitajte vise
          </button> */}
         </article>
       </div>
     </section>
     <section id="SEVAR" className={styles.about}>
       {/* <Title title="o" subtitle="nama" /> */}
       <div className={styles.aboutCenter}>
         <article className={styles.aboutImg}>
           <div className={styles.imgContainer}>
             {/* <img src={img} alt="about society" /> */}
             <Img
               fluid={aboutImage11.childImageSharp.fluid}
               alt="about society"
             />
           </div>
         </article>
         <article className={styles.aboutInfo}>
           <h4>Ševar d.o.o.</h4>
           <p>
             <span>Delatnost:</span> <br />
             Industrijska prerada drveta
             <br />
             <span>Proizvodni/prodajni asortiman:</span> <br />
             pelet
             <br />
             <span>Godišnji kapacitet:</span>
             500t
             <br />
             <span>Adresa:</span>
             <br />
             Milićevo selo 31210 Požega
             <br />
             <span>Kontakt osoba:</span>
             <br />
             Danijel Ristović
             <br />
             <span>Telefon:</span>
             <br />
             031/894 066, 065/200 4600
             <br />
             <span>Email:</span>
             <br />
             office@sevar.rs
             <br />
             <span>Web adresa:</span>
             <br />
             <a href="http://www.sevar.rs/" target="_blank">
               http://www.sevar.rs
             </a>
             <br />
             <span>Sertifikat kvaliteta drvne biomase:</span>
             <br />
             Jugoinspekt, sertifikat A1
           </p>
           {/* <button type="button" className="btn-primary">
      procitajte vise
          </button> */}
         </article>
       </div>
     </section>
     <section id="SMECO" className={styles.about}>
       {/* <Title title="o" subtitle="nama" /> */}
       <div className={styles.aboutCenter}>
         <article className={styles.aboutImg}>
           <div className={styles.imgContainer}>
             {/* <img src={img} alt="about society" /> */}
             <Img
               fluid={aboutImage12.childImageSharp.fluid}
               alt="about society"
             />
           </div>
         </article>
         <article className={styles.aboutInfo}>
           <h4>SM Eco pelet</h4>
           <p>
             <span>Delatnost:</span> <br />
             Proizvodnja peleta
             <br />
             <span>Proizvodni/prodajni asortiman:</span> <br />
             pelet
             <br />
             <span>Godišnji kapacitet:</span>
             500t
             <br />
             <span>Adresa:</span>
             <br />
             Zdravčići bb 31210 Požega
             <br />
             <span>Kontakt osoba:</span>
             <br />
             Branko Miailović
             <br />
             <span>Telefon:</span>
             <br />
             064/139 93 37
             <br />
           </p>
           {/* <button type="button" className="btn-primary">
      procitajte vise
          </button> */}
         </article>
       </div>
     </section>
     <section id="NOVIOKOVKOSJERIC" className={styles.about}>
       {/* <Title title="o" subtitle="nama" /> */}
       <div className={styles.aboutCenter}>
         <article className={styles.aboutImg}>
           <div className={styles.imgContainer}>
             {/* <img src={img} alt="about society" /> */}
             <Img
               fluid={aboutImage13.childImageSharp.fluid}
               alt="about society"
             />
           </div>
         </article>
         <article className={styles.aboutInfo}>
           <h4>NOVI OKOV d.o.o. – Kosjerić</h4>
           <p>
             <span>Delatnost:</span> <br />
             Trgovina
             <br />
             <span>Proizvodni/prodajni asortiman:</span> <br />
             pelet, briket,ćumur, cepano drvo na paleti
             <br />
             <span>Godišnji kapacitet:</span>
             100t
             <br />
             <span>Adresa:</span>
             <br />
             Miće Zarića 2 31260 Kosjerić
             <br />
             <span>Kontakt osoba:</span>
             <br />
             Dragana Stojanović
             <br />
             <span>Telefon:</span>
             <br />
             031/315 22 24
             <br />
             <span>Email:</span>
             <br />
             kosjeric@noviokov.com
             <br />
             <span>Web adresa:</span>
             <br />
             <a href="http://www.okov.rs/" target="_blank">
               http://www.okov.rs
             </a>
             <br />
             <span>Sertifikat kvaliteta drvne biomase:</span>
             <br />
             Din plus, N cert, Önorm gepruft
           </p>
           {/* <button type="button" className="btn-primary">
      procitajte vise
          </button> */}
         </article>
       </div>
     </section>
     <section id="NOVIOKOVZlatibor" className={styles.about}>
       {/* <Title title="o" subtitle="nama" /> */}
       <div className={styles.aboutCenter}>
         <article className={styles.aboutImg}>
           <div className={styles.imgContainer}>
             {/* <img src={img} alt="about society" /> */}
             <Img
               fluid={aboutImage15.childImageSharp.fluid}
               alt="about society"
             />
           </div>
         </article>
         <article className={styles.aboutInfo}>
           <h4>NOVI OKOV d.o.o. – Zlatibor</h4>
           <p>
             <span>Delatnost:</span> <br />
             Trgovina
             <br />
             <span>Proizvodni/prodajni asortiman:</span> <br />
             pelet, briket,ćumur, cepano drvo na paleti
             <br />
             <span>Godišnji kapacitet:</span>
             100t
             <br />
             <span>Adresa:</span>
             <br />
             Ulica sportova bb 31315 Zlatibor
             <br />
             <span>Kontakt osoba:</span>
             <br />
             Dragana Stojanović
             <br />
             <span>Telefon:</span>
             <br />
             031/315 01 05
             <br />
             <span>Email:</span>
             <br />
             zlatibor@noviokov.com
             <br />
             <span>Web adresa:</span>
             <br />
             <a href="http://www.okov.rs/" target="_blank">
               http://www.okov.rs
             </a>
             <br />
             <span>Sertifikat kvaliteta drvne biomase:</span>
             <br />
             Din plus, N cert, onorm gepruft
           </p>
           {/* <button type="button" className="btn-primary">
      procitajte vise
          </button> */}
         </article>
       </div>
     </section>
     <section id="IKONIC" className={styles.about}>
       {/* <Title title="o" subtitle="nama" /> */}
       <div className={styles.aboutCenter}>
         <article className={styles.aboutImg}>
           <div className={styles.imgContainer}>
             {/* <img src={img} alt="about society" /> */}
             <Img
               fluid={aboutImage16.childImageSharp.fluid}
               alt="about society"
             />
           </div>
         </article>
         <article className={styles.aboutInfo}>
           <h4>IKONIĆ d.o.o.</h4>
           <p>
             <span>Delatnost:</span> <br />
             Trgovina
             <br />
             <span>Proizvodni/prodajni asortiman:</span> <br />
             drvni pelet, briket, ogrevno drvo
             <br />
             <span>Adresa:</span>
             <br />
             Ćaldov put bb 31310 Čajetina
             <br />
             <span>Kontakt osoba:</span>
             <br />
             Duško Ikonić
             <br />
             <span>Telefon:</span>
             <br />
             031/832-082
             <br />
             
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