import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import { PokemonRand } from './Components/PokemonRand';
import { PokemonSearch } from './Components/PokemonSearch';
import { PokemonDetails } from './Components/PokemonDetails';
import { NavBar } from './Components/NavBar';
import { Main } from './Components/Main';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/random" element={<PokemonRand />}/>
          <Route path="/search" element={<PokemonSearch />}/>
          <Route path="/pokemon/:name" element={<PokemonDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
