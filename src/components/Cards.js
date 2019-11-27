import React from 'react';

const Cards =({name,email,id})=>{
    return(
        <div className="tc bg-lightest-blue dib br3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?200x200`} alt="robo avatars"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>

        </div>
    );
}

export default Cards; 