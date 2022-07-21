import React from 'react'
import './Header.css'
import {HiShoppingCart} from 'react-icons/hi'
import {FaSun, FaMoon} from 'react-icons/fa'



const Header = ({myTheme, onToggleTheme, onSwitch}) => {
  return (
    <header data-theme = {myTheme}>
        <div className="container --flex-between ">
        <div className="logo">
            <a href="#"><HiShoppingCart size={45} color='var(--color-orange)'></HiShoppingCart>
            <p>DivShop</p></a>
        </div>

        <div className="header-menu">
            <ul className="nav --flex-between">
                <li><a href="#">Home</a></li>

                <li><a href="">Contact</a></li>
            </ul>
        </div>


        <div className="toggle-icon" onClick={onToggleTheme}> 
            <span className="toggle-btn"> 
                <FaMoon color='pink'  size={16}></FaMoon>
                <FaSun color='yellow'  size={16}></FaSun> 
                <div className={onSwitch ? 'ball shift' : 'ball'}></div>
                 </span> 
                
               
        </div>
        </div>
    </header>
  )
}

export default Header