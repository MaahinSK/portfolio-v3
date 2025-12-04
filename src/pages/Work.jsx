import React from 'react';

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
    },
    {
        title: "Cautious Citizens",
        description: "Cautious Citizens is a community-driven platform designed to enhance public safety and awareness.",
        tags: ["HTML", "CSS", "JavaScript", "Firebase", "Cloudinary"],
        image: "../../assets/cc.jpg",
        liveLink: "https://maahinsk.github.io/Cautious-Citizens/",
        githubLink: "https://github.com/MaahinSK/Cautious-Citizens/settings/pages"
    }
];

const Work = () => {
    return (
        <div className="relative min-h-screen overflow-hidden pt-32 pb-20">
            <div className="absolute inset-0 starry-bg"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[40%] bg-gradient-to-t from-indigo-900/40 via-indigo-900/10 to-transparent blur-3xl opacity-60 rounded-full pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-down">
                    <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">My Work</h1>
                    <p className="text-xl text-gray-400">A collection of projects I've built.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
        </div>
    );
};

export default Work;
