import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/CharacterCard.scss';
// import '../stylesheets/App.scss';

const CharacterCard = (props) => {
  // console.log(props.character.id);
  return (
    <li className='character-card-li'>
      <Link className='character-card-link' to={`/character/${props.character.id}`}>
        <div className='character-card'>
          <img className='character-image' src={props.character.image} alt={`Foto de ${props.character.image}`}></img>
          <div className='character-title'>
            <h2 className='character-name'>{props.character.name}</h2>
            <p>{props.character.species}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default CharacterCard;
