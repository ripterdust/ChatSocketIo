import { Link } from 'react-router-dom';


const Navbar = () => {
	
	return<nav>
	
		<Link to="/" className="link"><i></i></Link>
		<div className="navLinks">
			<Link to="/">Inicio</Link>
			<Link to="/chat">Chatear</Link>
			<Link to="/cuenta">Mi cuenta</Link>
		</div>

	</nav>

}


export default Navbar;
