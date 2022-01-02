import React, {useState,  useEffect} from "react";
import { Link } from "react-router-dom";
import './filters.css'

const Filters = ({countries, fetchCountries}) => {


    const [filter, setFilter] = useState([]);


    useEffect(() => {
        fetchCountries()
    }, 
    // eslint-disable-next-line
    []);

    const handleSearch = (e) => {
        const toSearch = e.target.value;
       
        
        const filterSearch = countries.filter((value) => {
            return value.name.common.toLowerCase().includes(toSearch.toLowerCase())
        });
        console.log(filterSearch)

        setFilter(filterSearch);
    }



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
                    <select name="countries" defaultValue={"Default"} id="" className="select"> 
                        <option value={"Filter by Region"}  hidden> Filter by Region</option>
                        <option> Africa </option>
                        <option> Africa </option>
                        <option> Africa </option>
                        <option> Africa </option>
                        <option> Africa </option>
                    </select>
                </div> 
            </div>

        </>
     );
}
 
export default Filters;