import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const linkStyle = {
        fontSize: 'larger',
        textDecoration: 'none',
        fontWeight: '600',
        color: 'brown',
        marginLeft: '20px',
        fontFamily: 'Times New Roman'
    }


    return (
        <div>
            <Navbar expand="md">
                <Navbar.Brand className="brand-title" to="/home"> WebTech Creation </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto navBar">
                        <Link style={linkStyle} to="/home">Home</Link>
                        <Link style={linkStyle} to="/myBookingList">My Appointments</Link>
                        <Link style={linkStyle} to="/">Services</Link>
                        <Link style={linkStyle} to="/">Contact Us</Link>
                        <Link style={linkStyle} to="/login"><button className="btn btn-secondary">Log In</button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;