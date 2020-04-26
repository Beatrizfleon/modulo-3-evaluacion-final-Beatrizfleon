import React from 'react';
import { Link } from 'react-router-dom';
import Rick from '../images/Rick.png';

import '../stylesheets/CharacterDetail.scss';
import '../stylesheets/App.scss';

const CharacterDetail = (props) => {
  const handleGoHome = () => {
    console.log('going home');
    props.handleInput(props.inputValue);
  };

  if (props.character === undefined) {
    // console.log('es undefined');
    return (
      <div>
        <Link className='go-back' to='/'>
          <div className='header-return'>
            <span>
              <img className='character-detail-icon' src={Rick} alt='return-icon' onClick={handleGoHome}></img>
            </span>
            <span className='header-return-text'>Go Back</span>
          </div>
        </Link>
        <h1 className='error'>El personaje no existe :(</h1>
      </div>
    );
  } else {
    let newStatus;
    if (props.character.status === 'Alive') {
      newStatus = (
        <span className='character-detail-span'>
          Alive <i className='far fa-smile'></i>
        </span>
      );
    } else if (props.character.status === 'Dead') {
      newStatus = (
        <span className='character-detail-span'>
          Dead <i class='fas fa-skull'></i>
        </span>
      );
    } else {
      newStatus = (
        <span className='character-detail-span'>
          Unknown
          <i className='far fa-question-circle'></i>
        </span>
      );
    }

    // let species = props.character.status === 'Alive' ? <Emoji symbol='🙂' label='alive' /> : props.character.status === 'Death' ? <Emoji symbol='💀' label='death' /> : <Emoji symbol='?' label='unknown' />;
    let species =
      props.character.species === 'Human' ? (
        <span className='character-detail-span'>
          Human <i className='fas fa-female'></i>
          <i className='fas fa-male'></i>
        </span>
      ) : (
        <span className='character-detail-span'>
          Alien <i className='fab fa-reddit-alien'></i>
        </span>
      );

    return (
      <div className='character-detail-container'>
        <Link className='go-back' to='/'>
          <div className='header-return'>
            <span>
              <img className='character-detail-icon' src={Rick} alt='return-icon' onClick={handleGoHome}></img>
            </span>
            <span className='header-return-text'>Go Back</span>
          </div>
        </Link>
        <div className='character-detail-card'>
          <img className='character-detail-image' src={props.character.image} alt={`Foto de ${props.character.image}`}></img>
          <div className='character-detail-text'>
            <header className='character-header'>
              <h2 className='character-detail-name'>{props.character.name}</h2>
            </header>
            <ul className='character-description'>
              <li className='character-li'>Species: {species}</li>
              <li className='character-li'>Status: {newStatus}</li>
              <li className='character-li'>Origin: {props.character.origin}</li>
              <li className='character-li'>Episodes: {props.character.episodes}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default CharacterDetail;
