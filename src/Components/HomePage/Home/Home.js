import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Developer from '../Developer/Developer';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Projects></Projects>
            <Services></Services>
            <Reviews></Reviews>
            <Developer></Developer>
            <Footer></Footer>
        </div>
    );
};

export default Home;