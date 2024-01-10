import React from 'react';
import { Link } from 'react-router-dom';
import pokeball from '../Images/Poké_Ball_icon.png';
import './css/Main.css' // Asegúrate de que la ruta a la imagen es correcta

export const Main = () => {
    return(
        <div className="main">
            <h1>Welcome to the Pokemon App!</h1>
            <button>
                <Link className='link-btn' to="/random">
                    <img className='pokeball' src={pokeball} alt="Pokeball" />
                </Link>
            </button>
        </div>
    );
}
