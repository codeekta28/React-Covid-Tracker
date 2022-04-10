import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import StateCard from "./StateCard";
import CovidMedium from "./CovidMedium";
import Loading from "./UI/Loading";

function CovidList(props) {
  // states to store data
  const [covidData, setCovidData] = useState([]);
  const [isLoading,setIsLoading]=useState(false);
  const[error,setError]=useState(null);
  // function to fetch data
  const getCovidData = useCallback(async () => {
      try{
          setIsLoading(true)
        const url = "https://api.rootnet.in/covid19-in/stats/latest";
        const response = await axios.get(url);
        console.log("response", response.data.data.regional);
        const finalData = response.data.data.regional;
        const loadedData = finalData.map((value) => {
          return {
            id: uuidv4(),
            stateName: value.loc,
            confirmedCases: value.confirmedCasesIndian,
            deaths: value.deaths,
            recovered: value.discharged,
          };
        });
        setCovidData(loadedData);
        setTimeout(() => {
            setIsLoading(false)
        }, 2000);
      }catch(error){
        setTimeout(() => {
            setIsLoading(false)
        }, 2000);
        setError(error.message)
      }
    
  }, []);
  //   useEffect to display data initially
  useEffect(() => {
    getCovidData();
  }, [getCovidData]);
  console.log("covid data",covidData);


  return (
      <>
      {isLoading && <Loading/>}
      {error&&<p>Error: {error}</p>}
      {!error && !isLoading && covidData.length===0 && <p>No Data Found</p>}
      {covidData.length>0 && !isLoading && <CovidMedium covidData={covidData}/>}
      </>
  )
}

export default CovidList;
// const finalList = covidData.map((value) => {
//     <StateCard
//       key={value.id}
//       stateName={value.stateName}
//       confirmedCases={value.confirmedCases}
//       deaths={value.deaths}
//       recovered={value.recovered}
//     />;
//   });

