import React, { Component } from 'react';
import Logo from './../../assets/img/circle.png';

import { Link } from 'react-router-dom';

class Header extends Component{
    render() {
        return (
            <nav className="navbar navbar-light bg-light shadow">
                <Link className="navbar-brand text-capitalize font-weight-bold border-right" to="/">Reaction</Link>
                <img className="logo" src={Logo} alt="logo" />
                <Link to="/Account">Sravan Nerella</Link>
            </nav>
        )
    }
}

export default Header;