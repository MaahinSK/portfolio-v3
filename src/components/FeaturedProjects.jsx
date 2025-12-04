import React from 'react';
import { MdArrowForward } from 'react-icons/md';

const projects = [
    {
        title: "Helping Hands",
        description: "A full Volunteering platform where users can post events, volunteer events, manage dashboards and authenticate securely.",
        tags: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Firebase"],
        image: "/assets/helping hands.jpg",
        liveLink: "https://public-help-c0670.web.app/",
        githubLink: "https://github.com/MaahinSK/Helping-Hands-V2"
    },
    {
        title: "Gari Ghor",
        description: "Premium Toy Car Collection A modern e-commerce platform for toy car enthusiasts and collectors. Browse through an extensive collection of premium toy cars.",
        tags: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Firebase"],
        image: "/assets/gari ghor.jpg",
        liveLink: "https://gari-ghor.web.app/",
        githubLink: "https://github.com/MaahinSK/gari-ghor"
    },
    {
        title: "Hero.io",
        description: "The HERO.IO is a web-based application that allows users to track and manage the games installed on their device.",
        tags: ["React", "Tailwind CSS", "Firebase"],
        image: "/assets/hero.io.jpg",
        liveLink: "https://game-store-zeta-sand.vercel.app/",
        githubLink: "#"
    }
];

const FeaturedProjects = () => {
    return (
        <section id="work" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background-dark">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Featured Projects</h2>
                    <p className="mt-4 text-lg text-gray-400">Check out some of my recent work</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-900/40 border border-white/10 rounded-xl p-6 flex flex-col text-left" data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
                                <img alt={`${project.title} preview`} className="w-full h-full object-cover" src={project.image} />
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                            <p className="text-gray-400 flex-grow mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">{tag}</span>
                                ))}
                            </div>
                            <div className="mt-auto flex gap-4">
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-200 text-gray-900 font-semibold rounded-full hover:bg-gray-300 transition-colors">
                                    Live Link
                                </a>
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 text-white font-semibold rounded-full hover:bg-gray-700 transition-colors border border-white/10">
                                    GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
