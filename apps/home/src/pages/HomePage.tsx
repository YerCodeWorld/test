// src/pages/HomePage.tsx
import { useEffect } from "react";
import { Link } from 'react-router-dom';
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
            <section className="cta-buttons">
                <div className="cta-container">
                    <h2>Ready to Become an EduExplorer?</h2>
                    <p>Join this community of students that have found this platform home.</p>

                    <Link to="/" className="primary-button">Find a Teacher</Link>
                </div>
            </section>

        </div>
    );

};

export default HomePage;