import React from 'react';
import { cashShopInventory } from '../../Data/SharedInventoryData';
import "./SharedInventory.css"

function SubCategory({subCategory, jobs}){
  return <span>{subCategory}: {jobs}</span>
}

function Category({categoryName, category}){

  const subCategories = Object.entries(category)  
    .map(([subCategory, jobs]) =>
      <SubCategory subCategory={subCategory} jobs={jobs}/>
    )

  return <div>
    <label>{categoryName}</label>
    {subCategories}
  </div>
}

export default function SharedInventory() {

  const entries = Object.entries(cashShopInventory)
    .map(([category, jobs])=>
      <Category categoryName={category} category={jobs} />
    );

  return (
    <div className='inventory__container'>
        <h3 style={{marginBottom: "1rem"}}> Shared Cash Shop Inventory</h3>
        <p>
            Only certain class types share a Cash Shop inventory. Below are the classes share this inventory.
        </p>
        {entries}
    </div>
  )
}