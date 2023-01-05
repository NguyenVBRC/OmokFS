import React from 'react';
import { cashShopInventory } from '../../Data/SharedInventoryData';
import "./SharedInventory.css"

export default function SharedInventory() {
    // Explorers
    const explorerInventory = cashShopInventory.map((shared)=>{
        return (
            <div className='inventory__details'>
                <h3>{Object.keys(shared)[0]}</h3>
                {shared.Explorer[0] === null ? <p></p> : <p>{shared.Explorer[0]}</p>}
                {shared.Explorer[1] === null ? <p></p> : <p>{shared.Explorer[1]}</p>}
                {shared.Explorer[2] === null ? <p></p> : <p>{shared.Explorer[2]}</p>}
                {shared.Explorer[3] === null ? <p></p> : <p>{shared.Explorer[3]}</p>}
                {shared.Explorer[4] === null ? <p></p> : <p>{shared.Explorer[4]}</p>}
            </div>
        )
    });

    //Cygnus
    const cygnusInventory = cashShopInventory.map((shared)=>{
        return (
            <div className='inventory__details'>
                <h3>{Object.keys(shared)[1]}</h3>
                {shared.Cygnus[0] === null ? <p></p> : <p>{shared.Cygnus[0]}</p>}
                {shared.Cygnus[1] === null ? <p></p> : <p>{shared.Cygnus[1]}</p>}
                {shared.Cygnus[2] === null ? <p></p> : <p>{shared.Cygnus[2]}</p>}
                {shared.Cygnus[3] === null ? <p></p> : <p>{shared.Cygnus[3]}</p>}
                {shared.Cygnus[4] === null ? <p></p> : <p>{shared.Cygnus[4]}</p>}
            </div>
        )
    });

    //Resistance
    const resistanceInventory = cashShopInventory.map((shared)=>{
        return (
            <div className='inventory__details'>
                <h3>{Object.keys(shared)[2]}</h3>
                {shared.Resistance[0] === null ? <p></p> : <p>{shared.Resistance[0]}</p>}
                {shared.Resistance[1] === null ? <p></p> : <p>{shared.Resistance[1]}</p>}
                {shared.Resistance[2] === null ? <p></p> : <p>{shared.Resistance[2]}</p>}
                {shared.Resistance[3] === null ? <p></p> : <p>{shared.Resistance[3]}</p>}
                {shared.Resistance[4] === null ? <p></p> : <p>{shared.Resistance[4]}</p>}
            </div>
        )
    });

    //Heroes
    const heroesInventory = cashShopInventory.map((shared)=>{
        return (
            <div className='inventory__details'>
                <h3>{Object.keys(shared)[3]}</h3>
                {shared.Heroes[0] === null ? <p></p> : <p>{shared.Heroes[0]}</p>}
                {shared.Heroes[1] === null ? <p></p> : <p>{shared.Heroes[1]}</p>}
                {shared.Heroes[2] === null ? <p></p> : <p>{shared.Heroes[2]}</p>}
                {shared.Heroes[3] === null ? <p></p> : <p>{shared.Heroes[3]}</p>}
                {shared.Heroes[4] === null ? <p></p> : <p>{shared.Heroes[4]}</p>}
            </div>
        )
    });

    //Nova
    const novaInventory = cashShopInventory.map((shared)=>{
        return (
            <div className='inventory__details'>
                <h3>{Object.keys(shared)[4]}</h3>
                {shared.Nova[0] === null ? <p></p> : <p>{shared.Nova[0]}</p>}
                {shared.Nova[1] === null ? <p></p> : <p>{shared.Nova[1]}</p>}
                {shared.Nova[2] === null ? <p></p> : <p>{shared.Nova[2]}</p>}
                {shared.Nova[3] === null ? <p></p> : <p>{shared.Nova[3]}</p>}
                {shared.Nova[4] === null ? <p></p> : <p>{shared.Nova[4]}</p>}
            </div>
        )
    });
 
    //Sengoku
    const sengokuInventory = cashShopInventory.map((shared)=>{
        return (
            <div className='inventory__details'>
                <h3>{Object.keys(shared)[5]}</h3>
                {shared.Sengoku[0] === null ? <p></p> : <p>{shared.Sengoku[0]}</p>}
                {shared.Sengoku[1] === null ? <p></p> : <p>{shared.Sengoku[1]}</p>}
                {shared.Sengoku[2] === null ? <p></p> : <p>{shared.Sengoku[2]}</p>}
                {shared.Sengoku[3] === null ? <p></p> : <p>{shared.Sengoku[3]}</p>}
                {shared.Sengoku[4] === null ? <p></p> : <p>{shared.Sengoku[4]}</p>}
            </div>
        )
    });
 
    //Kinesis
    const kinesisInventory = cashShopInventory.map((shared)=>{
        return (
            <div className='inventory__details'>
                <h3>{Object.keys(shared)[6]}</h3>
                {shared.FriendStory[0] === null ? <p></p> : <p>{shared.FriendStory[0]}</p>}
                {shared.FriendStory[1] === null ? <p></p> : <p>{shared.FriendStory[1]}</p>}
                {shared.FriendStory[2] === null ? <p></p> : <p>{shared.FriendStory[2]}</p>}
                {shared.FriendStory[3] === null ? <p></p> : <p>{shared.FriendStory[3]}</p>}
                {shared.FriendStory[4] === null ? <p></p> : <p>{shared.FriendStory[4]}</p>}
            </div>
        )
    });
 
    //Flora
    const floraInventory = cashShopInventory.map((shared)=>{
        return (
            <div className='inventory__details'>
                <h3>{Object.keys(shared)[7]}</h3>
                {shared.Flora[0] === null ? <p></p> : <p>{shared.Flora[0]}</p>}
                {shared.Flora[1] === null ? <p></p> : <p>{shared.Flora[1]}</p>}
                {shared.Flora[2] === null ? <p></p> : <p>{shared.Flora[2]}</p>}
                {shared.Flora[3] === null ? <p></p> : <p>{shared.Flora[3]}</p>}
                {shared.Flora[4] === null ? <p></p> : <p>{shared.Flora[4]}</p>}
            </div>
        )
    });
 
    //Zero
    const zeroInventory = cashShopInventory.map((shared)=>{
        return (
            <div className='inventory__details'>
                <h3>{Object.keys(shared)[8]}</h3>
                {shared.Transcendant[0] === null ? <p></p> : <p>{shared.Transcendant[0]}</p>}
                {shared.Transcendant[1] === null ? <p></p> : <p>{shared.Transcendant[1]}</p>}
                {shared.Transcendant[2] === null ? <p></p> : <p>{shared.Transcendant[2]}</p>}
                {shared.Transcendant[3] === null ? <p></p> : <p>{shared.Transcendant[3]}</p>}
                {shared.Transcendant[4] === null ? <p></p> : <p>{shared.Transcendant[4]}</p>}
            </div>
        )
    });
 
    //Anima
    const animaInventory = cashShopInventory.map((shared)=>{
        return (
            <div className='inventory__details'>
                <h3>{Object.keys(shared)[9]}</h3>
                {shared.Anima[0] === null ? <p></p> : <p>{shared.Anima[0]}</p>}
                {shared.Anima[1] === null ? <p></p> : <p>{shared.Anima[1]}</p>}
                {shared.Anima[2] === null ? <p></p> : <p>{shared.Anima[2]}</p>}
                {shared.Anima[3] === null ? <p></p> : <p>{shared.Anima[3]}</p>}
                {shared.Anima[4] === null ? <p></p> : <p>{shared.Anima[4]}</p>}
            </div>
        )
    });
 
    //Beast Tamer
    const chaseInventory = cashShopInventory.map((shared)=>{
        return (
            <div className='inventory__details'>
                <h3>{Object.keys(shared)[9]}</h3>
                {shared.Chase[0] === null ? <p></p> : <p>{shared.Chase[0]}</p>}
                {shared.Chase[1] === null ? <p></p> : <p>{shared.Chase[1]}</p>}
                {shared.Chase[2] === null ? <p></p> : <p>{shared.Chase[2]}</p>}
                {shared.Chase[3] === null ? <p></p> : <p>{shared.Chase[3]}</p>}
                {shared.Chase[4] === null ? <p></p> : <p>{shared.Chase[4]}</p>}
            </div>
        )
    });
 
  return (
    <div className='inventory__container'>
        <h3 style={{marginBottom: "1rem"}}> Shared Cash Shop Inventory</h3>
        <p>
            Only certain class types share a Cash Shop inventory. Below are the classes share this inventory.
        </p>
        {explorerInventory}
        {cygnusInventory}
        {resistanceInventory}
        {heroesInventory}
        {novaInventory}
        {sengokuInventory}
        {kinesisInventory}
        {floraInventory}
        {zeroInventory}
        {animaInventory}
        {chaseInventory}
    </div>
  )
}
