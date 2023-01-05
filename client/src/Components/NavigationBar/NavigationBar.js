import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "./Nav.css"

export default function NavigationBar() {
  
  const [ imageType, setImageType ] = useState('png');

  return (
    <>
      <nav className='nav__bar'>
          <Link to="/OmokFS">
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
            <Link to="/OmokFS">Home</Link>
            <Link to="/LinksAndLegion">Links Legion</Link>
            <Link to="/TrainingMaps">Training</Link>
            <Link to="/CashShopSharedInventory">Shared CS</Link>
            <Link to="/SignIn" style={{backgroundColor:"#42b72a", color:"white"}}>Sign In</Link>
          </div>
          <div className='side__bar'>
            <Link to="/OmokFS">
              <img src={require("../../images/home.png")} alt="home"/>
              <span>Home</span>
            </Link>
            <Link to="/LinksAndLegion">
              <img src={require("../../images/link.png")} alt="link"/>
              <span>Links and Legion</span>
            </Link>
            <Link to="/TrainingMaps">
              <img src={require("../../images/maps.png")} alt="training maps"/>
              <span>Training Maps</span>
            </Link>
            <Link to="/CashShopSharedInventory">
              <img src={require("../../images/storage.png")} alt="cash shop storage"/>
              <span>Shared Cash Shop</span>
            </Link>
            <Link to="/SignIn">
              <img src={require("../../images/profile.png")} alt="profile"/>
              <span>Log In</span>
            </Link>
          </div>
      </nav>
      <img src={require("../../images/banner.png")} id="banner" alt="Reddit Banner"/>
    </>
  )
}