import React from "react";
import sun from '../../images/icon-sun.svg';
import moon from '../../images/icon-moon.svg'

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
                {theme === 'light-theme' ? 
                <img src={sun} alt="" />  : 
                <img src={moon} alt="" /> }

            </button>
        </div>
     );
}
 
export default Toggle;