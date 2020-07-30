import React, { Component } from "react"
import L from "leaflet"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"
import "./leafletmap.css"

class LeafletMap extends Component {
  state = {
    ADKopaonikBeogradOgranakUzice: {
      lat: 43.847659,
      lng: 19.858912,
    },
    NOVIOKOV: {
      lat: 43.847171,
      lng: 19.852399,
    },
    Metalfon:{
     lat: 43.821758,
     lng: 19.927519,
    },
    SUMADIJA:{
     lat: 43.847286,
     lng: 19.601173
    },
    StovaristeDanicic:{
     lat: 43.865741,
     lng: 19.819728,
    },

    zoom: 11,
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
    return (
      <Map className="map" center={positionNOVIOKOV} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={positionNOVIOKOV}>
          <Popup>NOVI OKOV d.o.o.</Popup>
        </Marker>
        <Marker position={positionADKopaonikBeogradOgranakUzice}>
          <Popup>AD Kopaonik Beograd – Ogranak Užice</Popup>
        </Marker>
        <Marker position={positionMetalfon}>
          <Popup>Metalfon d.o.o.</Popup>
        </Marker>
        <Marker position={positionSUMADIJA}>
          <Popup>Metalfon d.o.o.</Popup>
        </Marker>
        <Marker position={positionStovaristeDanicic}>
          <Popup>Stovarište “Daničić “</Popup>
        </Marker>
      </Map>
    )
  }
}

export default LeafletMap 
