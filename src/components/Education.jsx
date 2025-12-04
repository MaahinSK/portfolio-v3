import React from 'react';
import { MdSchool, MdDateRange, MdLocationOn } from 'react-icons/md';

const educationData = [
    {
        level: "University",
        degree: "Bachelor of Science in Computer Science",
        institution: "BRAC University",
        year: "2022 - 2026",
        description: "Currently pursuing my degree with a focus on Software Engineering and Web Technologies.",
        location: "Dhaka, Bangladesh"
    },
    {
        level: "A Levels",
        degree: "Science Stream",
        institution: "Earth House Alternative School",
        year: "2019 - 2021",
        description: "Completed A Levels with a focus on Mathematics, Physics, and Chemistry.",
        location: "Dhaka, Bangladesh"
    },
    {
        level: "O Levels",
        degree: "Science Stream",
        institution: "Earth House Alternative School",
        year: "2018 - 2019",
        description: "Completed O Levels with distinction in core science subjects.",
        location: "Dhaka, Bangladesh"
    }
];

const Education = () => {
    return (
        <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background-dark">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Education</h2>
                    <p className="mt-4 text-lg text-gray-400">My academic journey</p>
                </div>

                <div className="relative border-l border-gray-700 ml-4 md:ml-8 space-y-12">
                    {educationData.map((item, index) => (
                        <div key={index} className="relative pl-8 md:pl-12" data-aos="fade-up" data-aos-delay={index * 100}>
                            {/* Timeline Dot */}
                            <div className="absolute -left-3 top-0 w-6 h-6 bg-background-dark border-2 border-purple-500 rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 sm:items-start justify-between bg-gray-900/40 border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-colors">
                                <div className="flex-grow">
                                    <div className="flex items-center gap-2 text-purple-400 mb-2">
                                        <MdSchool className="text-xl" />
                                        <span className="font-semibold tracking-wide uppercase text-sm">{item.level}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{item.degree}</h3>
                                    <h4 className="text-xl text-gray-300 mb-4">{item.institution}</h4>
                                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                                </div>

                                <div className="flex flex-col gap-2 min-w-[140px] text-gray-400 text-sm">
                                    <div className="flex items-center gap-2">
                                        <MdDateRange className="text-purple-400" />
                                        <span>{item.year}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MdLocationOn className="text-purple-400" />
                                        <span>{item.location}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
