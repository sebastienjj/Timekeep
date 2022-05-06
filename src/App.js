import {Map, InfoWindow, Marker} from 'google-maps-react';
import React, { useState, useEffect } from 'react';
import GoogleApiWrapper from './MyMapComponent';


function App() {

  const [countyData, setCountyData] = useState([
    {
      id: '0',
      state: 'MA',
      county: 'Norfolk',
      county_code: 25021,
      score: 0,
      maps: [],
      position: {lat:42.1667652, lng:-71.2494989}
    },
    {
      id: '1',
      state: 'MA',
      county: 'Suffolk',
      county_code: 25021,
      score: 0,
      maps: [],
      position: {lat:42.35892, lng:-71.05781}
    }
  ])

  const [selectedCounty, setSelectedCounty] = useState({
    id: "",
    state: "",
    county: "",
    county_code: 0,
    score: 0,
    maps: [],
    position: {}
  })



  return (
    <div>
      <GoogleApiWrapper 
         countyData={countyData}
         selectedCounty={selectedCounty}
         setSelectedCounty={setSelectedCounty}/>
    </div>
  );
}

export default App;
