import React from 'react';
import { Link } from "react-router-dom"
// import { classLinksLegion } from '../../Data/LinksLegionData';
import "./Home.css"
import legion from "../../images/legion.png"
import hhg1 from "../../images/hhg1.png"
import cashshop from "../../images/cashshop.png"

export default function Home() {

  return (
    <div className='grid__container'>
        <section className='content__display'>
          <Link to="/LinksAndLegion">
            <h1>Links and Legion</h1>
            <div className='inner__display'>
              <img src={legion} alt="legion card" />
            </div>
          </Link>
        </section>

      <section  className='content__display'>
        <Link to="/TrainingMaps">
          <h1>Training Maps</h1>
          <div className='inner__display'>
            <img src={hhg1} alt="legion card" />
          </div>
        </Link>
      </section>

      <section  className='content__display'>
        <Link to="/CashShopSharedInventory">
          <h1>Shared Cash Shop</h1>
          <div className='inner__display'>
            <img src={cashshop} alt="legion card" />
          </div>
        </Link>
      </section>
    </div>
  )
}
