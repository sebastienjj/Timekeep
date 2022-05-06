import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component, useState } from 'react';

function MapContainer(props) {
    const setSelectedCounty = props.setSelectedCounty
    const selectedCounty = props.selectedCounty

    const [infoWindowState, setInfoWindowState] = useState(
        {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
        }
    )

    const onMarkerClick = (props, marker, e) => {
        if (infoWindowState.showingInfoWindow) {
            setInfoWindowState({
                showingInfoWindow: false,
                activeMarker: {},
                selectedPlace: {}
            })
        }
        setInfoWindowState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        })
        setSelectedCounty(props)
        
    }

    const onMapClicked = () => {
        if (infoWindowState.showingInfoWindow) {
            setInfoWindowState({
                showingInfoWindow: false,
                activeMarker: {},
                selectedPlace: {}
            })
        }
        setSelectedCounty({
            id: "",
            state: "",
            county: "",
            county_code: 0,
            score: 0,
            maps: [],
            position: {}
        })
    }

    const markerData = props.countyData.map((countyData) => {
        return(
        <Marker id={countyData.id}
                onClick={onMarkerClick}
                name={countyData.county}
                position={countyData.position}
        />)
    })

    const mapStyle={display: "block", height: "450px", width: "600px"}

    return (
      <Map  
        containerStyle={mapStyle}
        onClick={onMapClicked}
        google={props.google} 
        zoom={3.65}
        initialCenter={{
            lat: 38.8144311,
            lng: -97.2130027
          }}
        >
        {markerData}
        <InfoWindow 
            marker={infoWindowState.activeMarker}
            visible={infoWindowState.showingInfoWindow}>
            <div>
              <h1>{infoWindowState.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyBVojGqziuspOvEmbNm5GvHhp5xt8ThGbk")
})(MapContainer)