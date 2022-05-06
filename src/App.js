import {Map, InfoWindow, Marker} from 'google-maps-react';
import React, { useState, useEffect } from 'react';
import GoogleApiWrapper from './MyMapComponent';
import InfoBox from './InfoBoxComponent';
import RankingList from './OrderedListComponent';


function App() {

  const [countyData, setCountyData] = useState([
    {
      id: '0',
      state: 'MA',
      county: 'Norfolk',
      county_code: 25021,
      score: 0,
      maps: [
        {
          title: 'Cat',
          url: 'https://animalpath.org/wp-content/uploads/2021/02/Do-Cats-Have-Belly-Buttons.jpg'
        }
      ],
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



  return (
    <div>
      <GoogleApiWrapper 
         countyData={countyData}
         selectedCounty={selectedCounty}
         setSelectedCounty={setSelectedCounty}/>
      <RankingList 
         countyData={countyData}
         selectedCounty={selectedCounty}
         setSelectedCounty={setSelectedCounty}/>
      <InfoBox 
         selectedCounty={selectedCounty}/>
    </div>
  );
}

export default App;
