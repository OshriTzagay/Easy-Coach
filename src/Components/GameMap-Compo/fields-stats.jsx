import React, { useState } from "react";
import "./fields-stats.css";
import TeamsMap from './TeamsMap'
const TeamsStats = [
  {
    Name: "Puebla F.C",
    FieldImg:"https://static1.bigstockphoto.com/1/7/1/large1500/171173843.jpg",
    Shots: [
      { Shot: 1, Description: "25meters", isGoal: false,Position:[376,360] },//[x,y,other if needed]] 
      { Shot: 2, Description: "50meters", isGoal: false,Position:[420,470] },
      { Shot: 3, Description: "15", isGoal: false,Position:[335,465] },
      { Shot: 4, Description: "100meters", isGoal: true,Position:[435,510],scorer:"Leo Messi" },
      { Shot: 5, Description: "100meters", isGoal: false,Position:[265,400] },
      { Shot: 6, Description: "100meters", isGoal: true,Position:[310,390],scorer:"Baruch Dego" },
      { Shot: 7, Description: "100meters", isGoal: false,Position:[470,395] },  
      { Shot: 8, Description: "100meters", isGoal: false,Position:[490,375] },  
      { Shot: 9, Description: "100meters", isGoal: false,Position:[440,335] },  
      { Shot: 10, Description: "100meters", isGoal: false,Position:[340,280] },  
    ],
  },
  {
    Name: "Juarez F.C",
    FieldImg:"https://static1.bigstockphoto.com/1/7/1/large1500/171173843.jpg",
    Shots: [
      { Shot: 1, Description: "25meters", isGoal: true,Position:[250,360] },//[x,y,other if needed]] 
      { Shot: 2, Description: "50meters", isGoal: false,Position:[460,250] },
    ],
  },
];


export default function GameMaps() {
  const [puebla,setPuebla]= useState(TeamsStats[0]);
  const [juarez,setJuarez]= useState(TeamsStats[1]);

  return (
    <>
  <TeamsMap puebla={puebla} juarez={juarez}/>
    </>
  );
}
