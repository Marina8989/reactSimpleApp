import React from 'react';

const Search = (props) => {
    return(
       <input value={props.searchValue} onChange={props.handleSearch} style={{border: '1px solid green'}}/>
    )
}

export default Search