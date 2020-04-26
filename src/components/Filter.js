import React from 'react';

import '../stylesheets/CharacterCard.scss';
import '../stylesheets/Filter.scss';

const Filter = (props) => {
  // console.log('previousFilter = ' + props.previousFilter);

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
      key: 'gender',
    });
  };

  return (
    <div className='searchBar'>
      <form className='search'>
        <input className='searchbox' type='text' name='name' id='name' placeholder='Enter the character' onChange={handleChange} value={props.previousFilter}></input>
        <button type='submit' className='searchbtn'>
          {/* <i className='fas fa-search'></i> */}
        </button>

        <label htmlFor='All'>All</label>
        <input type='radio' value='All' id='All' name='gender' onChange={handleChange2}></input>
        <label htmlFor='Men'>Man</label>
        <input type='radio' value='Male' id='Men' name='gender' onChange={handleChange2}></input>
        <label htmlFor='Women'>Woman</label>
        <input type='radio' value='Female' id='Women' name='gender' onChange={handleChange2}></input>
      </form>
      {/* // <label htmlFor='gender'>Gender</label>
      // {/* <select>
        // <option value='Male'>Man</option>
        // <option value='Female'>Women</option>
        // <option value='Unknown'>Unknown</option>
        //{' '}
      // </select> */}
    </div>
  );
};

export default Filter;
