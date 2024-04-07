// Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/fighters">Fighters</Link></li>
        <li><Link to="/leagues">Leagues</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
