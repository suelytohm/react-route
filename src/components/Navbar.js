import "./Navbar.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
    
    return (
        <nav>
            <NavLink to="/">Início</NavLink>
            <NavLink to="/about">Sobre nós</NavLink>
        </nav>
    )
}

export default Navbar
