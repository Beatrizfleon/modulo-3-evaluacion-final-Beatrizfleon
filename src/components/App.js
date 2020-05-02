import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import CharacterList from './CharacterList';
import Filter from './Filter';
import getDataFromApi from '../services/getDataFromApi';
import CharacterDetail from './CharacterDetail';

import '../stylesheets/App.scss';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [nameLocation, setNameLocation] = useState('');

  useEffect(() => {
    console.log('me estoy montando');
    getDataFromApi().then((data) => setCharacters(data));
  }, []);
  // console.log(characters);

  const handleFilter = (data) => {
    console.log('manejando los filtros', data);
    if (data.key === 'name') {
      setNameFilter(data.value);
    } else if (data.key === 'location') {
      setNameLocation(data.value);
    }
  };
  // console.log('Name:', nameFilter);

  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toUpperCase().includes(nameFilter.toUpperCase());
    })
    .filter((character) => {
      return character.location.toUpperCase().includes(nameLocation.toUpperCase());
    });

  const renderCharacterDetail = (props) => {
    const characterId = props.match.params.id;

    const foundCharacter = characters.find((character) => {
      // console.log(`characterId=${characterId}  characted.id=${character.id} son iguales?-> ${parseInt(characterId) === parseInt(character.id)}`);
      return parseInt(characterId) === character.id;
    });
    // console.log(foundCharacter);
    if (foundCharacter !== undefined) {
      return <CharacterDetail handleInput={goHome} character={foundCharacter} inputValue={nameFilter} />;
    } else {
      return <CharacterDetail />;
    }
  };

  const goHome = (previousFilter) => {
    console.log(`filtro inicial:${previousFilter}`);
    setNameFilter(previousFilter);
  };

  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Filter handleFilter={handleFilter} previousFilter={nameFilter} nameLocation={nameLocation} />
          <CharacterList characters={filteredCharacters} inputValue={nameFilter} />
        </Route>
        <Route path='/character/:id' render={renderCharacterDetail}></Route>
      </Switch>
    </div>
  );
};

export default App;
