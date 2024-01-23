import { Link } from 'react-router-dom';
import Logo from '../images/Logo.svg';

const Footer = () => {
    return (
        <footer className='footer'>
            <img src={Logo} alt="logo" className='footerImg' />
            <nav className='footerNav'>
                <section className='doormat'>
                    <h5 className="doormatTitle">Little Lemon</h5>
                    <ul className='doormatLinks'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Menu">Menu</Link></li>
                        <li><Link to="/Reservations">Reservations</Link></li>
                        <li><Link to="/OrderOnline">Order Online</Link></li>
                        <li><Link to="/Login">Login</Link></li>
                    </ul>
                </section>
                <section className='contacts'>
                    <h5 className="contactsTitle">Contact Us</h5>
                    <ul className='karla-ul'>
                        <li><Link to="/">Address</Link></li>
                        <li><Link to="/About">Phone Number</Link></li>
                        <li><Link to="/Menu">Email</Link></li>
                    </ul>
                </section>
                <section className='social'>
                    <h5 className="socialTitle">Social</h5>
                    <ul className='karla-ul'>
                        <li><Link to="/">Facebook</Link></li>
                        <li><Link to="/About">X</Link></li>
                        <li><Link to="/Menu">YouTube</Link></li>
                    </ul>
                </section>
            </nav>
        </footer>
    );
};

export default Footer;