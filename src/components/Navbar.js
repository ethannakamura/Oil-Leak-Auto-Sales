import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

const Navbar = prop => {

    // useEffect() runs a callback func. each time comp. is rendered/reredered (by default)
    useEffect(() => {console.log('Navbar component rendered or rerendered')})

    return(
    <nav className="navbar navbar-expand-lg navbar-danger bg-dark text-danger">
        <Link className="navbar-brand" to="/"> Oil Leak Auction House</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Shop">Shop</Link>
                </li>
            </ul>
            <span className="navbar-text">
                Navbar text with an inline element
            </span>
        </div>
    </nav>
    )}

export default Navbar;