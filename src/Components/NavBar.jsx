import { Link } from 'react-router-dom';
export const NavBar = () => {
    return (
        <nav className='nav-bar'>
          <ul>
            <li>
              <Link className='nav-item' to="/">Home</Link>
            </li>
            <li>
              <Link className='nav-item' to="/random">Random Pokemon</Link>
            </li>
            <li>
              <Link className='nav-item' to="/search">Search Pokemon</Link>
            </li>
          </ul>
        </nav>
    );
}