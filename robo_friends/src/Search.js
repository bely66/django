import React from 'react'; 

const Search = ({searchfield,change}) => {
    return (
    <div className= "pa3 ma5 shadow-5 bg=light-green">
    <input type="search" placeholder = 'Search friends' onChange={change} />
    </div>
    );
    
    
    
}
export default Search ; 