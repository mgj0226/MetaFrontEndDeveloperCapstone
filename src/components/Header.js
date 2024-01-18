const Header = () => {
    return (
        <header className="header">
            <img src="./images/logo.png" alt="logo" />
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/Menu">Menu</a></li>
                    <li><a href="/Reservations">Reservations</a></li>
                    <li><a href="/OrderOnline">Order Online</a></li>
                    <li><a href="/Login">Login</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;