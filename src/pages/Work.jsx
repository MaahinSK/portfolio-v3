import React from 'react';

const projects = [
    {
        title: "Zenith",
        description: "A decentralized music application enabling artists to mint and sell their music as NFTs.",
        tags: ["Solidity", "Python", "Ethereum"],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuATClY4PdlOWn5Db8QxA2LZGM3qk8Zv1x6uYxwvbqSf7wpjemEiN_RkTvgTpd4f8oWIL4_5oM9Lv0Vfc9Ap-MWq0U1Gss96VUMxo3UvO1JIQO4DfNg0YIblA1PO5tga2kBipGf6MF71IClbieJgK4FbxImyDx8SbXThuUXhKJViZ1IH6FTgKddeFenj3m6DyyENSHP77WGTr0CthCX7PaizZv5Z0XUN-4PQzctnhfWcLRFZ4cki0WtqnAM-ho4PlkcK8Oys3-q84lk",
        liveLink: "#",
        githubLink: "#"
    },
    {
        title: "PokeArena",
        description: "A blockchain-based platform digitizing Pokémon cards as NFTs with secure trading and battling features.",
        tags: ["Move", "Aptos", "NFTs"],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_q79f3PibXVoaJf4NJfVV49W2TjTIf6Ew0N4jx2_btRsIavelK9bJwlQ32MMAZ6ILnyp7UegG9PlIdxBVbXvklJjX1SghUp5e-eH4cvWChu5c4T9LXCfoOvMHyBNwlQFTfU48816W7Z77wdUK4ekTv5Bn0DNCipFKa61ZEQT89MeMTVwKnBa-qtONnSM2ulr0o3WvmyyzharVesmsXX3-s6lrZhxIebfbC4MTkE1r46BY1itO1_OK6SVx_N9rkEBB_QJTq1X1sZE",
        liveLink: "#",
        githubLink: "#"
    },
    {
        title: "Lightning Time",
        description: "A Bitcoin Lightning Network-powered time tracking web app that allows users to check in for work and automatically receive payments in Satoshis.",
        tags: ["Bitcoin", "Lightning Network"],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLOd7JcEXcPPjg6ds6lSh854mQ7L4f-jMh9fR7kzANkL3k-qo2hOFxjHTS9hcb2w-AsqBj827AjyU3wDViDHYbJYbxGW43OciYgj5O8gitbXL4jlF0UYttjYn_Ku11cClmqqHKsf6wR_g-A3y3OZJzHAbFvtOvdARVqyGgaub9Z436gQiiO4Z3e8K63prPR4q1wVc5Bdcp4LsZXToFpek0_LxNAuEcz2C6sER0nlU1kY9D8UWwiXU_tVwRC_XfmcP00QSvQvgnIxQ",
        liveLink: "#",
        githubLink: "#"
    },
    {
        title: "Project 4 (Placeholder)",
        description: "A placeholder for your fourth project. You can update this with your actual project details.",
        tags: ["React", "Node.js", "MongoDB"],
        image: "https://via.placeholder.com/600x400?text=Project+4",
        liveLink: "#",
        githubLink: "#"
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
