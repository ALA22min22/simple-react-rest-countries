import React, { useState } from "react";
import './country.css'

const Country = ({ country, showTotalCountry, showCountryFlag }) => {

    // console.log(showTotalCountry);
    

    const [visited, setVisited] = useState(false);

    // console.log(country.area.area);

    const handleVisited = () => {
        
        // system 1:
        // if(visited){
        //     setVisited(false);
        // }
        // else{
        //     setVisited(true);
        // }

        // system 2:
        // visited ? setVisited(false) : setVisited(true)

        // system 3:
        setVisited(!visited);

        //-------------

        // Pass handler as props <- and props is a function so, call the props/function **
        // * into another function.
        showTotalCountry(country);
        

    };

  return (
    // <div className={`country ${visited && 'country-visited'}`}>
    <div className={`country ${visited && 'country-visited'}`}>
        <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common} </h3>
      <p>Population: {country.population.population} </p>
      <p>Region: {country.region.region} </p>

      <p>Area: {country.area.area} {" "} -
      {country.area.area > 300000 ? 'Big Country' : 'Small Country'} </p>
      <button onClick={ handleVisited } >{visited ? 'Visited' : 'Not Visited'}</button>
      <button onClick={() => {showCountryFlag(country?.flags?.flags?.png)} }>Add visited Flag</button>

    </div>
  );
};

export default Country;
