import React, {useState, useEffect} from "react";
import './allcountries.css'
import Skeleton from "./Skeleton";

const AllCountries = () => {

    /*const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCountries = async() => {
        const res = await fetch (`https://restcountries.com/v3.1/all`)
        const data = await res.json()
        setCountries(data)
        setLoading(false);
    }

    useEffect(() => {
        fetchCountries()
    }, []);*/

    return ( 
        <div>
            <Skeleton />
        </div>

        
     );
}
 
export default AllCountries;