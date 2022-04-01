import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo.svg';

import './Header.css';

function Header() {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="/">
                    <img src={logo} alt="" title="" />
                </Navbar.Brand>
            </Navbar>
        </>
    );
}

export default Header;
