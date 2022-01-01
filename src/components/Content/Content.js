import React from "react";
import AllCountries from "./CountryDetails/AllCountries";
import Filters from "./Filters/Filters";

const Content = () => {
    return ( 
        <div>
            <Filters />

            <AllCountries />
        </div>
     );
}
 
export default Content;