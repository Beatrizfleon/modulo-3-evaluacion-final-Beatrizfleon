import React from 'react';

import '../stylesheets/CharacterCard.scss';
import '../stylesheets/Filter.scss';

const Filter = (props) => {
  console.log('previousFilter = ' + props.previousFilter);

  const handleChange = (ev) => {
    // console.log(ev.target.value);
    props.handleFilter({
      value: ev.target.value,
      key: 'name',
    });
  };
  return (
    <form className='search'>
      <input className='searchbox' type='text' name='name' id='name' placeholder='Enter the character' onChange={handleChange} value={props.previousFilter}></input>
      <button type='submit' className='searchbtn'>
        <i className='fas fa-search'></i>
      </button>
    </form>
  );
};

export default Filter;
