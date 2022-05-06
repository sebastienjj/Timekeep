import React, { useState } from 'react';

function InfoBox(props){
    const selectedCounty = props.selectedCounty
    return(
        <div style={{width: "400px", height: "400px"}}>
            <div>
                <h2>{selectedCounty.state}</h2>
                <h4>{selectedCounty.county}</h4>
                <h6>{selectedCounty.county_code}</h6>
                <h3>Score:</h3>
                <h1>{selectedCounty.score}</h1>
            </div>
            <div>
                <div>
                    <img src={selectedCounty.maps[0].url} title={selectedCounty.maps[0].title} />
                    <p>{selectedCounty.maps[0].title}</p>
                </div>
                <div>
                    <img src={selectedCounty.maps[0].url} title={selectedCounty.maps[0].title} />
                    <p>{selectedCounty.maps[0].title}</p>
                </div>
                <div>
                    <img src={selectedCounty.maps[0].url} title={selectedCounty.maps[0].title} />
                    <p>{selectedCounty.maps[0].title}</p>
                </div>
                <div>
                    <img src={selectedCounty.maps[0].url} title={selectedCounty.maps[0].title} />
                    <p>{selectedCounty.maps[0].title}</p>
                </div>
            </div>
        </div>
    )

}

export default InfoBox