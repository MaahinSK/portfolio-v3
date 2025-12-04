import React from 'react';
import { MdCheckCircle } from 'react-icons/md';

const Skills = () => {
    return (
        <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background-dark">
            <div className="max-w-7xl mx-auto">
                <div className="text-center" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Skills</h2>
                    <p className="mt-6 text-xl md:text-2xl text-gray-400 tracking-wider">DEVELOPER <span className="text-purple-400 mx-2">•</span> DESIGNER <span className="text-purple-400 mx-2">•</span> CREATOR</p>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-900/40 border border-white/10 rounded-xl p-8" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="text-xl font-bold text-white mb-6">Languages</h3>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-center"><MdCheckCircle className="text-purple-400 mr-3 text-xl" />Javascript (ES6+)</li>
                            <li className="flex items-center"><MdCheckCircle className="text-purple-400 mr-3 text-xl" />Python</li>
                            <li className="flex items-center"><MdCheckCircle className="text-purple-400 mr-3 text-xl" />HTML5 / CSS3</li>
                        </ul>
                    </div>
                    <div className="bg-gray-900/40 border border-white/10 rounded-xl p-8" data-aos="fade-up" data-aos-delay="200">
                        <h3 className="text-xl font-bold text-white mb-6">Frameworks / Libraries</h3>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-center"><MdCheckCircle className="text-purple-400 mr-3 text-xl" />React / Next.js</li>
                            <li className="flex items-center"><MdCheckCircle className="text-purple-400 mr-3 text-xl" />Node.js / Express</li>
                            <li className="flex items-center"><MdCheckCircle className="text-purple-400 mr-3 text-xl" />Tailwind CSS</li>
                        </ul>
                    </div>
                    <div className="bg-gray-900/40 border border-white/10 rounded-xl p-8" data-aos="fade-up" data-aos-delay="300">
                        <h3 className="text-xl font-bold text-white mb-6">Tools / Platforms</h3>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-center"><MdCheckCircle className="text-purple-400 mr-3 text-xl" />Git & Github</li>
                            <li className="flex items-center"><MdCheckCircle className="text-purple-400 mr-3 text-xl" />Firebase</li>
                            <li className="flex items-center"><MdCheckCircle className="text-purple-400 mr-3 text-xl" />Vercel / Netlify</li>
                            <li className="flex items-center"><MdCheckCircle className="text-purple-400 mr-3 text-xl" />Figma</li>
                            <li className="flex items-center"><MdCheckCircle className="text-purple-400 mr-3 text-xl" />MySQL / MongoDB</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
