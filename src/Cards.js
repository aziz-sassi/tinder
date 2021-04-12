import React from 'react';
import './Cards.css'
import  { useEffect, useState } from "react";
import TinderCard from 'react-tinder-card';


function Cards() {

    const [people,setPeople] = useState([
        {
            name : "fady bel y",
            url : "https://scontent.ftun3-1.fna.fbcdn.net/v/t1.6435-1/c0.231.588.588a/s320x320/138187231_5421871871160038_8213134546578621285_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=7206a8&_nc_ohc=qmMjDHOdvtYAX8c3PMf&_nc_ht=scontent.ftun3-1.fna&tp=28&oh=73f61ab9e81b8d7cd74d64937f5b1c88&oe=60974A02",
        },
        {
            name : "abir moussi",
            url : "https://lh3.googleusercontent.com/proxy/wwretuHjkFfdlq04Bdn3uXHGlByr67wiPg2diHnqmovetRlKDzUBI72fHLr36-ph07OCL3PDv4GUyJHx8T3K4z0TTK4Edj3go_YzgMXRzUaJQ6S4_PaNtTtCU435q_lBLQ",
        },
       
    ]);
    const swiped = (direction, nameToDelete)=> {
        console.log("removing" + nameToDelete);
        // setLastDirection(direction);
    }
    const outOfFrame = (name) => {
        console.log(name + "left the screen!");
    }
    return (
        <div className = "tinder_cards">
        <div className="tinderCards_cardsContainer">


        
        {people.map((person)=>(
            <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up","down"]}
            onSwipe ={(dir) => swiped(dir , person.name)}
            onCardLeftScreen ={()=> outOfFrame(person.name)}>
<div 
style = {{backgroundImage : `url(${person.url})`}}
className="card"
>
<h3>{person.name}</h3>
    
</div>

        </TinderCard>
       
        ))}
        </div> 
        </div>
    )
}

export default Cards
