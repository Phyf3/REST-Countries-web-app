import React,{ useEffect, useState }  from "react";
import { Link, useParams } from "react-router-dom";
import './region.css'
import './country.css'



const Region = () => {

    const [filterRegion, setFilterRegion] = useState([]);
    const [loading, setLoading] = useState(true);
    const { region } = useParams()


    useEffect(() => {
        const fetchRegion = async () => {
            const res = await fetch (`https://restcountries.com/v3.1/region/${region}`)         
            const data = await res.json()
            setFilterRegion(data)
            setLoading(false);
            console.log(data)
        } 
        fetchRegion()
    }, [region])

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
                            {filterRegion.map(({
                                flags, population, region, name,subregion, capital,
                                tld,borders, languages, currencies

                            }) => (
                                <div className = "result" key={name.common}>
                                    <div className = "result_flag">
                                        <img src={flags.svg} alt="" />
                                    </div>

                                    <div className="result-details">
                                        <div>
                                            <h2>  {name.common}</h2>
                                        </div>
                                        
                                        <div>
                                            <span>  <strong>Native Name -  </strong> {Object.values(name.nativeName)[0].official} </span>
                                            <span> <strong>Top Level Domain :</strong> {tld.toString()} </span>
                                            <span> <strong>Population : </strong> {population} </span>
                                            <span>  <strong>Currencies :</strong> {Object.values(currencies)[0].name} </span>
                                            <span>  <strong>Region :</strong> {region} </span>
                                            <span>  <strong>Languages :</strong> {Object.values(languages)[0]} </span>
                                            <span> <strong>Sub Region :</strong>  {subregion}</span>
                                            <span> <strong>Capital : </strong> {capital.toString()} </span>
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
 
export default Region;