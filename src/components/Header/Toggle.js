import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../App";

const Toggle = () => {
    const theme = useContext(ThemeContext);

    return ( 
        <div>
            <button onClick={theme.toggleTheme}> Toggle </button>
        </div>
     );
}
 
export default Toggle;