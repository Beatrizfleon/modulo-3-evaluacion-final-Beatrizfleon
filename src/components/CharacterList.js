import React from 'react';
import CharacterCard from './CharacterCard';
import '../stylesheets/CharacterCard.css';
import '../stylesheets/App.css';

const CharacterList = (props) => {
  // console.log(props);
  const itemsList = props.characters.map((character) => {
    return <CharacterCard key={character.id} character={character} />;
  });

  return (
    <div className='character-list'>
      <ul className='items-list'>{itemsList}</ul>
    </div>
  );
};

export default CharacterList;
