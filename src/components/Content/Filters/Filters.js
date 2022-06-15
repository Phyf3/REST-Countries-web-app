import React, {useState,  useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import './filters.css'
import { ThemeContext } from "../../../helper/themecontext";


const Filters = ({ countries, fetchCountries, setCountries}) => {

    useEffect(() => {
        fetchCountries()
    }, 
    // eslint-disable-next-line
    []);

    const {setRegionName,setFiltered, filtered} = useContext(ThemeContext)

    const [filter, setFilter] = useState([]);

    const handleSearch = (e) => {
        const toSearch = e.target.value;

        const filterSearch = countries.filter((value) => {
            return value.name.common.toLowerCase().includes(toSearch.toLowerCase())
        });

        //console.log(filterSearch)
        setFilter(filterSearch);
    }


    const handleRegion = (value) => {
        setRegionName(value)
        setFiltered(!filtered)
    }


    useEffect(() => {
        if(filtered) {
            console.log("yipee")
        }
    }, [filtered])

    //Getting all regions
    const regionsInDuplicates = countries.map(({region}) => (
        region
    ))

    //Eliminating duplicate/repeating words and sorting them in ascending order
    const singleRegions = [...new Set(regionsInDuplicates)].sort()

    return ( 
        <>
            <div className="filters-container">
                <div className="search-field">
                    <input type="text" placeholder="Search for a Country" onChange={handleSearch}/>

                    {filter.length !== 0 && (
                        <div className="searchlist">
                            {filter.map((search) => (
                                
                                    <div key={search.name.commmon}>
                                        <Link className="link" to={`countries/${search.name.common}`} key={search.common} >
                                            <p> {search.name.common} </p>
                                        </Link>
                                        
                                    </div>

                            ))}
                        </div>
                    )}
                </div>

                <div className=" region-filter">
                    <select onChange={(e) => handleRegion(e.target.value) } className="select"> 
                        <option value={"Filter by Region"}  hidden> Filter by Region</option>
                            
                        {singleRegions.map((region) => (
                            <option key = {region} value = {region}>  
                                {region} 
                            </option>
                        ))}
                    </select>        
                </div> 
            </div>

        </>
     );
}
 
export default Filters;