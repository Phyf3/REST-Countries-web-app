import React from "react";
import './filters.css'

const Filters = () => {
    return ( 
        <>
            <div className="filters-container">
                <div className="search-field">
                    <input type="text" placeholder="Search for a Country" />
                </div>

                <div className=" region-filter">
                    <select name="countries" id="" className="select"> 
                        <option value="" disabled selected hidden> Filter by Region</option>
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