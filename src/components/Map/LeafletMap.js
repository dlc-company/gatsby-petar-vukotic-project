import React, { Component } from "react"
import L from "leaflet"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"
import "./leafletmap.css"

import {Link} from 'gatsby'

class LeafletMap extends Component {
  state = {
    ADKopaonikBeogradOgranakUzice: {
      lat: 43.846932,
      lng: 19.859451,
    },
    NOVIOKOV: {
      lat: 43.847239,
      lng: 19.852583,
    },
    Metalfon:{
      lat: 43.821062,
      lng: 19.926952,
    },
    SUMADIJA:{
      lat: 43.843415,
      lng: 19.600561
    },
    StovaristeDanicic:{
      lat: 43.861780,
      lng: 19.819557,
    },
    AGROGRK:{
      lat: 43.729074,
      lng: 20.112804
    },

    RPPG3MKOM:{
      lat: 43.964884,
      lng: 19.535042
    },
    RPPUMALIŠEVAC:{
      lat: 43.954093,
      lng: 19.520326
    },
    INFLAMEPELLETS:{
      lat: 43.965677,
      lng: 19.558248
    },
    RASPELLETS:{
      lat: 43.975695,
      lng: 19.547334
    },
    MICROTRI:{
      lat: 43.981160,
      lng: 19.570687
    },
    Ševar:{
      lat: 43.793490,
      lng: 20.100223
    },
    SMEcoPelet: {
      lat: 43.854616,
      lng: 19.988788
    },
    NOVIOKOVKosjerić:{
      lat: 44.000235,
      lng: 19.908809
    },
    Gorštak :{
      lat: 43.786156,
      lng: 19.686998
    },
    NOVIOKOVZlatibor:{
      lat: 43.725956,
      lng: 19.705283
    },
    IKONIĆ:{
      lat: 43.754887,
      lng: 19.715322
    },
    NANIXWOOD:{
      lat: 43.459994,
      lng: 19.827462
    },
    ZLATARŠPED:{
      lat: 43.511104,
      lng: 19.798746
    },
    OMOPROM:{
      lat: 43.469088,
      lng: 19.688754
    },
    ZLOŠNICA:{
      lat: 43.452202,
      lng: 19.842183
    },
    DMBBABIĆ:{
      lat: 43.458325,
      lng: 19.838298
    },
    MILPELETPriboj:{
      lat: 43.595148,
      lng: 19.501523
    },
    DŽELILOVIĆ:{
      lat: 43.559193,
      lng: 19.538836
    },
    JELASTAR:{
      lat: 43.370528,
      lng: 19.628610
    },

    zoom: 9,
  }

  render() {
    const positionADKopaonikBeogradOgranakUzice = [
      this.state.ADKopaonikBeogradOgranakUzice.lat,
      this.state.ADKopaonikBeogradOgranakUzice.lng,
    ]
    const positionNOVIOKOV = [
     this.state.NOVIOKOV.lat, 
     this.state.NOVIOKOV.lng
    ]
    const positionMetalfon = [
     this.state.Metalfon.lat, 
     this.state.Metalfon.lng
    ]
    const positionSUMADIJA = [
     this.state.SUMADIJA.lat, 
     this.state.SUMADIJA.lng
    ]
    const positionStovaristeDanicic = [
      this.state.StovaristeDanicic.lat,
      this.state.StovaristeDanicic.lng,
    ]
    const positionAGROGRK = [
      this.state.AGROGRK.lat,
      this.state.AGROGRK.lng,
    ]
    const positionRPPG3MKOM= [
      this.state.RPPG3MKOM.lat,
      this.state.RPPG3MKOM.lng,
    ]
    const positionRPPUMALIŠEVAC = [
      this.state.RPPUMALIŠEVAC.lat,
      this.state.RPPUMALIŠEVAC.lng,
    ]
    const positionINFLAMEPELLETS = [
      this.state.INFLAMEPELLETS.lat,
      this.state.INFLAMEPELLETS.lng,
    ]
    const positionRASPELLETS = [
      this.state.RASPELLETS.lat,
      this.state.RASPELLETS.lng,
    ]
    const positionMICROTRI = [
      this.state.MICROTRI.lat,
      this.state.MICROTRI.lng,
    ]
    const positionŠevar = [
      this.state.Ševar.lat,
      this.state.Ševar.lng,
    ]
    const positionSMEcoPelet = [
      this.state.SMEcoPelet.lat,
      this.state.SMEcoPelet.lng,
    ]
    const positionNOVIOKOVKosjerić = [
      this.state.NOVIOKOVKosjerić.lat,
      this.state.NOVIOKOVKosjerić.lng,
    ]
    const positionGorštak = [
      this.state.Gorštak.lat,
      this.state.Gorštak.lng,
    ]
    const positionNOVIOKOVZlatibor = [
      this.state.NOVIOKOVZlatibor.lat,
      this.state.NOVIOKOVZlatibor.lng,
    ]
    const positionIKONIĆ = [
      this.state.IKONIĆ.lat,
      this.state.IKONIĆ.lng,
    ]
    const positionNANIXWOOD = [
      this.state.NANIXWOOD.lat,
      this.state.NANIXWOOD.lng,
    ]
    const positionZLATARŠPED = [
      this.state.ZLATARŠPED.lat,
      this.state.ZLATARŠPED.lng,
    ]
    const positionOMOPROM = [
      this.state.OMOPROM.lat,
      this.state.OMOPROM.lng,
    ]
    const positionZLOŠNICA = [
      this.state.ZLOŠNICA.lat,
      this.state.ZLOŠNICA.lng,
    ]
    const positionDMBBABIĆ = [
      this.state.DMBBABIĆ.lat,
      this.state.DMBBABIĆ.lng,
    ]
    const positionMILPELETPriboj = [
      this.state.MILPELETPriboj.lat,
      this.state.MILPELETPriboj.lng,
    ]
    const positionDŽELILOVIĆ = [
      this.state.DŽELILOVIĆ.lat,
      this.state.DŽELILOVIĆ.lng,
    ]
    const positionJELASTAR = [
      this.state.JELASTAR.lat,
      this.state.JELASTAR.lng,
    ]

    return (
      
      <Map className="map" 
        center={positionNOVIOKOVZlatibor} 
      zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={positionNOVIOKOV}>
          <Popup>NOVI OKOV d.o.o.
            <br/>
          <Link to="/map#NOVIOKOV">Kliknite ovde za detalje</Link>
          </Popup>
        </Marker>
        <Marker position={positionADKopaonikBeogradOgranakUzice}>
          <Popup>AD Kopaonik Beograd – Ogranak Užice
          <br/>
            <Link to="/map#ADKopaonikBeogradOgranakUzice">Kliknite ovde za detalje</Link>
        </Popup>
        </Marker>
        <Marker position={positionMetalfon}>
          <Popup>METALFON d.o.o.
            <br/>
            <Link to="/map#METALFON">Kliknite ovde za detalje</Link>
          </Popup>
        </Marker>
        <Marker position={positionSUMADIJA}>
          <Popup>ŠUMADIJA d.o.o.
            <br/>
            <Link to="/map#SUMADIJA">Kliknite ovde za detalje</Link>           
          </Popup>
        </Marker>
        <Marker position={positionStovaristeDanicic}>
          <Popup>Stovarište “Daničić“
            <br/>
            <Link to="/map#DANICIC">Kliknite ovde za detalje</Link>           
          </Popup>
        </Marker>
        <Marker position={positionAGROGRK}>
          <Popup>AGRO GRK t.a.r.
          Adresa: Bogojevići bb, 31230 Arilje
          Telefon: 062/235 286
Email: radmilgrkovic@yahoo.com</Popup>
        </Marker>
        <Marker position={positionRPPG3MKOM}>
          <Popup>RPPG “3M-KOM”
          Adresa: Bušinsko polje bb, 31250 Bajina Bašta
          Telefon: 065/863 30 57
Email: goranbbasta@open.telekom.rs</Popup>
        </Marker>
        <Marker position={positionRPPUMALIŠEVAC}>
          <Popup>RPPU “MALIŠEVAC”
          Adresa: Beserovina bb, 31250 Bajina Bašta
          Telefon: 064/185 90 10
Email: malisevac@yahoo.com</Popup>
        </Marker>
        <Marker position={positionINFLAMEPELLETS}>
          <Popup>INFLAME-PELLETS d.o.o.
          Adresa: Milutina Uskokovića 19, 31250 Bajina Bašta
Telefon: 066/467 319</Popup>
        </Marker>
        <Marker position={positionRASPELLETS}>
          <Popup>RAS&PELLETS
          Adresa: Braće Dragutina i Rada čučkovića 3, 31250 Bajina Bašta
Telefon: 064/843 09 23</Popup>
        </Marker>
        <Marker position={positionMICROTRI}>
          <Popup>MICRO TRI d.o.o.
          Adresa: Milenka Topalovića bb, 31250 Bajina Bašta
          Telefon: 031/864-389
Email:office@microtri.rs</Popup>
        </Marker>
        <Marker position={positionŠevar}>
          <Popup>Ševar d.o.o.
          Adresa: Milićevo selo, 31210 Požega
          Telefon: 031/894 066, 065/200 4600
Email: office@sevar.rs</Popup>
        </Marker>
        <Marker position={positionSMEcoPelet}>
          <Popup>SM Eco pelet
          Adresa: Zdravčići bb, 31210 Požega
Telefon: 064/139 93 37</Popup>
        </Marker>
        <Marker position={positionNOVIOKOVKosjerić}>
          <Popup>NOVI OKOV d.o.o. – Kosjerić
          Adresa: Miće Zarića 2, 31260 Kosjerić
          Telefon: 031/315 22 24
Email:kosjeric@noviokov.com</Popup>
        </Marker>
        <Marker position={positionGorštak}>
          <Popup>Gorštak d.o.o.
          Adresa: Braneško polje bb, 31310 Čajetina
Telefon: 031/832 299, 064/847 36 02</Popup>
        </Marker>
        <Marker position={positionNOVIOKOVZlatibor}>
          <Popup>NOVI OKOV d.o.o. – Zlatibor
          Adresa: Ulica sportova bb, 31315 Zlatibor
          Telefon: 031/315 01 05
Email:zlatibor@noviokov.com</Popup>
        </Marker>
        <Marker position={positionIKONIĆ}>
          <Popup>IKONIĆ  d.o.o.
          Adresa: Ćaldov put bb, 31310 Čajetina
Telefon: 031/832-082</Popup>
        </Marker>
        <Marker position={positionNANIXWOOD}>
          <Popup>NANIX WOOD D.O.O.
          Adresa: Magistralni put 5/a, 31320 Nova Varoš
          Telefon: 033/62 080, 060/08 444 54
Email: office@nanixwood.com</Popup>
        </Marker>
        <Marker position={positionZLATARŠPED}>
          <Popup>ZLATAR ŠPED d.o.o.
          Adresa: Vraneša bb, 31320 Nova Varoš
          Telefon: 064/823-3042
Email:danko@zlatarsped.com</Popup>
        </Marker>
        <Marker position={positionOMOPROM}>
          <Popup>sztr OMO-PROM
          Adresa: Bistrica bb, 31320 Nova Varoš
          Telefon: 064/640-9077
Email:omoprom@gmail.com</Popup>
        </Marker>
        <Marker position={positionZLOŠNICA}>
          <Popup>sztr ZLOŠNICA
          Adresa: Brdo bb, 31320 Nova Varoš
          Telefon: 065/887-8101
Email:duskoman84@gmail.com</Popup>
        </Marker>
        <Marker position={positionDMBBABIĆ}>
          <Popup>DMB “BABIĆ”
          Adresa: Brdo bb, 31320 Nova Varoš
Telefon: 064/955-2085</Popup>
        </Marker>
        <Marker position={positionMILPELETPriboj}>
          <Popup>MIL PELET Priboj
          Adresa: IV Sandžačke brigade 52, 31330 Priboj
Telefon: 033/244 8100, 064/130 99 60</Popup>
        </Marker>
        <Marker position={positionDŽELILOVIĆ}>
          <Popup>SZTR DŽELILOVIĆ
          Adresa: Dragoljuba Savića 50, 31330 Priboj
          Telefon: 060/ 352 69 48
Email: plavipriboj1@gmail.com</Popup>
        </Marker>
        <Marker position={positionJELASTAR}>
          <Popup>JELA STAR d.o.o.
          {/* Adresa: Bjelopoljski put bb, 31300 Prijepolje
          Telefon: 033/782-777
          Email:info@jelastar.rs */}
          
</Popup>
        </Marker>
      </Map>
        
      
    )
  }
}

export default LeafletMap 
