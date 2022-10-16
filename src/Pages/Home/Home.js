import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Shared/Header/Header';
import About from '../About/About'
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
         
            <br />
        </div>
    );
};

export default Home;