import React from "react";
import Toggle from "./Toggle";
import './Header.css'

const Header = ({toggleTheme,theme }) => {
    return ( 
        <>
            <header className="header">
                <div>
                    <h2>
                        Where in the world
                    </h2>
                </div>

                <div>
                    <Toggle toggleTheme = {toggleTheme} theme = {theme}/>
                </div>
            </header>
        </>
     );
}
 
export default Header;