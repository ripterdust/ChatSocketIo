import { Link } from 'react-router-dom';


const Navbar = () => {
	
	return <nav className="purple darken-3 z-depth-0">
    <div class="nav-wrapper container">
      <Link class="brand-logo left" to="/">ChatIo</Link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/chat">Chatea</Link></li>
        <li><Link to="/about">Acerca de</Link></li>
      </ul>
    </div>
  </nav>
}


export default Navbar;
