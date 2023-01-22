import "./Tracker.css"

import React, { useEffect, useRef, useState } from 'react'

function Tracker() {
    const [reminder, setReminder] = useState([]);
    const input = useRef();

    let reminderItems = reminder.map(reminder => {
        // Create a way to delete a specific reminder
        return (
            <div id="reminder__container">
                <p key={reminder}>{reminder}</p>
            </div>
        )
    })

    function handleSubmit(e){
        let inputText = input.current.value;
        if (input.current.value !== null && input.current.value !== " "){ 
            e.preventDefault();
            setReminder([...reminder, inputText]);
            input.current.value = null;
        }
        localStorage.setItem(reminder.length, inputText)
        console.log(localStorage)
    }

    function clear(){
        localStorage.clear();
        setReminder([])
    }

    useEffect(()=>{
        setReminder(Object.values(localStorage));
        console.log(localStorage)
    },[])

  return (
    <div className="tracker__container">
        <h3 id="tracker__title">Tracker</h3>
        <div id="reminder__items">{reminder.length === 0 ? <p>No Items to Track</p> : reminderItems}</div>
        <div id="tracker__events">
            <input type="text" ref={input}/>
            <button onClick={e => handleSubmit(e)}>Add Reminder</button>
            <button onClick={clear}>Clear</button>
        </div>
    </div>
  )
}

export default Tracker
