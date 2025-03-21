// src/pages/HomePage.tsx
import { useEffect } from "react";
import CarouselBanner from '../components/home/CarouselBanner';
import Tiles from '../components/home/Tiles';
import Testimonials from '../components/home/Testimonials';
import Statistics from '../components/home/Statistics';
import { toast } from "sonner";
import '../styles/pages/homePage.css';

const HomePage = () => {
    useEffect(() => {
        document.title = "EduGuiders - Your EduPlatform";

        toast("Welcome to EduGuiders!", {
            description: "Your educational platform for success.",
            duration: 4000,
        });
    }, []);

    return (
        <div className="home-page">
            <CarouselBanner />

            <Tiles />

            <Statistics />


            <Testimonials />
        </div>
    );
};

export default HomePage;