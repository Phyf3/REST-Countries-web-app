import React from "react";
import Toggle from "./Toggle";
import './Header.css'

const Header = () => {
    return ( 
        <>
            <header className="header">
                <div>
                    <h2>
                        Where in the world
                    </h2>
                </div>

                <div>
                    <Toggle />
                </div>
            </header>
        </>
     );
}
 
export default Header;