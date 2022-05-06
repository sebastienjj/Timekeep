import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { useState } from 'react';

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
        setSelectedCounty({
            id: props.id,
            state: props.state,
            county: props.county,
            county_code: props.county_code,
            score: props.score,
            maps: props.maps,
            position: props.position
          })
        
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
            state: "-------",
            county: "---",
            county_code: '--',
            score: '-',
            maps: [
                {
                  title: '',
                  url: ''
                },
                {
                  title: '',
                  url: ''
                },
                {
                  title: '',
                  url: ''
                },
                {
                  title: '',
                  url: ''
                }
            ],   
            position: {}
        })
    }

    const markerData = props.countyData.map((countyData) => {
        return(
        <Marker id={countyData.id}
                onClick={onMarkerClick}
                state={countyData.state}
                county={countyData.county}
                name={`${countyData.county}
                Score:\n${countyData.score}`}
                score={countyData.score}
                county_code={countyData.county_code}
                maps={countyData.maps}
                position={countyData.position}
        />)
    })

    const mapStyle={margin: "25%", display: "block", height: "450px", width: "600px"}

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