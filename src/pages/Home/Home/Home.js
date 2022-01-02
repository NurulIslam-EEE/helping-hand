import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import About from '../About/About';
import LatestNews from '../LatestNews/LatestNews';

const Home = () => {
    const { isLoading } = useAuth();

    return (
        isLoading ? <h1>Loading</h1>
            :

            <div>
                <Header />
                <About />
                <LatestNews />
                <Footer />
            </div>
    );
};

export default Home;