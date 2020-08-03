import React from 'react'
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import styles from '../css/pojmovnik.module.css'
import Title from '../components/Title'
import BiomasAbout from "../components/NavbarBiomasa"
import {Link} from "gatsby"

const pojmovnik = ({data}) => {
 return (
   <Layout>
     <StyledHero img={data.blogBcg.childImageSharp.fluid} />
     <BiomasAbout />
     <div className={styles.title}>
       <Title title="pojmovnik" subtitle="termina" />
     </div>
     <div className={styles.letters}>
       <span>
         <h4>
           <Link to="/pojmovnik#A">A</Link>
         </h4>
       </span>
       <span>
         <h4>
           <Link to="/pojmovnik#B">B</Link>
         </h4>
       </span>
       <span>
         <h4>
           <Link to="/pojmovnik#C">C</Link>
         </h4>
       </span>
       <span>
         <h4>
           <Link to="/pojmovnik#D">D</Link>
         </h4>
       </span>
       <span>
         <h4>
           <Link to="/pojmovnik#E">E</Link>
         </h4>
       </span>
       <span>
         <h4>
           <Link to="/pojmovnik#F">F</Link>
         </h4>
       </span>
       <span>
         <h4>
           <Link to="/pojmovnik#G">G</Link>
         </h4>
       </span>
       <span>
         <h4>
           <Link to="/pojmovnik#I">I</Link>
         </h4>
       </span>
       <span>
         <h4>
           <Link to="/pojmovnik#J">J</Link>
         </h4>
       </span>
       <span>
         <h4>
           <Link to="/pojmovnik#K">K</Link>
         </h4>
       </span>
       <span>
         <h4>
           <Link to="/pojmovnik#L">L</Link>
         </h4>
       </span>
       <span>
         <h4>
           <Link to="/pojmovnik#M">M</Link>
         </h4>
       </span>
       <span>
         <h4>
           <Link to="/pojmovnik#N">N</Link>
         </h4>
       </span>
       <span>
         <h4>
           <Link to="/pojmovnik#O">O</Link>
         </h4>
       </span>
       <span>
         <h4>
           <Link to="/pojmovnik#P">P</Link>
         </h4>
       </span>
       <span>
         <h4>
           <Link to="/pojmovnik#R">R</Link>
         </h4>
       </span>
       <span>
         <h4>
           <Link to="/pojmovnik#S">S</Link>
         </h4>
       </span>
       <span>
         <h4>
           <Link to="/pojmovnik#T">T</Link>
         </h4>
       </span>
       <span>
         <h4>
           <Link to="/pojmovnik#U">U</Link>
         </h4>
       </span>
       <span>
         <h4>
           <Link to="/pojmovnik#V">V</Link>
         </h4>
       </span>
     </div>
     <section className={styles.about}>
       <div className={styles.aboutCenter}>
         <article className={styles.aboutInfo}>
           {/* A */}
           <h4 id="A">A</h4>
           <p>
             <span>Akumulator toplote</span> je uređaj odnosno termički
             izolovano telo koje akumulira toplotu proizvedenu u grejnom telu i
             koristi se da obezbedi optimalni režim rada grejnog sistema u
             zadatim izlaznim parametrima.
           </p>
           <hr />
           {/* B */}
           <h4 id="B">B</h4>
           <p>
             <span>Balansna odgovornost na tržištu prirodnog gasa</span> je
             obaveza učesnika na tržištu da uravnoteže količinu prirodnog gasa
             na ulazu u sistem i izlazu iz sistema u periodu za koji se utvrđuje
             balansno odstupanje i preuzmu finansijsku odgovornost za
             odstupanja.
           </p>
           <p>
             <span>Balansna odgovornost na tržištu električne energije</span> je
             obaveza učesnika na tržištu da uravnoteže proizvodnju, potrošnju i
             ugovorenu kupovinu i prodaju električne energije u periodu za koji
             se utvrđuje balansno odstupanje i preuzmu finansijsku odgovornost
             za odstupanja.
           </p>
           <p>
             <span>Biomasa</span> je biorazgradivi deo proizvoda, otpada i
             ostataka biološkog porekla iz polјoprivrede (uklјučujući bilјne i
             životinjske materije), šumarstva i povezanih industrija, kao i
             biorazgradivi deo industrijskog i komunalnog otpada.
           </p>
           <p>
             <span>Bioenergija</span> je svaki vid energije koji se dobija iz
             energenata koji su biološkog porekla, odnosno energija dobijena iz
             čvrstih, tečnih i gasovitih proizvoda biomase.
           </p>
           <p>
             <span>Biogas</span> je gasovito gorivo nastalo od biomase i/ili
             biorazgradive frakcije otpada. Može da se prečisti do kvaliteta
             prirodnog gasa i koji će se koristiti kao biogorivo.
           </p>
           <p>
             <span>Bioenergetski projekti</span> su, u najširem smislu, projekti
             koji se bave proizvod- njom energije iz biorazgradivih komponenti.
           </p>
           <p>
             <span>Biorazgradivi otpad</span> je bilo koji otpad koji se može
             podvrgnuti razgradnji, u prisustvu (aerobno) bez prisustva
             (anaerobno) vazduha.
           </p>
           <p>
             <span>Biogorivo</span> su tečna ili gasovita goriva, proizvedena iz
             biomase.
           </p>
           <p>
             <span>Biogasno postrojenje</span> je postrojenje u kome se putem
             fermentacije biomase proizvodi biogas. U biogasnim postrojenjima se
             vrši digestija komunalnog i industrijskog biootpada, stajnjaka,
             drugih osta- taka od polјoprivrede, kao i energetskih bilјnih
             kultura. Pored ovoga, biogas se može dobiti i iz postrojenja na
             bazi gasa dobijenog sa deponija i iz kanalizacionih sistema. U
             opštem smislu, to je smeša različih gasova (uglјen-dioksida i
             metana) nastala razgradnjom organskih materija bez prisustva
             kiseonika. Sastav biogasa varira u zavisnosti od porekla procesa
             anaerobne digestije (sastava ulazne šarže). U širem smislu, izraz
             biogasno postrojenje se koristi za skup objekata u kojima se
             proizvodi biogas.
           </p>
           <p>
             <span>Briket</span> (agro i drvni) su usitnjene i pod pritiskom
             kompaktirane forme energetskih bilјnih kultura ili/i drvnog
             materijala, najčešće u obliku cilindara prečnika 60, 70 i više
             milimetara i dužine oko 30 centimetara. Pogodan je za individualna
             ložišta.
           </p>
           <p>
             <span>Bruto Finalna Potrošnja Energije (BFPE)</span> je, u smislu
             Zakona o energetici, ukupna finalna energija potrošena za
             energetske svrhe u industriji, transportu, domaćinstvima, javnim i
             komercijalnim delatnostima, polјoprivredi, šumarstvu i ribarstvu,
             uklјučujući sopstvenu potrošnju električne i toplotne energije u
             sektoru proizvodnje električne i toplotne energije i gubitke u
             prenosu i distribuciji električne i toplotne energije.
           </p>
           <hr />
           {/* C */}
           <h4 id="C">C</h4>
           <p>
             <span>Cirkulaciona pumpa</span> je mašinski ili elektromašinski
             uređaj koji obezbeđuje konstantnu cirkulaciju grejnog fluida kroz
             toplovodnu mrežu.
           </p>
           <hr />
           {/* D */}
           <h4 id="D">D</h4>
           <p>
             <span>Digestija</span> je proces fermentacije bez prisustva vazduha
             u kome mikrobi razgrađuju otpad, usled čega se proizvodi biogas.
           </p>
           <p>
             <span>Digestat</span> je čvrsti nusprodukt digestije. Koristi se u
             polјoprivredi kao đubrivo.
           </p>
           <p>
             <span>Digestor</span> je uređaj u kojoj se odigrava digestija.
           </p>
           <p>
             <span>Distribucija energije</span> je sistem lјudskih aktivnosti
             koje imaju za cilј usmeravanje i prenos energije do krajnjih
             korisnika uklјučujući i fizički prevoz energenata primarne energije
             (uglјa, sirove nafte ili drugih energenata).
           </p>
           <p>
             <span>Distributivna mreža</span> za priklјučenje manjih proizvođača
             električne energije je funkcionalno povezan skup elektroenergetskih
             objekata u kojoj je priklјučenje objekata kupca i manjih
             proizvođača električne energije tehnički i pravno moguće.
           </p>
           <p>
             <span>Distributivna toplovodna mreža</span> je hijararhijski uređen
             sistem cevovoda i merno regulacionih uređaja koji povezuje
             proizvodni izvor i krajnjeg korisnika.
           </p>
           <p>
             <span>Drvna sečka</span> je mašinski usitnjen drvenasti materijal,
             odnosno, najčešće to usitnjeno ogrevno drvo, krupni i sitni šumski
             ostaci, drvni ostaci iz procesa prerade drveta i slično. Usled
             svoje forme, prikladna je kao gorivo za velike sisteme (toplane i
             kogeneracijska postrojenja) zbog mogućnosti automatskog punjenja
             ložišta.
           </p>
           <p>
             <span>Dekarbonizacija</span> kao pojam koji se koristi u energetici
             odnosi se na smanjenje intenziteta procesa u smislu emisije
             uglјenika, odnosno smanjenje emisije ugljenika po jedinici
             proizvedene električne energije, najčešće izraženo u gramima
             ugljen-dioksida po kilovat-času (gCO2/kWh). U širem smislu,
             dekarbonizacija znači smanjenje emisije gasova staklene bašte
             nastalih kao posledice ljudskih aktivnosti, prelaskom na procese sa
             manjom ili nikakvom emisijom ugljenika.
           </p>
           <hr />
           {/* E */}
           <h4 id="E">E</h4>
           <p>
             <span>Energenti</span> su materijali i supstance iz kojih se dobija
             energija: ugalј, prirodni gas, nafta, derivati nafte, ulјni
             škrilјci, obnovlјivi i drugi izvori energije.
           </p>
           <p>
             <span>Energetski bilans</span> je dokument koji pokazuje sliku o
             energetskom sektoru koja je realizovana u prethodnoj godini,
             procenjuju potrebe za tekuću godinu i daje plan za narednu godinu.
           </p>
           <p>
             <span>Energija biomase</span> je energija koja se odgovarajućim
             fizičkim ili hemijskim procesom oslobađa iz raznih organskih
             materija. Najčešće, to je kontrolisano sagorevanje biomase iz čega
             se dobijenom toplotom zagreva voda u kotlovima i koristi za
             grejanje objekata, ili se dobijena para koristi za generisanje
             električne energije. Osim toga, energija biomase može se izdvojiti
             i njenim prevođenjem u gorivi gas.
           </p>
           <p>
             <span>Energija biogasa</span> je energija dobijena procesom
             sagorevanja biogasa.
           </p>
           <p>
             <span>Energetske bilјne kulture</span> su bilјne kulture koje u
             procesima konverzije transformišu u druge vidove energije.
             Karakteriše ih visoka kalorična vrednost i/ili brz rast, čime se
             kroz procese eksploatacije dobija isplativ prinos energije. Mogu se
             podeliti na lignocelulozne, ulјane, šećerne i skrobne energetske
             kulture, i danas se u svetu u ove svrhe gaji oko 80 bilјnih
             kultura.
           </p>
           <p>
             <span>Energetski objekti</span> su objekti koji su u funkciji
             proizvodnje ili distribucije energije. U širem smislu termina, svi
             objekti u kojima se vrši neki vid konverzije energije se mogu
             smatrati energetskim objektima.
           </p>
           <p>
             <span>Energetska politika</span> je način na koji neki entitet
             (država, kompanija, region ili bilo koji sistem prostorno,
             ekonomski ili politički povezanih jedinica) rešava pitanja
             energetskog razvoja, uklјučujući proizvodnju, distribuciju i
             potrošnju energije.
           </p>
           <p>
             <span>Energetski razred</span> objekta određuje se na osnovu
             maksimalne dozvolјene godišnje potrebne finalne energije za
             grejanje (kWh/m2). Energetski razredi su definisan propisom.
           </p>
           <p>
             <span>Energetski subjekt</span> je pravno lice, odnosno
             preduzetnik, koje obavlјa jednu ili više energetskih delatnosti
             definisanih u Zakonu o energetici.
           </p>
           <p>
             <span>Energetski pasoš</span> je dokument koji sadrži izračunate
             vrednosti potrošnje energije u okviru određene kategorije zgrada,
             energetski razred i preporuke za pobolјšanje energetskih svojstava
             zgrade.
           </p>
           <p>
             <span>Elektrane</span> su postrojenja ili funkcionalno povezane
             grupe postrojenja i objekata u kojima se primarni oblici energije
             prevode u električnu energiju.
           </p>
           <p>
             <span>Evropska energetska povelјa</span> iz 1991. godine je sažet
             izraz načela na kojima treba da se zasniva međunarodna energetska
             saradnja, zasnovana na zajedničkom interesu za sigurno snabdevanje
             energijom i održivi ekonomski razvoj.
           </p>
           <p>
             <span>Energetska zavisnost</span> je zavisnost objekta, grada,
             jedne ili više zemalјa, teritorije, regiona ili teritorijalnog
             saveza od energetskih resursa van sopstvenih granica ili domašaja.
           </p>
           <p>
             <span>
               Energetska zajednica (raniji naziv Energetska zajednica
               jugoistočne Evrope)
             </span>{" "}
             je organizacija međunarodne saradnje Evropske unije (EU) i trećih
             zemalјa radi širenja unutrašnjeg energetskog tržišta EU na
             jugoistočnu Evropu i šire.
           </p>
           <p>
             <span>Energetska statistika</span> pruža informacije o snabdevanju,
             trgovini, zalihama, transformaciji i potrošnji energije/energenata.
             Republički zavod za statistiku Srbije održava bazu podataka o
             energetskim bilansima za električnu energiju, toplotnu energiju,
             visoko-pećni gas, ugalј, naftu i derivate nafte, prirodni gas,
             geotermalnu energiju, drvna goriva, biogas, i industrijski otpad.
           </p>
           <p>
             <span>Energetski indikatori</span> su kvantitativni pokazatelјi
             energetskih karakteristika nekog sistema i mogu se iskoristiti za
             praćenje promena njegovih performansi u vremenu. Oni su koncipirani
             tako da olakšaju sistemsku i stalnu procenu uticaja energetskog
             sistema, npr. kolika je ukupna potrošnje energije (neke statističke
             jedinice) u odnosu na ekonomske aktivnosti. Komponente ovih
             indikatora su definisane i međunarodno usaglašene 2005. godine.
           </p>
           <p>
             <span>Energetski menadžer</span> je fizičko lice imenovano od
             strane obveznika sistema energetskog menadžmenta da prati i beleži
             načine korišćenja i količine upotreblјene energije, predlaže i
             sprovodi mere efikasnog korišćenja energije i obavlјa druge poslove
             utvrđene Zakonom o efikasnom korišćenju energije.
           </p>
           <p>
             <span>Energetski savetnik</span> je fizičko ili pravno lice
             ovlašćeno za vršenje energetskog pregleda u skladu sa odredbama
             ovog zakona i propisa donetih na osnovu Zakona o efikasnom
             korišćenju energije.
           </p>
           <p>
             <span>Energetska tranzicija</span> je prelazak sa jedne vrste
             energenta ili energetske tehnologije na neki drugi ili drugačiju
             tehnologiju.
           </p>
           <p>
             <span>Etažne peći</span> su individualne peći raznovrsnog dizajna
             koje služe za proizvodnju toplote za zagrevanje višespratnih
             individualnih objekata.
           </p>
           <p>
             <span>Energetska sanacija</span> je izvođenje građevinskih i drugih
             radova na postojećem objektu, kao i popravka ili zamena uređaja,
             postrojenja, opreme i instalacija istog ili manjeg kapaciteta, a
             kojima se ne utiče na stabilnost i sigurnost objekta, ne menjaju
             konstruktivni elementi, ne utiče na bezbednost susednih objekata,
             saobraćaja, ne utiče na zaštitu od požara i zaštitu životne
             sredine, ali kojima se menja spolјni izgled uz potrebne
             saglasnosti, u cilјu povećanja njene energetske efikasnosti.
           </p>
           <p>
             <span>Emisija gasova sa efektom staklene bašte (GESB)</span> su oni
             gasovi koji zadr- žavaju toplotu koja se reflektuje od Zemlјine
             površine i tako zagrevaju planetu. Na taj način kreira se efekat
             koji imaju i staklene bašte na polјoprivrednim parcelama. To su:
             vodena para, uglјen-dioksid, metan, azot-suboksid i
             hlorofluorokarbonat. Najvažniji gasovi staklene bašte čija je
             emisija izazvana ljudskom aktivnošću su: CO2 (uglјen-dioksid), CH4
             (metan), NOx (mono-azotni oksidi), HFC (hidro-fluoro-ugljenik), PFC
             (fluoro -ugljenik), SF6 (sumpor-heksafluorid) i NF3
             (azot-trifluorid).
           </p>
           <p>
             <span>ESCO (Energy Service Company)</span> je biznis model u kojem
             ESCO kompanije pored rešenja za povećanje energetske efikasnosti
             svojim klijentima nude i finansijska rešenja za realizaciju. Tako
             se klijentu nudi integralno rešenje kojim se omogućava da u
             realizaciji projekata od ideje do pune realizacije posluje sa samo
             jednim preduzećem.
           </p>
           <p>
             <span>Efekat staklene bašte (ESB)</span> je efekat koji na
             planetarnom nivou proizvode određeni gasovi (najviše CO2) koji se
             zadržavaju u atmosferi obrazujući "štit" koji propušta sunčeve
             zrake koji zagrevaju površinu Zemlje i atmosferu. Kao posledica
             zagrevanja, sa površine Zemlje emituje se infracrveno zračenje. Deo
             tog zračenja prolazi kroz atmosferu, deo biva reflektovan od strane
             gasova staklene bašte, a deo biva apsorbovan. Zbog apsorpcije
             zračenja od strane gasova staklene bašte, dolazi do ponovnog
             emitovanja zračenja prema Zemlji. Ova pojava poznata je kao efekat
             staklene bašte, a njena posledica je zagrevanje površine Zemlje i
             nižih slojeva atmosfere.
           </p>
           <hr />
           {/* F */}
           <h4 id="F">F</h4>
           <p>
             <span>„Feed in“ tarifa</span> je naknada za podsticaj povlašćenih
             proizvođača električne energije (u Srbiji uvedena 2013. godine).
             Utvrđeni iznos naknade se množi sa izmerenom količinom potrošnje
             aktivne električne energije krajnjeg kupca u obračunskom periodu
             izraženom u kWh. Ovaj podsticaj se na kraju meseca naplaćuje kao
             taksa svim potrošačima električne energije kroz stavku u računu za
             utrošenu električnu energiju.
           </p>
           <p>
             <span>Fosilna goriva</span> su ugalј, mazut, lož ulјe i prirodni
             gas.
           </p>
           <hr />
           {/* G */}
           <h4 id="G">G</h4>
           <p>
             <span>Garantovani snabdevač</span> je snabdevač koji obezbeđuje
             javnu uslugu garantovanog snabdevanja i koji od povlašćenih
             proizvođača otkuplјuje električnu energiju, i obavlјa poslove koji
             se odnose na sprovođenje podsticajnih mera u skladu sa Zakonom o
             energetici i propisima donetim na osnovu njega.
           </p>
           <p>
             <span>Grejna površina</span> (m2) je površina objekta ili grupe
             objekata koja se greje.
           </p>
           {/* I */}
           <h4 id="I">I</h4>
           <p>
             <span>Industrijski otpad</span> je otpad nastao iz industrijskog
             procesa proizvodnje, ili na industrijskoj lokaciji. Ovaj termin ne
             podrazumeva jalovine i ostali mineralni otpad iz procesa
             ekstrakcije ruda ili kamenoloma.
           </p>
           <p>
             <span>Infracrveni grejač</span> je grejač koji predaje toplotu
             putem infracrvenog zračenja. Ovi grejači spadaju u grupu
             tamnozračećih tela. Infracrveni grejači su prihvatljiv način
             grejanja industrijskih objekata, sportskih hala, magacina, farmi,
             objekata agrokulture, staklenika i slične primene jer ne gube
             energiju na zagrevanje medijuma za prenos toplote, već energiju
             prenose zračenjem direktno na grejano telo.
           </p>
           <hr />
           {/* J */}
           <h4 id="J">J</h4>
           <p>
             <span>Jedinična potrošnja</span> (kWh/m2) je količina energije
             utrošene za grejanje jednog kvaratnog metra grejne površine.
           </p>
           <p>
             <span>Jedinični energetski troškovi</span> (€/m2) su nominalno
             izraženi troškovi grejanja jednog kvaratnog metra grejne površine u
             novčanim jedinicama.
           </p>
           <hr />
           {/* K */}
           <h4 id="K">K</h4>
           <p>
             <span>Kalorimetar</span> je uređaj koji meri utrošak toplotne
             energije. U naučnom smislu, to je merni uređaj koji se koristi u
             istraživanju termodinamičkih pojava u fizici.
           </p>
           <p>
             <span>Kapacitet grejanja</span> (kW) je maksimalna količina
             energije koju sistem za grejanje može da isporuči grejanom, a
             definisanom granicama sistema prostoru (uključujući i volumen
             vazduha koji se u njemu nalazi) u idealnom slučaju. Jedinični
             kapacitet grejanja je kapacitet grejanja izražen po kvardatnom
             metru grejne površine (W/m2) i u praksi za pojedinačne objekte
             varira u zavisnosti od velikog broja faktora (visine plafona,
             veličine i broja vrata, prozora, izolacije zidova, položaja
             objekta, itd.).
           </p>
           <p>
             <span>Koeficijent grejanja</span> εH (eng. coefficient of
             performance, skraćeno COP) je odnos između dobijene toplotne
             energije i uložene energije (utrošene električne energije)
             ((kWh)H/(kWh)E).
           </p>
           <p>
             <span>Komunalni otpad</span> je otpad iz domaćinstava, kao i drugi
             otpad koji je zbog svoje prirode i sastava sličan otpadu iz
             domaćinstava. Većinu komunalnog otpada čini otpad nastao u
             domaćinstvima.
           </p>
           <p>
             <span>Konverzija</span> (energije) je termin koji se u energetici
             najčešće koristi za proces prevođenja jednog vida energije u drugi
             (npr. mehaničkog rada u el. energiju ili sunčevog zračenja u
             toplotu). U opštem smislu, konverzija označava promenu, odnosno
             pretvaranje određene forme u neku drugu formu.
           </p>
           <p>
             <span>Kotlovska postrojenja</span> su postrojenja u kojima se
             sagorevanjem odgovarajućeg energenta proizvodi topla voda ili para.
           </p>
           <p>
             <span>Kogenerativna (CHP) postrojenja</span> su postrojenja u
             kojima se vrši postupak istovremene proizvodnje električne i
             korisne toplotne energije u jedinstvenom procesu.
           </p>
           <p>
             <span>Kompost</span> je proizvod aerobne (u prisustvu vazduha)
             razgradnje organske materije.
           </p>
           <p>
             <span>Komunalna energetika</span> je deo lokalne energetske
             politike koja proizilazi iz primena Zakona o komunalnim
             delatnostima i Zakona o efikasnom korišćenju energije, a sprovodi
             se kroz delovanje javnih preduzeća i javnih tela i podrazumeva
             aktivnosti usmerene ka povećanju energetske efikasnosti, kao i
             koncentraciju znanja, kapitala i menadžerskih veština.
           </p>
           <p>
             <span>Klimatske promene</span> su globalne promene klime nastale
             usled globalnog zagrevanja izazvanog lјudskom delatnošću.
           </p>
           <hr />
           {/* L */}
           <h4 id="L">L</h4>
           <p>
             <span>Licenca za obavlјanje energetskih delatnosti</span> je pravni
             akt kojim se utvrđuje ispunjenost uslova za obavlјanje energetskih
             delatnosti propisanih Zakonom o energetici.
           </p>
           <p>
             <span>Logistički centri za trgovinu biomasom (BLTC)</span> su
             regionalna sedišta koja imaju ulogu da pomognu da se poveća lokalna
             ponuda i tražnja za proizvodima u oblasti drvne biomase u nekoj
             državi ili regionu. To su regionalni centri prilagođene logističke
             i trgovačke organizacije, gde se u garantovanom kvalitetu i po
             utvrđenoj ceni prodaju različita goriva iz biomase (ogrevno drvo,
             drvna sečka, pelet, energetske kulture, itd.).
           </p>
           <hr />
           {/* M */}
           <h4 id="M">M</h4>
           <p>
             <span>Mali sistem daljinskog grejanja</span> je sistem za grejanje
             u kome se iz jednog izvora, odnosno kotlarnice, toplotna energija
             distribuira do nekoliko objekata u neposrednom okruženju.
           </p>
           <p>
             <span>Međunarodna energetska povelјa</span> je formalizovana izjava
             političke namere koja ima za cilј jačanje energetske saradnje
             između država potpisnica iako ne pretpostavlјa pravnu ili
             finansijsku obavezu.
           </p>
           <p>
             <span>Mere za poboljšanje energetske efikasnosti</span> jesu sve
             aktivnosti i radnje koje dovode do proverljivog i merljivog ili
             procenjivog povećanja energetske efikasnosti u sektorima
             proizvodnje, prenosa, distribucije i potrošnje energije. Bez obzira
             da li je reč o tehničkim ili netehničkim merama, ili o promenama u
             ponašanju, sve mere treba da podrazumevaju isti ili čak višinstepen
             ostvarenog komfora i standarda.
           </p>
           <p>
             <span>Metan</span> (po hemijskom sastavu CH4) je zasićeni
             ugljovodonik, bezbojan za- paljivi gas koji u prirodi nastaje usled
             anaerobnog raspada or- ganskih materija. Gori plavim plamenom, a
             sagorevanjem na vazduhu nastaje ugljen-dioksid i voda.
           </p>
           <hr />
           {/* N */}
           <h4 id="N">N</h4>
           <p>
             <span>Nominalno instalisani kapacitet</span> je puni, maksimalni
             projektovani kapacitet nekog postojenja deklarisan od strane
             proizvođača postrojenja.
           </p>
           <hr />
           {/* O */}
           <h4 id="O">O</h4>
           <p>
             <span>OIE (Obnovlјivi Izvori Energije)</span> su nefosilni izvori
             energije kao što su: vodotokovi, biomasa, vetar, sunce, biogas,
             deponijski gas, gas iz pogona za preradu kanalizacionih voda i
             izvori geotermalne energije.
           </p>
           <p>
             <span>Obavezujući udeo OIE</span> u bruto finalnoj potrošnji
             energije je arbitrarno usvojeni procenat učešća OIE u potrošnji
             okviru energetske politike EU.
           </p>
           <p>
             <span>Operator prenosnog sistema</span> je ekonomski operater koji
             korisniku energetskog sistema omogućuje isporuku, odnosno
             preuzimanje električne energije ili energenata, pod uslovima
             utvrđenim Zakonom o energetici.
           </p>
           <p>
             <span>Otpadna toplota</span> se u postrojenjima javlјa kao
             nusprodukt nekog tehničko-tehnološkog procesa, i nije potrebna, a
             najčešće ni poželјna u samom procesu.
           </p>
           <p>
             <span>Ozonski omotač</span> je sloj zemlјine stratosfere, na
             nadmorskoj visini od oko 10 km koji sadrži visoku koncentraciju
             ozona, i koji apsorbuje većinu ultralјubičastog zračenja koja od
             Sunca stiže do Zemlјe.
           </p>
           <hr />
           {/* P */}
           <h4 id="P">P</h4>
           <p>
             <span>Pelet</span> (agro i drvni) su granulirane forme energetskih
             bilјnih kultura ili/i drvnog materijala, najčešće u obliku
             cilindara prečnika od dva do pet centimetara. Praktičan je za
             sisteme sa automatizovanim punjenjem komore za sagorevanje.
           </p>
           <p>
             <span>Poboljšanje energetske efikasnosti</span> jeste smanjenje
             potrošnje energije za isti obim i kvalitet obavljenih proizvodnih
             aktivnosti i pruženih usluga ili povećanje obima i kvaliteta
             obavljenih proizvodnih aktivnosti i pruženih usluga uz istu
             potrošnju energije, a koje se ostvaruje primenom mera efikasnog
             korišćenja energije (tehnoloških promena, ponašanja obveznika
             sistema energetskog menadžmenta i/ili ekonomskih promena).
           </p>
           <p>
             <span>Podsticajne mere</span> su instrumenti ili mehanizmi podrške
             proizvodnji energije iz obnovlјivih izvora energije ili
             visokoefikasnoj kombinovanoj proizvodnji električne i toplotne
             energije.
           </p>
           <p>
             <span>Povlašćeni proizvođač</span> električne energije je
             energetski subjekt koji proizvodi električnu energiju iz
             obnovlјivih izvora energije ili visokoefikasne kombinovane
             proizvodnje električne i toplotne energije i ima pravo na
             podsticajne mere u skladu sa Zakonom o energetici.
           </p>
           <p>
             <span>Primarna energija</span> je energija sadržana u hemijskom
             potencijalu fosilnih goriva, drvne ili biomase, nuklearnoj
             energiji, kinetičkoj energiji vetra ili vodotoka, potencijalnoj
             energiji vodenih tokova ili toplotnoj energiji geotermalnih izvora.
             Izvori primarne energije mogu biti obnovlјivi ili neobnovlјivi.
           </p>
           <p>
             <span>Privremeni povlašćeni proizvođač</span> električne energije
             je fizičko ili pravno lice, odnosno preduzetnik, koje je pribavilo
             građevinsku dozvolu za izgradnju energetskog objekta za proizvodnju
             električne energije iz obnovljivih izvora energije ili
             visokoefikasne kombinovane proizvodnje električne i toplotne
             energije i ispunilo druge uslove u skladu sa Zakonom o energetici.
           </p>
           <p>
             <span>Predajna stanica</span> je veza između distributera sistema
             dalјinskog grejanja i potrošačkih sistema.
           </p>
           <p>
             <span>Predizolovane cevi</span> su cevi koje su fabrički izolovane
             i ne zahtevaju naknadnu izolaciju tokom ugradnje.
           </p>
           <hr />
           {/* R */}
           <h4 id="R">R</h4>
           <p>
             <span>Razdelnik toplote</span> je mašinski ili elektromašinski
             element koji se ugrađuje u sistemima grejanja i služi za
             distribuciju medijuma koji prenosi toplotu kroz toplovod.
           </p>
           <p>
             <span>Regionalna energetska strategija Energetske zajednice</span>{" "}
             je dokument ministarskog saveta članica Energetske zajednice koji
             je usvojen 2013. godine. Sledi iste principe EU strategije
             „Energija 2020“, definiše energetske prioritete za naredne godine i
             akcije koje bi trebalo sprovesti kako bi uhvatili u koštac sa
             izazovima nastupa na tržištu konkurentnim cenama, osigurali
             snabdevanje, povećala štednja energije, izvršila tranzicija prema
             manje zagađujućim izvorima energije i smanjila emisija uglјenika iz
             energetskog sektora. Strategija pokriva svih devet ugovornih strana
             Energetske zajednice: Albaniju, Bosnu i Hercegovinu, Hrvatsku,
             Severnu Makedoniju, Kosovo*, Moldaviju, Crnu Goru, Srbiju i
             Ukrajinu.
             <br />* Ovaj natpis ne prejudicira status Kosova i u skladu je sa
             rezolucijom 1244 i mišljenjem MSP-a o kosovskoj deklaraciji o
             nezavisnosti.
           </p>
           <hr />
           {/* S */}
           <h4 id="S">S</h4>
           <p>
             <span>Sistem energetskog menadžmenta</span> je sistem organizovanog
             upravlјanja energijom na način da obveznici sistema energetskog
             menadžmenta izvršavaju zakonom propisane obaveze sa cilјem da se
             postigne racionalno korišćenje energije uz što manje troškova.
             Obveznici sistema energetskog menadžmenta su privredna društva koja
             koriste više energije od količine koju propiše Vlada, organi
             državne uprave i drugi organi Republike Srbije, organi autonomne
             pokrajine, jedinice lokalne samouprave sa više od 20.000 stanovnika
             i javne službe koje koriste objekte u javnoj svojini.
           </p>
           <p>
             <span>Sistem dalјinskog grejanja (SDG)</span> je sistem grejanja
             domaćinstava i industrijskih objekata iz jednog centra.
           </p>
           <p>
             <span>Stepen-dan (SD)</span> je pokazatelј kretanja spolјne
             temperature vazduha u nekom mestu tokom perioda grejanja. Zavisi od
             broja dana u grejnoj sezoni, unutrašnje temperature vazduha
             (grejanih prostora) i spolјašnje temperature vazduha.
           </p>
           <p>
             <span>Stajnjak</span> је đubrivo nastalo iz stočnog uzgoj.
           </p>
           <hr />
           {/* T */}
           <h4 id="T">T</h4>
           <p>
             <span>Tehnološka zastarelost</span> je onaj trenutak u životnom
             ciklusu nekog dela opreme, tehnologije ili procesa u kome je
             prevaziđen program proizvodnje, popravlјanja i održavanja nekog
             sredstva ili neke komponente tehnologije ili je nastala kao
             posledica promena ili pobolјšanja principa na kojima počiva
             tehnologija, usled promena u tržišnoj potražnji za proizvodom ili
             uslugom koji se pružaju uz pomoć tog sredstva ili tehnologije, kao
             i usled restriktivnih promena zakonskih ili administrativnih
             ograničenja.
           </p>
           <p>
             <span>Toplana</span> je postrojenje za pripremu vrele vode ili
             vodene pare za koja se distribuira kroz sistem dalјinskog grejanja
             ili za snabdevanje industrije tehnološkom parom.
           </p>
           <p>
             <span>Toplotno opterećenje objekata</span> je količina utrošene
             finalne energije u jedinici vremena po kvadratnom metru, izražena u
             kWh/m2.
           </p>
           <p>
             <span>Toplotna moć goriva</span> definiše se kao odnos oslobođene
             količine toplote pri potpunom sagorevanju goriva i količine goriva
             iz koje je toplota oslobođena (kJ/kg). Vlaga umanjuje toplotnu moć
             goriva jer se za njeno isparavanje troši deo toplote nastao
             sagorevanjem goriva. Shodno tome, razlikujemo gornju i donju
             toplotnu moć goriva.
           </p>
           <p>
             <span>Termostatski ventil</span> je mašinski ili elektromašinski
             uređaj koji vrši kontrolu protoka grejnog fluida u zavisnosti od
             zadate temperature.
           </p>
           <p>
             <span>Termografska kamera</span> je fotografska kamera koja ima
             mogućnosti da snima u infracrvenom spektru zračenja i uz pomoć koje
             se dobijaju termografske fotografije na kojima se razlike u
             temperaturi slikanih predmeta i objekata vide golim okom.
           </p>
           <p>
             <span>Termovizijska kamera</span> je elektronski uređaj,
             televizijska kamera koja ima mogućnosti da snima u infracrvenom
             spektru zračenja i prevede termovizijski snimak u video snimak na
             kome su temperaturne razlike snimanih predmeta i objekata vidlјive
             golim okom.
           </p>
           <p>
             <span>Toplotna energija</span> nekog tela je energija koja u
             prostoru spontano prelazi sa tela više temperature na okolinu ili
             tela niže temperature. Prenos toplote može se izvršiti na tri
             načina: kondukcijom (provođenje direktnim kontaktom), konveksijom
             (prenosom uz pomoć posrednika) i radijacijom (zračenjem).
           </p>
           <p>
             <span>Toplotna podstanica</span> služi za regulisanu razmenu
             toplotne energije između primarne mreže sistema dalјinskog grejanja
             i sekundarne mreže radijatorskog grejanja individualnih objekata. U
             zavisnosti od svoje složenosti, može biti opremlјena regulatorima,
             filterima, mernim uređajima i drugim uređajima kojima ostvaruje
             potrebne parametre sekundarnog fluida
           </p>
           <hr />
           {/* U */}
           <h4 id="U">U</h4>
           <p>
             <span>Ukupni tehnički raspoloživ potencijal OIE</span> je
             procenjeni potencijal OIE, obično izražen u tona ekvivalentne
             nafte/godišnje. Sastoji se iz raspoloživog dela (koji se
             eksploatiše) i neiskorišćenog raspoloživog (kod koga postoji
             tehnički potencijal za ekploatacijom).
           </p>
           <p>
             <span>Udeo gorivih komponenti u biogasu</span> je procentualna
             zastuplјenost gasova (pretežno metan) koji gore u smeši gasova koji
             čine biogas.
           </p>
           <p>
             <span>Ugljenični ciklus ili ciklus ugljenika</span> je
             biogeohemijski ciklus, u kojem se ugljenik razmenjuje između
             biosfere, pedosfere, geosfere, hidrosfere i atmosfere na Zemlji. To
             je jedan od najvažnijih ciklusa na Zemlji i omogućave da ugljenik
             ponovno iskoriste novi organizmi i kao takav predstavlja osnovni
             mehanizam za proizvodnju obnovljivih izvora energije.
           </p>
           <p>
             <span>Ugljenična neutralnost</span> je koncept koji se odnosi na
             minimizaciju uticaja na proces kruženja ugljenika, odnosno na
             princip da se onoliko ugljenika koliko se emituje, toliko i ukloni
             iz atmosphere. Ugljenična neutralnost znači da neto emisija gasova
             sa efektom staklene bašte iznosi nula tona ili da je negativna.
             Ovaj cilj se dostiže smanjenjem emisije CO2 ili povećanjem
             apsorpcije ugljenika čime se postiže njihovo izjednačenje, odnosno
             “neutralnost”.
           </p>
           <p>
             <span>Ugljenični otisak (eng. “carbon footprint”)</span> je emisija
             ugljen-dioksida i ostalih komponenti baziranih na ugljeniku
             ispuštenog u atmosferu kao rezultat aktivnosti određenog pojedinca,
             organizacije ili zajednice.
           </p>
           <hr />
           {/* V */}
           <h4 id="V">V</h4>
           <p>
             <span>Vršna potrošnja</span> je maksimalna zabeležena srednja
             vrednost potrošnje merene u određenim vremenskim intervalima (npr.
             petnaestominutnim intervalima) u toku definisanog vremenskog
             perioda (npr. obračunskog meseca).
           </p>
           <hr />
         </article>
       </div>
     </section>
   </Layout>
 )
}



export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "Zelena oblast - Pojmovnik 1519x438.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default pojmovnik
