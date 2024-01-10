import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import './css/SearchBar.css';

export const SearchResultsList = (props) => {

    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        if (!props.results) {
            console.log("No results")
            return;
          }
        const promises = props.results.map(pokemon => {
          return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            .then(response => response.data);
        });
    
        Promise.all(promises).then(data => setPokemonData(data));
      }, [props.results]);


    function capitalizeFLetter(string) {
        return string[0].toUpperCase() +
            string.slice(1);
    }

    return (
        <div className="results-list">
            {pokemonData.map((pokemon, index) => (
              <Link className="pokemon-link" to={`/pokemon/${pokemon.name}`} key={index}>
                <div className='pokemon-item'>
                    <h2 className="pokemon-name">{capitalizeFLetter(pokemon.name)}</h2>
                    <img className="pokemon-image" src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
              </Link>
            ))}
        </div>
    );
};