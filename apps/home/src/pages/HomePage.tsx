// src/pages/HomePage.tsx
import { useEffect } from "react";
// import { Link } from 'react-router-dom';
import CarouselBanner from '../components/home/CarouselBanner';
import Tiles from '../components/home/Tiles';
import Testimonials from '../components/home/Testimonials';
import Statistics from '../components/home/Statistics';
import '../styles/pages/homePage.css';

const HomePage = () => {


    useEffect(() => {
        document.title = "EduGuiders - Your EduPlatform";
    }, []);

    return (
        <div className="home-page">

            <CarouselBanner />

            <Tiles />

            {/* Featured Teachers */}

            <Statistics />

            <Testimonials />

            {/*UPDATE TO IF NOT AUTHENTICATED*/}

        </div>
    );

};

export default HomePage;