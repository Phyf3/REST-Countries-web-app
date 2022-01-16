import React, {useState, useEffect} from "react";
import './allcountries.css'
import Skeleton from "./Skeleton";
import { Link } from "react-router-dom";
import Filters from "../Filters/Filters";


const AllCountries = () => {

    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);



    const fetchCountries = async() => {
        const res = await fetch (`https://restcountries.com/v3.1/all`)
        const data = await res.json()
        setCountries(data)
        setLoading(false);
    }

    useEffect(() => {
        fetchCountries()
    }, []); 

   

    return ( 
        <>
        
        { loading ? 
            <div>
                <Skeleton />
            </div> 
            :
            <main className="page" >
                <div>
                    <Filters  countries={countries}  setCountries = {setCountries}
                        fetchCountries={fetchCountries}
                        loading={loading}
                    />
                </div>
                
                <div className=" countries-container ">
                    {countries.map(({flags, name, population, region, capital}) => (
                        <Link to={`countries/${name.common}`}  className="link" key={name.common}> 
                                <div className="country-card-wrapper">
                                    <div className="country-card">
                                        <div className="country-flags">
                                            <img src={flags.svg} alt="" />
                                        </div>

                                        <div className="country-info">
                                            <h2> {name.common} </h2>
                                            <p> <strong>Population:</strong>  {population} </p>
                                            <p> <strong>Region: </strong> {region} </p>
                                            <p>  <strong>Capital:</strong>  {capital}</p>
                                        </div>
                                    </div>
                                </div>
                        </Link>
                    ))}
                </div>
            </main>
        }

        </>
     );
}
 
export default AllCountries;