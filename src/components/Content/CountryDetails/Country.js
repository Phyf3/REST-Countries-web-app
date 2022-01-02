import React,{ useEffect, useState }  from "react";
import { Link, useParams } from "react-router-dom";
import './country.css'


const Country = () => {

    const [countryDetails, setCountryDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const { name } = useParams();



    useEffect(() => {
        const fetchCountryDetails = async () => {
            const res = await fetch (`https://restcountries.com/v3.1/name/${name}`)         
            const data = await res.json()
            setCountryDetails(data)
            setLoading(false);
            console.log(data)
        } 
        fetchCountryDetails()
    }, [name])






    return ( 
        <div className="result-page">

            <div className="result-wrapper">
                <Link to="/">
                    <button className="back"> Back </button>
                </Link>
                

                <div>
                    {loading ? 
                        <h2> I dey find details....... </h2> 
                        : 
                        <div className="result_container">
                            {countryDetails.map(({flags, population, region, name}) => (
                                <div className = "result" key={name.common}>
                                    <div className = "result_flag">
                                        <img src={flags.svg} alt="" />
                                    </div>

                                    <div className="result-details">
                                        <div>
                                            <h2>  {name.common}</h2>
                                        </div>
                                        
                                        <div>
                                            <span>Native Name: </span>
                                            <span> Top Level Domain: </span>
                                            <span>Population: {population} </span>
                                            <span>Currencies: </span>
                                            <span>Region: {region} </span>
                                            <span>Languages:</span>
                                            <span>Sub Region: {}</span>
                                            <span>Capital: </span>
                                        </div>

                                        <div>
                                            <h2> Border Countries : </h2>
                                            <button></button>
                                            <button></button>
                                            <button></button>
                                        </div>
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