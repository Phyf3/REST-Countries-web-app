import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import { useState } from 'react';
import { useEffect } from 'react';
import { ThemeContext } from './helper/themecontext';



function App() {

  const [theme, setTheme] = useState(false)
  const [themeName, setThemeName] = useState('light-theme')
  const [filtered, setFiltered] = useState(false)
  const [regionName, setRegionName] = useState('')
  const toggleTheme = () => {
    setTheme(!theme)
  }

  useEffect(() => {
    if(theme) {
      setThemeName('light-theme')
    } else {
      setThemeName('dark-theme')
    }
  }, [theme])


  return (
    <ThemeContext.Provider value = {{themeName, filtered, setFiltered, regionName, setRegionName}}>
      <div className={themeName}>
          <Header toggleTheme = {toggleTheme} theme = {theme} />
    
          <Content />       
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
