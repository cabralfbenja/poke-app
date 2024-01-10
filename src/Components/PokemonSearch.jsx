import React, { useState } from "react";
import { SearchBar } from "./SearchBar";
import { SearchResultsList } from "./SearchResultsList";

export const PokemonSearch = () => {
    const [results, setResults] = useState([]);
    return (
        <div className="search-bar-container">
            <SearchBar setResults={ setResults }/>
            <SearchResultsList results = {results}/>
            
        </div>
    );
}