import { NavLink, Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <Link to="/">MovieApp</Link>
                </div>
                <div className="navbar-links">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/favorites" className="nav-link">Preferiti</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
