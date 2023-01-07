import React from 'react';
import { cashShopInventory } from '../../Data/SharedInventoryData';
import "./SharedInventory.css"

// SharedInventoryData
// Explorer:
//    Warrior: Hero

// Class/Main Category = Explorer
// Sub Class/Sub Category = Warrior
// Job = Hero



//Class/Main Category
function Category({categoryName, category}){
  const subCategories = Object.entries(category)  
  .map(([subCategory, jobs]) =>
  <SubCategory key={subCategory} subCategory={subCategory} jobs={jobs}/>
  )
  return <div>
    <h1 id='class__label'>{categoryName}</h1>
    {subCategories}
  </div>
}

//Sub Class/Sub Category
function SubCategory({subCategory, jobs}){
  return <p><span id='subclass__indicator'>{subCategory}</span>: {jobs}</p>
}

export default function SharedInventory() {
  // Returns the the Categories and the nested Categories
  const entries = Object.entries(cashShopInventory)
    .map(([category, jobs])=>
      <div className='category__container'>
        <Category categoryName={category} category={jobs} />
      </div>
    );

  return (
    <div className='inventory__container'>
        <h3 style={{marginBottom: "1rem"}}> Shared Cash Shop Inventory</h3>
        <p>
            Only certain class types share a Cash Shop inventory. Below are the classes share this inventory.
        </p>
        <div className='entries__container'>
          {entries}
        </div>
    </div>
  )
}