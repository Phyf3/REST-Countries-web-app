import React from "react";
import sun from '../../images/sun.svg'
import moon from '../../images/moon.svg'

const Toggle = ({toggleTheme,theme }) => {
    return ( 
        <div>
            <button
                className="theme-toggle"
                title="Toggle Light and Dark mode"
                aria-label = "auto"
                aria-live="polite"
                onClick = {toggleTheme}
            >
                {theme ? 
                <img src={sun} alt="" />  : 
                <img src={moon} alt="" /> }

            </button>
        </div>
     );
}
 
export default Toggle;