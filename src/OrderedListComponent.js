import React, { useState } from 'react';
import ListItem from './ListItemComponent';

function RankingList(props){

    let test2 = "uhoh"

    const test = (e) => {
        debugger
    }

    const listItemData = props.countyData.map((countyData) => {
        return(
        <ListItem id={countyData.id}
                state={countyData.state}
                county={countyData.county}
                score={countyData.score}
                county_code={countyData.county_code}
                maps={countyData.maps}
                position={countyData.position}
        />)
    })

    return(
      <a onClick={test}>{test2}</a>
    )
}

export default RankingList