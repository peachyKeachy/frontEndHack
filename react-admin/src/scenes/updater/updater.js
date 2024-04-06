//  Author: Sinowa-Programming
//  Desc: This file takes in data from a firebase database and updates the site
import {Dashboard, updateDashboard} from '../dashboard/index.jsx'
import { setPieData } from '../../data/mockData.js';

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
        
    }

    
    updateDashboard(totals)

    // Generate the pie data
    const pieColors = ["hsl(104, 70%, 50%)", "hsl(162, 70%, 50%)", "hsl(291, 70%, 50%)", "hsl(229, 70%, 50%)","hsl(344, 70%, 50%)"]
    let languageCnt = totals["currentLanguage"].length  // The amount of language in the pie chart

    let languageMakeup = {} // A dictionary that holds the count of every language present from the totals dict
    for(const language in totals["currentLanguage"]) {  // Count the languages
        if( languageMakeup[totals["currentLanguage"][language]] === undefined ) {
            languageMakeup[totals["currentLanguage"][language]] = 1;
        } else {
            languageMakeup[totals["currentLanguage"][language]] += 1
        }
    }

    let pieData = []
    let i = 0;  // indexer for the pie colors
    for( const language in languageMakeup ) {
        pieData.push({  // Add the pie colors to the pie data
            id: language,
            label: language,
            value: (languageMakeup[language]/languageCnt) * 1000,
            color: pieColors[i],
        });
        i += 1;
    }

    setPieData(pieData) // Display the data
}
