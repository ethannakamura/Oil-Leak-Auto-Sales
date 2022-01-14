import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

const Navbar = prop => {

    // useEffect() runs a callback func. each time comp. is rendered/reredered (by default)
    useEffect(() => { console.log('Navbar component rendered or rerendered') });

    return (
        <nav className="navbar navbar-expand-lg navbar bg-dark bg-black text-light">
            <Link className="navbar-brand" to="/">Red Card Talent Management</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navstuff collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/Sponsorships">Active Sponsorships</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Shop">Free Agents</Link>
                    </li>
                </ul>
                <div>
                    <Link className="nav-link btn btn-info btn-danger" to="/Cart"><i className="bi bi-cart"></i><strong>{`${prop.cart.size} | $${prop.cart.total}m`}</strong></Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

