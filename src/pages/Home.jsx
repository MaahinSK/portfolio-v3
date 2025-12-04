import React from 'react';
import Hero from '../components/Hero';
import Education from '../components/Education';
import FeaturedProjects from '../components/FeaturedProjects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <div className="absolute inset-0 starry-bg"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[40%] bg-gradient-to-t from-indigo-900/40 via-indigo-900/10 to-transparent blur-3xl opacity-60 rounded-full pointer-events-none"></div>

            <div className="relative z-10">
                <Hero />
                <Education />
                <FeaturedProjects />
                <Skills />
                <Contact />
            </div>
        </div>
    );
};

export default Home;
