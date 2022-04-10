import React from 'react'
import StateCard from './StateCard';
import styles from "./CovidMedium.module.css"

function CovidMedium(props) {
    const finalList = props.covidData.map((value) => {
    return <StateCard
      key={value.id}
      stateName={value.stateName}
      confirmedCases={value.confirmedCases}
      deaths={value.deaths}
      recovered={value.recovered}
    />;
  });
  return (
    <div className={styles.covidContainer}>
    {finalList}
    </div>
  )
}

export default CovidMedium