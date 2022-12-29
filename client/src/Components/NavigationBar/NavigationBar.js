import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "./Nav.css"

export default function NavigationBar() {
  
  const [ imageType, setImageType ] = useState('png')
  const [ sideBar, setSideBar ] = useState(false)

  function toggleSideBar(){
    setSideBar(prevSideBar => !prevSideBar)
  }

  return (
    <>
      <nav className='nav__bar'>
          <Link to="/">
            <img 
              src={require(`../../images/mushroom.${imageType}`)} 
              id="nav__logo" 
              alt="Mushroom Mascot"
              onMouseEnter={()=>setImageType('gif')}
              onMouseLeave={()=>setImageType('png')}
            />
          </Link>
          <header className='nav__title'>
            <h1>Omok</h1>
            <p>A MapleStory Resource Page</p>
          </header>
          <div id='nav__links'>
            <Link to="/">Home</Link>
            <Link to="/LinksAndLegion">Links Legion</Link>
            <Link to="/TrainingMaps">Training</Link>
            <Link to="/CashShopSharedInventory">Shared CS</Link>
            <Link to="/SignIn" style={{backgroundColor:"#42b72a", color:"white"}}>Sign In</Link>
          </div>
          <img 
            src={require('../../images/menu-icon.png')} 
            alt="menu" 
            id='menu__icon'
            onClick={toggleSideBar}
          />
          <div className='side__bar'
            style={{display: sideBar ? "flex" : "none", alignItems: "center"}}
            onMouseOut={toggleSideBar}
          >
            <Link to="/">Home</Link>
            <Link to="/LinksAndLegion">Links Legion</Link>
            <Link to="/TrainingMaps">Training</Link>
            <Link to="/CashShopSharedInventory">Shared CS</Link>
            <Link to="/SignIn">Sign In</Link>
          </div>
      </nav>
      <img src={require("../../images/banner.png")} id="banner" alt="Reddit Banner"/>
    </>
  )
}