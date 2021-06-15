import React from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <NavBar></NavBar>
            <HeaderBanner></HeaderBanner>
        </div>
    );
};

export default Header;