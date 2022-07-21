import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Hero from './Components/Hero';
import useLocalStorage from 'use-local-storage';
import { useState, useEffect } from 'react';


function App() {

  const [theme, setTheme] = useLocalStorage('theme', 'light')

   const [toggle, setToggle] = useState(false)

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : "light")
    setToggle(!toggle)
  
  } 

  useEffect(() => {
    if(theme === 'dark'){
      setToggle(true)
    }
  })
  

  return (
    <main>
    <Header myTheme={theme} onToggleTheme={toggleTheme} onSwitch={toggle} ></Header>
    <Hero myTheme={theme}></Hero>
    <Footer myTheme={theme}></Footer>

    </main>
  )
}

export default App;
