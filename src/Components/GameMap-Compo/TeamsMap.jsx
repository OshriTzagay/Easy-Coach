import React, { useEffect } from "react";
import "./fields-stats.css";
import { useState } from "react";
export default function Puebla({juarez,puebla}) {
    const [Team, setTeam] = useState(puebla);
const [toggle,setToggle]= useState(false);

const toggleTeams = ()=>{
    toggle ? setTeam(juarez) : setTeam(puebla);
    setToggle(!toggle);
}
  return (
    <>
<button className="toggleBtn" onClick={toggleTeams}>Show Rivalry Team</button>

   <h1>Field Stats</h1>
    <h1>{Team.Name}</h1>
      <div className="Wrapper">
        {Team.Shots.map((team,key) => (
          <div className="Wembley"key={key}>
          <div className={team.isGoal?'goals':"spots"} style={{marginLeft:team.Position[0],marginTop:team.Position[1]}}>
            
          </div>
        </div>
          ))}
        <img
        className="pitch"
        src={Team.FieldImg}  
        alt=""
        />
     
      </div>

<div>

  <h1>Puebla - Juarez </h1>
  <h2>2-1</h2>
</div>
   

   
    </>
  );
}
