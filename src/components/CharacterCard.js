import React from 'react';
import '../stylesheets/CharacterCard.css';
import '../stylesheets/App.css';

const CharacterCard = (props) => {
  console.log(props.character);
  return (
    <li>
      <div className='character-card'>
        <img className='image' src={props.character.image} alt={`Foto de ${props.character.image}`}></img>
        <div className='character-title'>
          <h2 className='name'>{props.character.name}</h2>
          <p>{props.character.species}</p>
        </div>
      </div>
    </li>
  );
};

export default CharacterCard;
