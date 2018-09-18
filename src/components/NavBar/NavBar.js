import React from "react";
import "./NavBar.css";

const NavBar = props => (

    <nav className="navbar sticky-top">
        <ul className=" nav navbar sticky-top">
            <li className="nav-item"> Clicky Game</li>
            <li className="nav-item"> Click an image to begin! </li>
            <li className="nav-item">Score: {props.newScore}</li>
            <li className="nav-item">Top Score: {props.TopScore}</li>
        </ul>
    </nav>
);

export default NavBar;
