import React, { use, useState } from "react";
import Country from "../Country/country";
import './countries.css'

const Countries = ({ countriesFetch }) => {

    // Lift up state
    const [visitedCountry, setVisitedCountry] = useState([]);
    const [countryFlag, setCountryFlag] = useState([]);

    const showTotalCountry = (country) => {
        // console.log('total country is called', country)
        
        //using spread operator:
        const spread = [...visitedCountry, country];
        setVisitedCountry(spread);
    }

    const showCountryFlag = (flag) => {
        const newFlag = [...countryFlag, flag];
        setCountryFlag(newFlag);
    }

    const countriesData = use(countriesFetch); //call
    const countries = countriesData.countries; //call - convert
    
  return (
    <div >
      <h1> Total Countries: {countries.length} </h1>

      {/* total visited country  */}
      <h3>Total Visited Country: {visitedCountry.length} </h3>
      {/* flag length */}
      <h3>Visited Country Flag: {countryFlag.length} </h3>

      {/* apply loop to show the specific flag/data */}
      <div className="total-flag-design">
        {
        countryFlag.map((flag, index) => <img key={index} src={flag}></img>)
        }
      </div>

      {/* apply loop to show the specific name/data */}
      <ol>
         {
            visitedCountry.map(country => <li key={country.ccn3.ccn3}>{country.name.common}</li>)
         }
      </ol>

      <div className="countries">
        {
        countries.map(country => <Country 
            key={country?.ccn3?.ccn3}
            country={country}
            showTotalCountry = {showTotalCountry}
            showCountryFlag = {showCountryFlag}
            ></Country>)
        }
      </div>
    </div>
  );
};

export default Countries;
