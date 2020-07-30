import React from 'react'
import Layout from "../components/Layout"
import StyledHero from '../components/StyledHero'
import { StaticQuery,graphql } from "gatsby"
import Menu from '../components/Home/Menu'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../css/projekat.module.css'
import Title from '../components/Title'

export default function projekat(props) {
  var prevPage = "sve";  
  if (props.location.state !== null && props.location.state !== undefined) {
    prevPage =
      props.location.state.prevPath !== undefined
        ? props.location.state.prevPath
        : "sve"
  }
    
                 return (
                   <StaticQuery
                     query={graphql`
                       query {
                         projectbcg: file(
                           relativePath: {
                             eq: "octavian-dan-b21Ty33CqVs-unsplash.jpg"
                           }
                         ) {
                           childImageSharp {
                             fluid(quality: 90, maxWidth: 4160) {
                               src
                             }
                           }
                         }
                         menu: allContentfulProjectItem {
                           edges {
                             node {
                               slug
                               id
                               title
                               category
                               published(formatString: "DD.MM.YYYY")
                               image {
                                 fluid {
                                   ...GatsbyContentfulFluid
                                 }
                               }
                             }
                           }
                         }
                       }
                     `}
                     render={data => (
                       <Layout>
                         <StyledHero
                           img={data.projectbcg.childImageSharp.fluid}
                         />
                         <Menu items={data.menu} selectedCategory={prevPage} />

                         <section className={styles.about}>
                           <div className={styles.title}>
                             <Title
                               title="vodič za finansiranje"
                               subtitle="bioenergetskih projekata"
                             />
                           </div>                           
                           <div className={styles.aboutCenter}>
                             <article className={styles.aboutInfo}>
                               <h4>Osnovni saveti</h4>
                               <p>
                                 Nekoliko je osnovnih načina na koje je moguće
                                 informisati se o izvorima sredstava, i nekoliko
                                 izvora pomoću kojih možete pravovremeno biti
                                 informisani o raspoloživim i dostupnim
                                 sredstvima za finansiranje projekata i tako
                                 stalno biti u toku:
                               </p>
                               <ul>
                                 <li>
                                   Prelistajte naš
                                   <span> </span>
                                   <a
                                     href="https://downloads.ctfassets.net/oyhajly20a7m/7fbYzW4ge2GazA2r9UsHk3/91dd98ef91a629ec8cd1cc473dff5f0a/Prirucnik_za_trenere_priprema_projekata.pdf"
                                     target="_blank"
                                   >
                                     vodič
                                   </a>
                                   <span> </span> – potrudili smo se da u njega
                                   ubacimo sve relevantne izvore finansiranja,
                                   tako da na jednom mestu damo pregled svega
                                   onoga što može biti relevantno. Pored
                                   pregleda raspoloživih izvora finansiranja i
                                   javnih poziva za finansiranje projekata,
                                   sadrži i okvirni kalendar dešavanja i linkove
                                   za svaki pojedinačni program koji vam mogu
                                   koristiti, a koje treba pratiti redovno, jer
                                   se informacije često ažuriraju.
                                 </li>
                                 <li>
                                   SIPRU vodič – ovaj vodič je jedna od
                                   obuhvatnijih lista svih donatora u Srbiji, i
                                   u njemu svako može da pronađe nešto za sebe.
                                   Dostupan je na adresi{" "}
                                   <a
                                     href="http://www.socijalnoukljucivanje.gov.rs/vodic/vodic2015.html"
                                     target="_blank"
                                   >
                                     socijalnoukljucivanje.gov.rs/vodic/vodic2015
                                   </a>
                                   .
                                 </li>
                                 <li>
                                   Vodič kroz potencijalne izvore finansiranja
                                   Građanskih inicijativa – dostupan na adresi{" "}
                                   <a
                                     href="https://vodic.gradjanske.org/"
                                     target="_blank"
                                   >
                                     vodic.gradjanske.org
                                   </a>
                                 </li>
                                 <li>
                                   Ministarstva – redovno posećujte sajtove
                                   ministarstava koji se bave sektorima koji vas
                                   zanimaju. Posle nekog vremena biste mogli da
                                   uvidite da li postoje određeni periodi kada
                                   se otvaraju konkursi i da vam ovaj vid
                                   informisanja postane još jednostavniji.
                                 </li>
                                 <li>
                                   Pokrajinski sekretarijati – ukoliko je vaša
                                   organizacije registrovana i deluje u
                                   Vojvodini pratite pokrajinske sekretarijate
                                   relevantne za vaš sektor jer se svake godine
                                   određena količina novca izdvaja za projekte.
                                   Kao i sa ministarstvima, s vremena ne vreme
                                   posetite njihove sajtove.
                                 </li>
                                 <li>
                                   Kancelarija za saradnju sa civilnim društvom
                                   – pored konkursa i izvora finansiranja na
                                   internet prezentaciji Kancelarije otkrićete
                                   dosta korisnih informacija i linkova.
                                   <br />
                                   <a
                                     href="https://www.civilnodrustvo.gov.rs"
                                     target="_blank"
                                   >
                                     Pogledati za više.
                                   </a>
                                 </li>
                                 <li>
                                   Ministarstvo za evropske integracije –
                                   ukoliko želite da aplicirate sa svojim
                                   projektom na neki od EU fondova krenite sa
                                   informisanjem odavde. Tu ćete naći dosta
                                   korisnih linkova koji će vas odvesti dalje.
                                   <br />
                                   <a
                                     href="https://www.mei.gov.rs/"
                                     target="_blank"
                                   >
                                     Pogledati za više.
                                   </a>
                                 </li>
                               </ul>
                               <hr />
                               <h4>Najčešća pitanja i odgovori</h4>
                               <p>
                                 <span>
                                   1. Koji program ili izvor finansiranja je
                                   odgovarajući za konkretan projekat?
                                 </span>
                               </p>
                               <p>
                                 Svaki pojedinačni projekat nosi sa sobom niz
                                 specifičnosti. Pri odabiru konkretnog izvora
                                 finansiranja, morate imate u vidu specifičnosti
                                 sopstvenog projekta i prema tome se opredeliti.
                                 Pokušajte da date odgovore na nekoliko ključnih
                                 pitanja za identifikaciju relevantnog
                                 “finansijskog alata”:
                               </p>
                               <ul>
                                 <li>
                                   Da li organizacija iz Srbije može učestvovati
                                   u konkretnom programu/projektu i da li joj je
                                   dozvoljeno učešće u svojstvu vodeće
                                   organizacije ili samo kao partneru na
                                   projektu?
                                 </li>
                                 <li>
                                   Da li je organizacija / preduzeće “eligible”
                                   za dati program ili izvor finansiranja u
                                   smislu načina organizovanja i njenog pravnog
                                   statusa?
                                 </li>
                                 <li>
                                   Da li su konkretne projektne aktivnosti
                                   organizacije / preduzeća “eligible”?
                                 </li>
                                 <li>
                                   Kakav je vremenski okvir apliciranja i
                                   realizacije i kako se to uklapa u dinamiku
                                   konkretnog projekta?
                                 </li>
                                 <li>
                                   Koji tip finansijske pomoći se može dobiti,
                                   i/ili u kojem iznosu, kolika je stopa
                                   sopstvenog učešća?
                                 </li>
                               </ul>
                               <p>
                                 <span>
                                   2. Koliko je vremena potrebno za dobijanje
                                   sredstava?
                                 </span>
                               </p>
                               <p>
                                 Svaki projekat ima neku sopstvenu dinamiku. Za
                                 implementaciju projekta vrlo je važno na vreme
                                 znati u kom roku se sredstva odobravaju. Zato
                                 je neophodno obavezno proveriti dinamiku
                                 evaluacije prijava za konkretni program, kao i
                                 maksimalno/minimalno dozvoljeno trajanje
                                 projektnih aktivnosti i kako se to uklapa sa
                                 dinamikom razvoja projekta.
                               </p>
                               <p>
                                 <span>
                                   3. Kakva finansijska sredstva su na
                                   raspolaganju i u čemu je osnovna razlika?
                                 </span>
                               </p>
                               <p>
                                 Osnovna podela finansijskih izvora mogla bi se
                                 napraviti na komercijalna i nekomercijalna
                                 sredstva. Komercijalna sredstva odobravaju
                                 komercijalne banke. U našoj zemlji sledeće
                                 banke imaju kreditne linije za projekte
                                 bioenergije: Erste Bank a.d. Novi Sad,
                                 UniCredit Bank Srbija a.d., ProCredit Bank a.d.
                                 Beograd, Sberbank Srbija a.d., Komercijalna
                                 banka a.d. Beograd. Ova sredstva su dostupnija
                                 u smislu dinamike, a procedure nisu tako duge i
                                 komplikovane kao kod nekomercijalnih izvora
                                 finansiranja. Međutim, ova sredstva imaju svoju
                                 cenu (kamate), a uglavnom je neophodno dati i
                                 značajna sredstva obezbeđenja.
                               </p>
                               <p>
                                 Nekomercijalna sredstva su subvencionisani
                                 krediti i grantovi domaćih i inostranih
                                 programa i što se cene tiče, uglavnom su
                                 povoljnija od komercijalnih, ali dinamika
                                 njihovog odobravanja, kao i procedure mogu biti
                                 značajna prepreka u smislu vremenskog trajanja
                                 i obima neophodne dokumentacije.
                               </p>
                               <p>
                                 <span>
                                   4. Da li se opredeliti za domaće ili
                                   internacionalne izvore finansiranja?
                                 </span>
                               </p>
                               <p>
                                 Odgovor na ovo pitanje zavisi od svakog
                                 konkretnog projekta, njegovog nosioca i
                                 neophodnog budžeta. Kod domaćih izvora
                                 finansiranja, procedure su, po pravilu nešto
                                 jednostavnije. Inostrani izvori finansiranja su
                                 brojniji, često je moguće dobiti značajno veća
                                 sredstva, ali su procedure dugotrajnije i
                                 komplikovanije, a uglavnom se sprovode na
                                 engleskom jeziku. Od domaćih izvora
                                 finansiranja najznačajniji su Budžetski fond za
                                 unapređenje energetske efikasnosti, Kancelarija
                                 za upravljanje javnim ulaganjima, odnosno za
                                 organizacije sa teritorije AP Vojvodine -
                                 Uprava za kapitalna ulaganja. Sredstva iz
                                 domaćih izvora uglavnom su nepovratna – grant.
                               </p>
                               <p>
                                 Najznačajniji internacionalni izvori
                                 finansiranja bioenergetskih projekata su
                                 Evropska investiciona banka (EIB), Razvojna
                                 banka Saveta Evrope (CEB), Razvojna banka KfW,
                                 Investicioni okvir za zapadni Balkan (WBIF) i
                                 donatorski programi EU. U slučaju banaka,
                                 sredstva koja se mogu dobiti su značajna, ali
                                 su uglavnom u formi kredita, a same procedure
                                 mogu biti dugotrajne i komplikovane. U slučaju
                                 donatorskih programa, situacija je od programa
                                 do programa različita, sredstva su uglavnom
                                 nepovratna, ali se sredstva dodeljuju po javnim
                                 pozivima koji imaju svoju dinamiku, kao i
                                 specifične ciljeve i prioritete, koji ne moraju
                                 nužno da se poklapaju sa konkretnim projektom.
                               </p>
                               <p>
                                 <span>
                                   5. Povratna ili nepovratna sredstva?
                                 </span>
                               </p>
                               <p>
                                 Sa aspekta troškova realizacije projekta,
                                 svakako je povoljnije, ukoliko je moguće,
                                 obezbediti grant (nepovratna sredstva).
                                 Međutim, grantovi se dodeljuju, uglavnom, po
                                 javnim pozivima za finansiranje projekata, koji
                                 su vremenski određeni (nisu stalno na
                                 raspolaganju) i uvek imaju svoje specifične
                                 zahteve i ciljeve, kojima nije uvek jednostavno
                                 odgovoriti. Takođe, za dobijanje grantova
                                 neophodno je obezbediti i sopstveno učešće, kao
                                 i sredstva za tzv. prefinansiranje (neophodno
                                 je sopstvenim sredstvima izfinansirati
                                 projekat, a tek po njegovom okončanju donator
                                 uplaćuje sredstva), što u mnogim slučajevima
                                 može iziskivati dodatne troškove i napore.
                                 Drugim rečima, ni nepovratna sredstva nisu baš
                                 besplatna, pa bi sve to trebalo imati u vidu
                                 pre donošenja odluke za koju vrstu izvora
                                 finansiranja se opredeliti.
                               </p>
                               <p>
                                 <span>
                                   6. Koji je osnovni uslov za dobijanje
                                   sredstava za finansiranje projekta
                                 </span>
                               </p>
                               <p>
                                 Bez obzira za koji izvor finansiranja ćete se
                                 opredeliti, skoro svi imaju jedan nužan i
                                 neophodan uslov – postojanje tehničke
                                 dokumentacije. Ovo podrazumeva, uglavnom,
                                 postojanje kompletne dokumentacije do nivoa
                                 dozvole za gradnju. Zbog toga, kada se planira
                                 realizacija nekog projekta, neophodno je na
                                 vreme pripremiti svu potrebnu tehničku
                                 dokumentaciju, što uključuje i rešavanje
                                 imovinskih odnosa i obezbeđenje svih neophodnih
                                 dozvola.
                               </p>
                               <p>
                                 <span>
                                   7. Najznačajniji izvori finansiranja za JLS
                                 </span>
                               </p>
                               <p>
                                 Najznačajniji izvori finansiranja
                                 bioenergetskih projekata za jedinice lokalne
                                 samouprave su:
                               </p>
                               <p>Domaći izvori:</p>
                               <ul>
                                 <li>
                                   Budžetski fond za unapređenje energetske
                                   efikasnosti
                                 </li>
                                 <li>
                                   Kancelarija za upravljanje javnim ulaganjima
                                 </li>
                                 <li>
                                   AP Vojvodina - Uprava za kapitalna ulaganja
                                 </li>
                                 <li>Program EU Pro</li>
                                 <li>
                                   Projekat “Podrška Kraljevine Norveške razvoju
                                   Zapadnog Balkana - Norveška za vas”
                                 </li>
                                 <li>Telenor Fondacija</li>
                               </ul>
                               <p>Međunarodni izvori:</p>
                               <ul>
                                 <li>Evropska investiciona banka (EIB)</li>
                                 <li>ELENA</li>
                                 <li>
                                   Evropski fond za strateška ulaganja (EFSI)
                                 </li>
                                 <li>Razvojna banka Saveta Evrope (CEB)</li>
                                 <li>Razvojna banka KfW</li>
                                 <li>
                                   Investicioni okvir za zapadni Balkan (WBIF)
                                 </li>
                                 <li>LIFE Program</li>
                                 <li>Evropska klimatska inicijativa (EUKI)</li>
                                 <li>Horizon 2020</li>
                                 <li>Grantovi EEA i Norveške</li>
                                 <li>Dunavski transnacionalni program (DTP)</li>
                                 <li>
                                   Jadransko-jonski transnacionalni program
                                   (ADRION)
                                 </li>
                                 <li>Programi prekogranične saradnje</li>
                               </ul>
                               <p>
                                 Za detalje o svim ovim izvorima finansiranja
                                 pogledajte vodič
                                 <span> </span>
                                 <a
                                   href="https://assets.ctfassets.net/oyhajly20a7m/7m3rhwfqVSq46OvkwgV3xd/38b57d7eefd0e8b714f41f7662745b72/Izvori_finansiranja_bioenergetskih_projekata_za_javni_sektor_final.pdf"
                                   target="_blank"
                                 >
                                   „Izvori finansiranja bioenergetskih projekata
                                   za javni sektor“
                                 </a>
                                 <span> </span>u kome možete pronaći detaljne
                                 informacije o svakom od njih.
                               </p>
                               <p>
                                 <span>
                                   8. Najznačajniji izvori finansiranja za
                                   biznis sektor
                                 </span>
                               </p>
                               <p>
                                 Najznačajniji izvori finansiranja
                                 bioenergetskih projekata za biznis sektor su:
                               </p>
                               <p>Domaći izvori:</p>
                               <ul>
                                 <li>Garancijski fond Vojvodine</li>
                                 <li>EU Pro Program</li>
                               </ul>
                               <p>Međunarodni izvori:</p>
                               <ul>
                                 <li>Evropska investiciona banka (EIB)</li>
                                 <li>ELENA</li>
                                 <li>
                                   Evropski fond za strateška ulaganja (EFSI)
                                 </li>
                                 <li>Razvojna banka Saveta Evrope (CEB)</li>
                                 <li>
                                   Investicioni okvir za zapadni Balkan (WBIF)
                                 </li>
                                 <li>LIFE Program</li>
                                 <li>Horizon 2020</li>
                                 <li>Grantovi EEA i Norveške</li>
                               </ul>
                               <p>
                                 Za detalje o svim ovim izvorima finansiranja
                                 pogledajte vodič
                                 <span> </span>
                                 <a
                                   href="https://assets.ctfassets.net/oyhajly20a7m/1zF31IFJTHxwbqY3danarc/78f0b3b0f86b11cbeffc071633afb4cf/Izvori_finansiranja_bioenergetskih_projekata_za_biznis_sektor_final.pdf"
                                   target="_blank"
                                 >
                                   „Izvori finansiranja bioenergetskih projekata
                                   za biznis sektor“
                                 </a>
                                 <span> </span>u kome možete pronaći detaljne
                                 informacije o svakom od njih.
                               </p>
                               <p>
                                 <span>
                                   9. Najznačajniji izvori finansiranja za
                                   organizacije civilnog društva
                                 </span>
                               </p>
                               <p>
                                 Najznačajniji izvori finansiranja
                                 bioenergetskih projekata za organizacije
                                 civilnog društva su:
                               </p>
                               <p>Domaći izvori:</p>
                               <ul>
                                 <li>EU Pro</li>
                                 <li>Telenor Fondacija</li>
                               </ul>
                               <p>Međunarodni izvori:</p>
                               <ul>
                                 <li>LIFE Program</li>
                                 <li>Evropska klimatska inicijativa (EUKI)</li>
                                 <li>Horizon 2020</li>
                                 <li>Grantovi EEA i Norveške</li>
                                 <li>Dunavski transnacionalni program (DTP)</li>
                                 <li>
                                   Jadransko-jonski transnacionalni program
                                   (ADRION)
                                 </li>
                                 <li>Programi prekogranične saradnje</li>
                               </ul>
                               <p>
                                 Za detalje o svim ovim izvorima finansiranja
                                 pogledajte vodič
                                 <span> </span>
                                 <a
                                   href="https://assets.ctfassets.net/oyhajly20a7m/5PbtIiRdJFuIMt66o3tpWJ/5d1926aee0da166379a5d740a8e27d9f/Izvori_finansiranja_bioenergetskih_projekata_za_civilni_sektor_final.pdf"
                                   target="_blank"
                                 >
                                   „Izvori finansiranja bioenergetskih projekata
                                   za civilni sektor“
                                 </a>
                                 <span> </span>u kome možete pronaći detaljne
                                 informacije o svakom od njih.
                               </p>
                               <p>
                                 Sve relevantne dokumente možete pogledati na
                                 strani
                                 <span> </span>
                                 <a href="https://energetskiodrzivregion.rrazlatibor.rs/publikacije">
                                   Publikacije.
                                 </a>
                                 <span> </span>
                               </p>
                             </article>
                           </div>
                         </section>                         
                       </Layout>
                     )}
                   />
                 )
               }

