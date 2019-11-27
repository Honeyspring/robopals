import React from 'react';
import Cards from './Cards';

//when doing a looping a unique key is needed so as to identify each item uniquely
const CardList =({robots})=>{
const cardArray = robots.map((user,i)=>{
        return <Cards 
        key={i}
        id={robots[i].id} 
        name={robots[i].name} 
        email={robots[i].emails} />;
        });
    return(
        <div>
    {cardArray}
    </div>
    );
} 
export default CardList;