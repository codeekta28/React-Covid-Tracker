import React from "react";
import styles from "./StateCard.module.css";
import {randomColorGenerator} from "./Helper"

function StateCard(props) {
    
   
  return (
    <div className={styles.card} style={{backgroundColor:randomColorGenerator()}}>
      <h1 style={{backgroundColor:"green"}}>{props.stateName}</h1>
      <h2>Confirmed Cases:{props.confirmedCases}</h2>
      <h2 style={{color:"red"}}>Death:{props.deaths}</h2>
      <h2>Recoverd:{props.recovered}</h2>
    </div>
  );
}

export default StateCard;
