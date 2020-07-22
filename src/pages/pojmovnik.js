import React from 'react'
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import styles from '../css/pojmovnik.module.css'
const pojmovnik = ({data}) => {
 return (
  <Layout>
   <StyledHero img={data.blogBcg.childImageSharp.fluid} />
   <section className={styles.about}>
    <div className={styles.aboutCenter}>
     <article className={styles.aboutInfo}>
      {/* A */}
      <h4>A</h4>
      <p><span>Akumulator toplote</span> je uređaj odnosno termički izolovano telo koje akumulira toplotu
        proizvedenu u grejnom telu i koristi se da obezbedi optimalni režim rada grejnog sistema
        u zadatim izlaznim parametrima.</p>
        <hr/>
        {/* B */}
      <h4>B</h4>
      <p><span>Balansna odgovornost na tržištu prirodnog gasa</span> je obaveza učesnika na
      tržištu da uravnoteže količinu prirodnog gasa na ulazu u sistem i izlazu iz
      sistema u periodu za koji se utvrđuje balansno odstupanje i preuzmu 
      finansijsku odgovornost za odstupanja.</p>
      <p><span>Balansna odgovornost na tržištu električne energije</span> je obaveza učesnika
      na tržištu da uravnoteže proizvodnju, potrošnju i ugovorenu
      kupovinu i prodaju električne energije u periodu za koji se utvrđuje balansno 
      odstupanje i preuzmu finansijsku odgovornost za odstupanja.</p>
      <p><span>Biomasa</span> je biorazgradivi deo proizvoda, otpada i ostataka biološkog porekla iz polјoprivrede (uklјučujući bilјne i životinjske materije),
      šumarstva i povezanih industrija, kao i biorazgradivi deo industrijskog i komunalnog otpada</p>
      <p><span>Bioenergija</span> je svaki vid energije koji se dobija iz energenata koji su biološkog
      porekla, odnosno energija dobijena iz čvrstih, tečnih i gasovitih proizvoda biomase.</p>
      <p><span>Biogas</span> je gasovito gorivo nastalo od biomase i/ili biorazgradive frakcije
otpada. Može da se prečisti do kvaliteta prirodnog gasa i koji
će se koristiti kao biogorivo.</p>
      <p><span>Bioenergetski projekti</span> su, u najširem smislu, projekti koji se bave proizvod-
njom energije iz biorazgradivih komponenti.</p>
      <p><span>Biorazgradivi otpad</span> je bilo koji otpad koji se može podvrgnuti razgradnji, u
prisustvu (aerobno) bez prisustva (anaerobno) vazduha.</p>
      <p><span>Biogorivo</span> su tečna ili gasovita goriva, proizvedena iz biomase.</p>
      <p><span>Biogasno postrojenje</span> je postrojenje u kome se putem fermentacije biomase
proizvodi biogas. U biogasnim postrojenjima se vrši digestija
komunalnog i industrijskog biootpada, stajnjaka, drugih osta-
taka od polјoprivrede, kao i energetskih bilјnih kultura. Pored
ovoga, biogas se može dobiti i iz postrojenja na bazi gasa dobijenog
 sa deponija i iz kanalizacionih sistema. U opštem smislu,
to je smeša različih gasova (uglјen-dioksida i metana) nastala
razgradnjom organskih materija bez prisustva kiseonika. Sastav biogasa varira u zavisnosti od porekla procesa anaerobne
digestije (sastava ulazne šarže). U širem smislu, izraz biogasno
postrojenje se koristi za skup objekata u kojima se proizvodi
biogas.</p>
      <p><span>Briket</span> (agro i drvni) su usitnjene i pod pritiskom kompaktirane forme energetskih bilјnih kultura ili/i drvnog materijala, najčešće u obliku cilindara prečnika 60, 70 i više milimetara i dužine oko 30
centimetara. Pogodan je za individualna ložišta.</p>
      <p><span>Bruto Finalna Potrošnja Energije (BFPE)</span> je, u smislu Zakona o energetici,
ukupna finalna energija potrošena za energetske svrhe u industriji, transportu, domaćinstvima, javnim i komercijalnim
delatnostima, polјoprivredi, šumarstvu i ribarstvu, uklјučujući sopstvenu potrošnju električne i toplotne energije u sektoru
proizvodnje električne i toplotne energije i gubitke u prenosu i
distribuciji električne i toplotne energije.</p>
<hr/>
{/* C */}
      <h4>C</h4>
      <p><span>Cirkulaciona pumpa</span> je mašinski ili elektromašinski uređaj koji obezbeđuje
konstantnu cirkulaciju grejnog fluida kroz toplovodnu mrežu.</p>
<hr/>
{/* D */}
      <h4>D</h4>
      <p><span>Digestija</span> je proces fermentacije bez prisustva vazduha u kome mikrobi
razgrađuju otpad, usled čega se proizvodi biogas.</p>
      <p><span>Digestat</span>  je čvrsti nusprodukt digestije. Koristi se u polјoprivredi kao đubrivo.</p>
      <p><span>Digestor</span> je uređaj u kojoj se odigrava digestija.</p>
      <p><span>Distribucija energije</span> je sistem lјudskih aktivnosti koje imaju za cilј usmeravanje i prenos energije do krajnjih korisnika uklјučujući i
fizički prevoz energenata primarne energije (uglјa, sirove nafte
ili drugih energenata).</p>
      <p><span>Distributivna mreža</span>  za priklјučenje manjih proizvođača električne energije
je funkcionalno povezan skup elektroenergetskih objekata u
kojoj je priklјučenje objekata kupca i manjih proizvođača električne energije tehnički i pravno moguće.</p>
      <p><span>Distributivna toplovodna mreža</span> je hijararhijski uređen sistem cevovoda i
merno regulacionih uređaja koji povezuje proizvodni izvor i
krajnjeg korisnika.</p>
      <p><span>Drvna sečka</span> je mašinski usitnjen drvenasti materijal, odnosno, najčešće
to usitnjeno ogrevno drvo, krupni i sitni šumski ostaci, drvni
ostaci iz procesa prerade drveta i slično. Usled svoje forme, prikladna je kao gorivo za velike sisteme (toplane i kogeneracijska
postrojenja) zbog mogućnosti automatskog punjenja ložišta.</p>
      <p><span>Dekarbonizacija</span> kao pojam koji se koristi u energetici odnosi se na smanjenje intenziteta procesa u smislu emisije uglјenika, odnosno
smanjenje emisije ugljenika po jedinici proizvedene električne
energije, najčešće izraženo u gramima ugljen-dioksida po kilovat-času (gCO2/kWh). U širem smislu, dekarbonizacija znači
smanjenje emisije gasova staklene bašte nastalih kao posledice
ljudskih aktivnosti, prelaskom na procese sa manjom ili nikakvom emisijom ugljenika.</p>
<hr/>
{/* E */}
     </article>
    </div>
   </section>
  </Layout>
 )
}

export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "aaron-burden-fgmf2Eyrwm4-unsplash.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default pojmovnik
