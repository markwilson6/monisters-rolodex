import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({placeholder,handlechange}) => (
    <input className='search'  
    type='search' placeholder='search monsters' 
    onChange= {handlechange}
    />
);

