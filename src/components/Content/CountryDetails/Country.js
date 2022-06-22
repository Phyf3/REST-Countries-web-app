import React,{ useEffect, useState }  from "react";
import { Link, useParams } from "react-router-dom";
import './country.css'
import Skeleton from "./Skeleton";


const Country = () => {

    const [countryDetails, setCountryDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const { name } = useParams();


    const fetchCountryDetails = async () => {
        const res = await fetch (`https://restcountries.com/v3.1/name/${name}`)         
        const data = await res.json()
        setCountryDetails(data)
        setLoading(false);
        console.log(data)
    } 

    useEffect(() => {
        fetchCountryDetails()
    }, [countryDetails])


    const themeName = localStorage.getItem('theme')

    return ( 
        <div className={`${themeName} result-page s_country`}>

            <div className="result-wrapper">
                <Link to="/">
                    <button className="back"> Back </button>
                </Link>
                
                <div>
                    {loading ? 
                        <Skeleton/>
                        : 
                        <div className="result_container">
                            {countryDetails.map(({
                                flags, population, region, name, subregion, capital,
                                tld,borders, languages, currencies
                            }) => (
                                <div className = "result" key={name.common}>
                                    <div className = "result_flag">
                                        <img src={flags.svg} alt="" />
                                    </div>

                                    <div className="result-details" key = {name.common}>
                                        <div>
                                            <h2>  {name.common}</h2>
                                        </div>
                                        
                                        <div>
                                            <span>  <strong>Native Name -  </strong> {name.nativeName ? Object.values(name.nativeName)[0].official : <strong> none </strong>} </span>
                                            <span> <strong>Top Level Domain :</strong> {tld ?  tld.toString() : <strong> none </strong>} </span>
                                            <span> <strong>Population : </strong> {population} </span>
                                            <span>  <strong>Currencies :</strong> {currencies ? Object.values(currencies)[0].name : <strong> none </strong>} </span>
                                            <span>  <strong>Region :</strong> {region} </span>
                                            <span>  <strong>Languages :</strong> {languages ? Object.values(languages)[0] : <strong> none </strong>} </span>
                                            <span> <strong>Sub Region :</strong>  {subregion}</span>
                                            <span> <strong>Capital : </strong> {capital ? capital.toString() : <strong> none </strong>} </span>

                                            {/* <button onClick = {() => console.log(capital[0]) } > Test</button> */}
                                        </div>

                                        {/*<div className="border">
                                            <h3> <strong>Border Countries :</strong>  </h3>
                                                {Array.from(borders, ({border}) => border)}; 
                                        </div>*/}
                                    </div>
                                </div>
                            ))}
                        </div>
                            }
                                            
                </div> 
            </div>


        </div>
     );
}
 
export default Country;