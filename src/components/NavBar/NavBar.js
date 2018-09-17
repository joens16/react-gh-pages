import React from "react";
import "./NavBar.css";

const NavBar = props => (
    <nav className="navbar navbar-expand-lg bg-light" id="fullNav">
        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    Clicky Game
                </li>
                <li className="nav-item active">
                    Start by clicking an image!!
                </li>
                <li className="nav-item active">
                   Score: {props.score} 
                </li>
                <li className="nav-item">
                   Top Score: {props.topScore}
                </li>
            </ul>
        </div>
    </nav>
);

export default NavBar;
