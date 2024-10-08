import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const NavbarProject = ()=> {

    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="Navbar_project">
            <span className="nav-logo">
            <strong><Link to={"/"}>Dinis Antunes</Link></strong>
            </span>
            <div className={`nav-items ${isOpen && "open"}`}>
            <Link to={"/projectsss"}>Projects </Link>
                <Link to={"/aboutme"}>About me</Link>
                <a href="#contactos">Contacts</a>
                 <div className="space_search_bar">
        </div>
            </div>
            <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                <div className="bar"></div>
            </div>
        </div>
    )
}

export default NavbarProject





