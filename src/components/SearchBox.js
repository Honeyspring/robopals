import React from 'react';

const SearchBox =({searchChange,searchField})=>{
    return(
        <div className="pa2">
            <input className="bg-lightest-blue ba pa3 b--blue"
             type= 'search'
             name='searchBox' 
             placeholder='search for pals'
             onChange={searchChange}/>
        </div>
    );
}

export default SearchBox;