import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './css/PokemonDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { capitalizeFLetter } from '../utils';


const Dropdown = ({ title, items = [] }) => {
  const definer = (title, item) => {
    if(title === 'Abilities') {
      return capitalizeFLetter(item.ability.name)
    }
    return capitalizeFLetter(item.type.name)
    
  }  

  return (
    <div className="dropdown">
        <p className='dropdown-title'>{title}</p>
        <ul className="dropdown-list">
            {items.map((item, index) => (
            <li key={index} className='dropdown-list-item'>{definer(title, item)}</li>
            ))}
        </ul>
      </div>
  );
}

const Characteristics = (pokemon) => {
  return (
    <div className="pokemon-characteristics">
        <p><span className="label">Height:</span> <span className="value">{pokemon.height}</span></p>
        <p><span className="label">Weight:</span> <span className="value">{pokemon.weight}</span></p>
        <p><span className="label">Base experience:</span> <span className="value">{pokemon.base_experience}</span></p>
        <Dropdown title='Abilities' items={pokemon.abilities} />
        <Dropdown title='Types' items={pokemon.types} />
    </div>
  );
}

const PokemonPresentation = (pokemon) => {
  return (
    <div className='pokemon-presentation'>
      <h1>{"#" + pokemon.id + " " + capitalizeFLetter(pokemon.name)}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
  );
}

const Stats = (pokemon) => {
  return(
    <div className="pokemon-stats">
            <h2>Stats</h2>
            <ul className='stat-list'>
              {pokemon.stats.map((stat, index) => (
                <li className='stat-list-item' key={index}>
                  <p className="stat-label">{capitalizeFLetter(stat.stat.name)}</p>
                  <div 
                    className='stat-bar'
                    style={{width: stat.base_stat + '%'}}
                    ></div>
                </li>
              ))}
            </ul>
          </div>
  );
}

const Details = (pokemon) => {
  return(
    <div className="pokemon-details">
        <PokemonPresentation {...pokemon} />
        <hr className="pokemon-details-separator" />
        <div className='pokemon-info'>
          <Characteristics {...pokemon} />
          <Stats {...pokemon} />
        </div>
        
    </div>
  );
}

const Arrow = (props) => {
  return (
    <div className='move-arrow'>
      <Link to={`/pokemon/${props.id}`} >
        <button className="back-btn">
          <FontAwesomeIcon icon={props.icon}  className="icon" />
        </button>
      </Link>
    </div>
  );

}

export const PokemonDetails = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => setPokemon(response.data));
  }, [name]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className='pokemon-details-container'>
      <Arrow  id={parseInt(pokemon.id) - 1} icon={faArrowLeft}/>
      <Details {...pokemon} />
      <Arrow  id={parseInt(pokemon.id) + 1} icon={faArrowRight}/>
    </div>
  );
};