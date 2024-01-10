import React, { useState } from 'react';
import './css/SearchBar.css';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

export const SearchBar = (props) => {
    const [pokemon, setPokemon] = useState("");
    const fetchPokemon = (value) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1118`)
        .then((response) => {
            let pokemonList = response.data.results.filter((pokemon) => {
                return value && pokemon.name.includes(value.toLowerCase());
            });
            props.setResults(pokemonList);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const handleChange = (value) => {
        setPokemon(value);
        fetchPokemon(value);
    };

    return (
        <div className='input-wrapper'>
            <FaSearch id="search-icon"/>
            <input 
                value={pokemon}  
                onChange={(e) => {handleChange(e.target.value)}} 
                type="text" 
                placeholder="Pokemon Name" 
                id="pokemon"></input>
        </div>
    )
};