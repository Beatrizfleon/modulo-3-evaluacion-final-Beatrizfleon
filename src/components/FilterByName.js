import React from 'react';

const FilterByName = (props) => {
  return (
    <form>
      <label htmlFor='Men'>Man</label>
      <input type='checkbox' value='Male' id='Male' name='Male' checked=''></input>
      <label htmlFor='Women'>Woman</label>
      <input type='checkbox' value='Female' id='Female' name='Female' checked=''></input>
    </form>

    // <label htmlFor='gender'>Gender</label>
    // <select>
    //   <option value='Male'>Man</option>
    //   <option value='Female'>Women</option>
    //   <option value='Unknown'>Unknown</option>
    // </select>
  );
};

export default FilterByName;
