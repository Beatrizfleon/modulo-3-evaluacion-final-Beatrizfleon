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
  const handleChange2 = (ev) => {
    console.log(ev.target.value);
    props.handleFilter({
      value: ev.target.value,
      key: 'location',
    });
  };
  return (
    <div className='searchBar'>
      <form className='search'>
        <input className='searchbox' type='text' name='name' id='name' placeholder='Enter the character' onChange={handleChange} value={props.previousFilter}></input>
        <button type='submit' className='searchbtn'>
          {/* <i className='fas fa-search'></i> */}
        </button>
        <input type='text' className='searchbox' name='location' id='location' onChange={handleChange2} value={props.nameLocation}></input>
      </form>
    </div>
  );
};

export default Filter;
