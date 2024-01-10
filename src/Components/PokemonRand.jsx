import React, {useState} from 'react';
import axios from 'axios';
import { capitalizeFLetter } from '../utils';
import './css/PokemonRand.css';
import { Link } from 'react-router-dom';

export const PokemonRand = () => {
  const [pokemon, setPokemon] = useState(null);
  const [color, setColor] = useState('red');
  const [bgColor, setBgColor] = useState('transparent');
  const getPokemon = () => {
    let num = Math.floor(Math.random() * 151) + 1;
    axios.get('https://pokeapi.co/api/v2/pokemon/'+num+'/')
    .then(response => {
      setPokemon(response.data);
      return axios.get(response.data.species.url);
    })
    .then(response => {
        let color = response.data.color.name === 'white' ? 'black' : response.data.color.name;
        setColor(color);
        console.log(response.data.color.name);
    })
    .catch(err => {
      console.log(err);
    });
    
  }
  return (
    <div className="rand-container">
      <button className='rand-btn' onClick={getPokemon}>Get Pokemon</button>
      {pokemon &&(
        <Link 
          className='pokemon-container' 
          style={{ borderColor: color, backgroundColor: bgColor}}
          onMouseEnter={()=> setBgColor(color)}
          onMouseLeave={()=> setBgColor("transparent")}
          to={`/pokemon/${pokemon.name}`}>
          <h2 className='name'>{capitalizeFLetter(pokemon.name)}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </Link>
      )}
    </div>
  );
};