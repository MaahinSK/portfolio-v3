import React from 'react';
import { MdArrowForward } from 'react-icons/md';

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
