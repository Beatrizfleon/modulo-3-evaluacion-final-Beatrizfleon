import React from 'react';
import CharacterCard from './CharacterCard';
import '../stylesheets/CharacterCard.css';
import '../stylesheets/Filter.css';

const Filter = (props) => {
  const handleChange = (ev) => {
    console.log(ev.target.value);
    props.handleFilter({
      value: ev.target.value,
      key: 'name',
    });
  };
  return (
    <div className='search'>
      <input className='searchbox' type='text' name='name' id='name' placeholder='Enter the character' onChange={handleChange}></input>
      <button type='submit' className='searchbtn'>
        <i className='fas fa-search'></i>
      </button>
    </div>
  );
};

export default Filter;
