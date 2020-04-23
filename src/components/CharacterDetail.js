import React from 'react';
import Emoji from './Emoji';

import '../stylesheets/CharacterDetail.scss';
import '../stylesheets/App.scss';

const CharacterDetail = (props) => {
  // console.log(props);

  if (props.character === undefined) {
    console.log('es undefined');
    return <h1>No ha seleccionado ningún personaje</h1>;
  }

  let status;

  if (props.character.status === 'Alive') {
    status = <Emoji symbol='🙂' label='Alive' />;
  } else if (props.character.status === 'Death') {
    status = <Emoji symbol='💀' label='Death' />;
  } else {
    status = <Emoji symbol='❓' label='Unknown' />;
  }

  // let species = props.character.status === 'Alive' ? <Emoji symbol='🙂' label='alive' /> : props.character.status === 'Death' ? <Emoji symbol='💀' label='death' /> : <Emoji symbol='?' label='unknown' />;
  let species = props.character.species === 'Human' ? <Emoji symbol='👫' label='human' /> : <Emoji symbol='👾' label='alien' />;

  return (
    <div className='character-detail'>
      <img className='image' src={props.character.image} alt={`Foto de ${props.character.image}`}></img>
      <div className='character-detail-text'>
        <h2 className='character-name'>{props.character.name}</h2>
        <ul className='character-description'>
          <li className='character-species'>Species:{species}</li>
          <li className='character-status'>Status:{status}</li>
          <li className='character-origin'>Origin:{props.character.origin.name}</li>
          <li className='character-episodes'>Episodes:{props.character.episodes}</li>
        </ul>
      </div>
    </div>
  );
};

export default CharacterDetail;
