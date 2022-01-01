import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import { useState } from 'react';

export const ThemeContext = React.createContext();

const themes = {
  light: {background : 'hsl(0, 0%, 98%)', color: 'hsl(200, 15%, 8%)'},
  dark: {background : 'hsl(207, 26%, 17%)', color: 'hsl(0, 0%, 100%)'}
}



function App() {

  const [theme, setTheme] = useState('dark')

  const toggleTheme = () =>  {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const providerValue = {theme : themes[theme], toggleTheme}

  return (
    <div className={theme}>
      <ThemeContext.Provider value = {providerValue}>
         <Header />

        <Content />
      </ThemeContext.Provider>
       
    </div>
  );
}

export default App;
