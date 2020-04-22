import React, { useEffect, useState } from 'react';
import CharacterList from './CharacterList';

import Filter from './Filter';
import getDataFromApi from '../services/getDataFromApi';

import '../stylesheets/App.css';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState('');

  useEffect(() => {
    console.log('me estoy montando');
    getDataFromApi().then((data) => setCharacters(data));
  }, []);
  // console.log(characters);

  const handleFilter = (data) => {
    console.log('manejando los filtros', data);
    if (data.key === 'name') {
      setNameFilter(data.value);
    }
  };
  // console.log('Name:', nameFilter);

  const filteredCharacters = characters.filter((character) => {
    return character.name.toUpperCase().includes(nameFilter.toUpperCase());
  });

  return (
    <div className='App'>
      <Filter handleFilter={handleFilter} />
      <CharacterList characters={filteredCharacters} />
    </div>
  );
};

export default App;
