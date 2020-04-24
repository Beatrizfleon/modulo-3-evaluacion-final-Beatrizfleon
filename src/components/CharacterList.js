import React from 'react';
import CharacterCard from './CharacterCard';
import '../stylesheets/CharacterList.scss';

const CharacterList = (props) => {
  console.log(props);

  const itemsList = props.characters.map((character) => {
    return <CharacterCard key={character.id} character={character} />;
  });

  if (itemsList.length === 0) {
    return <h1 className='character-list-message'> No hay ningún personaje que coincida con la palabra {props.inputValue}</h1>;
  }

  return (
    <div className='character-list'>
      <ul className='items-list'>{itemsList}</ul>
    </div>
  );
};

export default CharacterList;
