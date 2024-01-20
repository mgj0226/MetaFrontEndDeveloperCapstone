import { Link } from 'react-router-dom';
import Logo from '../images/Logo.svg';

const Header = () => {
    return (
        <header className="header">
            <img src={Logo} alt="logo" className='logo' />
            <nav className='nav'>
                <ul className='karla-ul'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Menu">Menu</Link></li>
                    <li><Link to="/Reservations">Reservations</Link></li>
                    <li><Link to="/OrderOnline">Order Online</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;