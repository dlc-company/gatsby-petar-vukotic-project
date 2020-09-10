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
    aboutImage17: file(relativePath: { eq: "n-varos_nanix-wood.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    aboutImage18: file(relativePath: { eq: "n-varos_zlatar-sped.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    aboutImage19: file(relativePath: { eq: "n-varos_omo-prom.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    aboutImage20: file(relativePath: { eq: "n-varos_zlosnica.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    aboutImage21: file(relativePath: { eq: "n-varos_dmb-babic.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    aboutImage22: file(relativePath: { eq: "priboj_mil-pelet.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    aboutImage23: file(relativePath: { eq: "prijepolje_jela (1).jpg" }) {
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
    aboutImage17,
    aboutImage18,
    aboutImage19,
    aboutImage20,
    aboutImage21,
    aboutImage22,
    aboutImage23,
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
     <section id="GORSTAK" className={styles.about}>
       {/* <Title title="o" subtitle="nama" /> */}
       <div className={styles.aboutCenter}>
         <article className={styles.aboutImg}>
           <div className={styles.imgContainer}>
             {/* <img src={img} alt="about society" /> */}
             <Img
               fluid={aboutImage14.childImageSharp.fluid}
               alt="about society"
             />
           </div>
         </article>
         <article className={styles.aboutInfo}>
           <h4>Gorštak d.o.o.</h4>
           <p>
             <span>Delatnost:</span> <br /> Proizvodnja rezane građe
             <br />
             <span>Proizvodni/prodajni asortiman:</span> <br /> pelet i drvna
             sečka
             <br />
             <span>Godišnji kapacitet:</span> <br /> 10000t
             <br />
             <span>Adresa:</span>
             <br />
             Braneško polje bb 31310 Čajetina
             <br />
             <span>Kontakt osoba:</span>
             <br />
             Zlatko Tešić
             <br />
             <span>Telefon:</span>
             <br /> 031/832 299, 064/847 36 02
             <br />
             <span>Email:</span>
             <br />
             gorstakod@sezampro.rs
             <br />
             <span>Web adresa:</span> <br />{" "}
             <a href="http://www.gorstak.rs/" target="_blank">
               http://www.gorstak.rs
             </a>
             <br />
             <span>Sertifikat kvaliteta drvne biomase:</span>
             <br />
             Jugoinspekt
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
     <section id="NANIXWOOD" className={styles.about}>
       {/* <Title title="o" subtitle="nama" /> */}
       <div className={styles.aboutCenter}>
         <article className={styles.aboutImg}>
           <div className={styles.imgContainer}>
             {/* <img src={img} alt="about society" /> */}
             <Img
               fluid={aboutImage17.childImageSharp.fluid}
               alt="about society"
             />
           </div>
         </article>
         <article className={styles.aboutInfo}>
           <h4>NANIX WOOD D.O.O.</h4>
           <p>
             <span>Delatnost:</span> <br />
             Proizvodnja peleta
             <br />
             <span>Proizvodni/prodajni asortiman:</span> <br />
             pelet
             <br />
             <span>Godišnji kapacitet:</span>
             15000t
             <br />
             <span>Adresa:</span>
             <br />
             Magistralni put 5/a 31320 Nova Varoš
             <br />
             <span>Kontakt osoba:</span>
             <br />
             Goran Kolašinac
             <br />
             <span>Telefon:</span>
             <br />
             033/62 080, 060/08 444 54
             <br />
             <span>Email:</span>
             <br />
             office@nanixwood.com
             <br />
             <span>Web adresa:</span>
             <br />
             <a href="http://www.nanixwood.com/" target="_blank">
               http://www.nanixwood.com
             </a>
             <br />
           </p>
           {/* <button type="button" className="btn-primary">
      procitajte vise
          </button> */}
         </article>
       </div>
     </section>
     <section id="ZLATARSPED" className={styles.about}>
       {/* <Title title="o" subtitle="nama" /> */}
       <div className={styles.aboutCenter}>
         <article className={styles.aboutImg}>
           <div className={styles.imgContainer}>
             {/* <img src={img} alt="about society" /> */}
             <Img
               fluid={aboutImage18.childImageSharp.fluid}
               alt="about society"
             />
           </div>
         </article>
         <article className={styles.aboutInfo}>
           <h4>ZLATAR ŠPED d.o.o.</h4>
           <p>
             <span>Delatnost:</span> <br />
             Proizvodnja i trgovina
             <br />
             <span>Proizvodni/prodajni asortiman:</span> <br />
             pelet i sečka
             <br />
             <span>Godišnji kapacitet:</span>
             6000t, sečka neogr.
             <br />
             <span>Adresa:</span>
             <br />
             Vraneša bb 31320 Nova Varoš
             <br />
             <span>Kontakt osoba:</span>
             <br />
             Danko Pušičić
             <br />
             <span>Telefon:</span>
             <br />
             064/823-3042
             <br />
             <span>Email:</span>
             <br />
             danko@zlatarsped.com
             <br />
             <span>Web adresa:</span>
             <br />
             <a href="http://www.zlatarsped.com/" target="_blank">
               http://www.zlatarsped.com
             </a>
             <br />
             <span>Sertifikat kvaliteta drvne biomase:</span>
             <br />
             ISO 9001-2015
           </p>
           {/* <button type="button" className="btn-primary">
      procitajte vise
          </button> */}
         </article>
       </div>
     </section>
     <section id="OMOPROM" className={styles.about}>
       {/* <Title title="o" subtitle="nama" /> */}
       <div className={styles.aboutCenter}>
         <article className={styles.aboutImg}>
           <div className={styles.imgContainer}>
             {/* <img src={img} alt="about society" /> */}
             <Img
               fluid={aboutImage19.childImageSharp.fluid}
               alt="about society"
             />
           </div>
         </article>
         <article className={styles.aboutInfo}>
           <h4>sztr OMO-PROM</h4>
           <p>
             <span>Delatnost:</span> <br />
             Prerada drveta
             <br />
             <span>Proizvodni/prodajni asortiman:</span> <br />
             pelet
             <br />
             <span>Godišnji kapacitet:</span>
             7000t
             <br />
             <span>Adresa:</span>
             <br />
             Bistrica bb 31320 Nova Varoš
             <br />
             <span>Kontakt osoba:</span>
             <br />
             Vladimir Stojić
             <br />
             <span>Telefon:</span>
             <br />
             064/640-9077
             <br />
             <span>Email:</span>
             <br />
             omoprom@gmail.com
             <br />
             <span>Web adresa:</span>
             <br />
             <a href="http://www.omoprom.com/" target="_blank">
               http://www.omoprom.com
             </a>
             <br />
             <span>Sertifikat kvaliteta drvne biomase:</span>
             <br />
             Jugoinspekt
           </p>
           {/* <button type="button" className="btn-primary">
      procitajte vise
          </button> */}
         </article>
       </div>
     </section>
     <section id="ZLOSNICA" className={styles.about}>
       {/* <Title title="o" subtitle="nama" /> */}
       <div className={styles.aboutCenter}>
         <article className={styles.aboutImg}>
           <div className={styles.imgContainer}>
             {/* <img src={img} alt="about society" /> */}
             <Img
               fluid={aboutImage20.childImageSharp.fluid}
               alt="about society"
             />
           </div>
         </article>
         <article className={styles.aboutInfo}>
           <h4>sztr ZLOŠNICA</h4>
           <p>
             <span>Delatnost:</span> <br />
             Prerada drveta
             <br />
             <span>Proizvodni/prodajni asortiman:</span> <br />
             pelet
             <br />
             <span>Godišnji kapacitet:</span>
             1000t
             <br />
             <span>Adresa:</span>
             <br />
             Brdo bb 31320 Nova Varoš
             <br />
             <span>Kontakt osoba:</span>
             <br />
             Duško Mandić
             <br />
             <span>Telefon:</span>
             <br />
             065/887-8101
             <br />
             <span>Email:</span>
             <br />
             duskoman84@gmail.com
             <br />
           </p>
           {/* <button type="button" className="btn-primary">
      procitajte vise
          </button> */}
         </article>
       </div>
     </section>
     <section id="DMBBABIC" className={styles.about}>
       {/* <Title title="o" subtitle="nama" /> */}
       <div className={styles.aboutCenter}>
         <article className={styles.aboutImg}>
           <div className={styles.imgContainer}>
             {/* <img src={img} alt="about society" /> */}
             <Img
               fluid={aboutImage21.childImageSharp.fluid}
               alt="about society"
             />
           </div>
         </article>
         <article className={styles.aboutInfo}>
           <h4>DMB “BABIĆ”</h4>
           <p>
             <span>Delatnost:</span> <br />
             Prerada drveta
             <br />
             <span>Proizvodni/prodajni asortiman:</span> <br />
             pelet
             <br />
             <span>Godišnji kapacitet:</span>
             6000t
             <br />
             <span>Adresa:</span>
             <br />
             Brdo bb 31320 Nova Varoš
             <br />
             <span>Kontakt osoba:</span>
             <br />
             Milosav Babić
             <br />
             <span>Telefon:</span>
             <br />
             064/955-2085
             <br />
           </p>
           {/* <button type="button" className="btn-primary">
      procitajte vise
          </button> */}
         </article>
       </div>
     </section>

     <section id="MILPELET" className={styles.about}>
       {/* <Title title="o" subtitle="nama" /> */}
       <div className={styles.aboutCenter}>
         <article className={styles.aboutImg}>
           <div className={styles.imgContainer}>
             {/* <img src={img} alt="about society" /> */}
             <Img
               fluid={aboutImage22.childImageSharp.fluid}
               alt="about society"
             />
           </div>
         </article>
         <article className={styles.aboutInfo}>
           <h4>MIL PELET Priboj</h4>
           <p>
             <span>Delatnost:</span> <br />
             Proizvodnja peleta
             <br />
             <span>Proizvodni/prodajni asortiman:</span> <br />
             pelet u kesama i džamo vrećama
             <br />
             <span>Adresa:</span>
             <br />
             IV Sandžačke brigade 52 31330 Priboj
             <br />
             <span>Kontakt osoba:</span>
             <br />
             Milomir Prijović
             <br />
             <span>Telefon:</span>
             <br />
             033/244 8100, 064/130 99 60
             <br />
           </p>
           {/* <button type="button" className="btn-primary">
      procitajte vise
          </button> */}
         </article>
       </div>
     </section>
     <section id="DZELILOVIC" className={styles.about}>
       {/* <Title title="o" subtitle="nama" /> */}
       <div className={styles.aboutCenter}>
         <article className={styles.aboutImg}>
           {/* <div className={styles.imgContainer}> */}
           {/* <img src={img} alt="about society" /> */}
           {/* <Img */}
           {/* fluid={aboutImage20.childImageSharp.fluid} */}
           {/* alt="about society" */}
           {/* /> */}
           {/* </div> */}
         </article>
         <article className={styles.aboutInfo}>
           <h4>SZTR DŽELILOVIĆ</h4>
           <p>
             <span>Delatnost:</span> <br />
             Uslužno sečenje, cepanje i prodaja ogrevnog drveta
             <br />
             <span>Proizvodni/prodajni asortiman:</span> <br />
             ogrevno drvo cepano
             <br />
             <span>Adresa:</span>
             <br />
             Dragoljuba Savića 50 31330 Priboj
             <br />
             <span>Kontakt osoba:</span>
             <br />
             Fahrudin Dželilović
             <br />
             <span>Telefon:</span>
             <br />
             060/ 352 69 48
             <br />
             <span>Email:</span>
             <br />
             plavipriboj1@gmail.com
             <br />
           </p>
           {/* <button type="button" className="btn-primary">
      procitajte vise
          </button> */}
         </article>
       </div>
     </section>
     <section id="JELASTAR" className={styles.about}>
       {/* <Title title="o" subtitle="nama" /> */}
       <div className={styles.aboutCenter}>
         <article className={styles.aboutImg}>
           <div className={styles.imgContainer}>
             {/* <img src={img} alt="about society" /> */}
             <Img
               fluid={aboutImage23.childImageSharp.fluid}
               alt="about society"
             />
           </div>
         </article>
         <article className={styles.aboutInfo}>
           <h4>JELA STAR d.o.o.</h4>
           <p>
             <span>Delatnost:</span> <br /> Industrijska prerada drveta
             <br />
             <span>Proizvodni/prodajni asortiman:</span> <br /> pelet, briket,
             sečka, cepanica
             <br />
             <span>Godišnji kapacitet:</span> <br /> 50 000t peleta, sečka
             neograničeno
             <br />
             <span>Adresa:</span>
             <br />
             Bjelopoljski put bb 31300 Prijepolje
             <br />
             <span>Kontakt osoba:</span>
             <br />
             Đorđe Ljujić
             <br />
             <span>Telefon:</span>
             <br /> 033/782-777
             <br />
             <span>Email:</span>
             <br />
             info@jelastar.rs
             <br />
             <span>Web adresa:</span>
             <br />
             <a href="http://www.jelastar.rs/" target="_blank">
               http://www.jelastar.rs
             </a>
             <br />
             <span>Sertifikat kvaliteta drvne biomase:</span>
             <br />
             CERTIFICATE ENPLUS 0292-RS002, QM certificate ZORAN STARCIC, QM
             certificate ELMA ROVCANIN, QM certificate BRANKO TABASEVIC
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