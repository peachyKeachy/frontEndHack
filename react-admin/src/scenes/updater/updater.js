//  Author: Sinowa-Programming
//  Desc: This file takes in data from a firebase database and updates the site
import Dashboard from '../dashboard/index.jsx'


const goals = {
    "keyCounter":0, 
    "keyPressHistory" : "",
    "totalTimeInFocus" : 0,
    "totalTimeOutFocus" : 0,
    "currentLanguage" : [],
    "linesAdded" : 0,
    "linesRemoved" : 0,
}



export const updateSite = ( data ) => {
    let totals={ 
        "keyCounter":0, 
        "keyPressHistory" : "",
        "totalTimeInFocus" : 0,
        "totalTimeOutFocus" : 0,
        "currentLanguage" : [],
        "linesAdded" : 0,
        "linesRemoved" : 0,
    };
    
    for (const key in data) {
        const value = data[key];
        totals["keyCounter"] += value["keyCounter"];
        totals["keyPressHistory"] += value["keyPressHistory"];
        totals["totalTimeInFocus"] += value["totalTimeInFocus"];
        totals["totalTimeOutFocus"] += value["totalTimeOutFocus"];
        totals["currentLanguage"].push(value["currentLanguage"]);
        totals["linesAdded"] += value["linesAdded"];
        totals["linesRemoved"] += value["linesRemoved"];
        
        // console.log(`${key}: ${value}`);a
    }

    console.log(totals)
    console.log(Dashboard.linesAdded)
    // document.getElementById('linesRemoved').title = totals["linesRemoved"];


}
