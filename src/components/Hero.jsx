import React from 'react';
import { FaCopy } from 'react-icons/fa';
import { MdArrowForward } from 'react-icons/md';
import profileImg from '/assets/WhatsApp Image 2025-11-18 at 10.35.31 PM.jpeg'; // Adjust path if needed

const Hero = () => {
    const handleDownloadResume = () => {
        // Assuming resume.pdf is in the public folder
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Maahin_Sikder_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <main className="flex-grow flex flex-col items-center justify-center px-4 pt-32 pb-20">
            <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex-shrink-0" data-aos="fade-right">
                    <div className="relative w-full h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full blur-2xl opacity-40"></div>
                        <div className="relative w-full h-full bg-gray-900/50 rounded-full border-2 border-white/10 flex items-center justify-center overflow-hidden">
                            {/* Ensure the image fits the circle */}
                            <img
                                src={profileImg}
                                alt="Maahin Sikder"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left" data-aos="fade-left">
                    <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal max-w-4xl text-gray-100">
                        I help founders turn ideas into seamless <span className="italic">digital experiences</span>
                    </h1>
                    <p className="mt-8 flex items-center gap-3 text-lg text-gray-400">
                        Hello, I'm Maahin Sikder
                        — a Full Stack Developer
                    </p>
                    <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
                        <button
                            onClick={handleDownloadResume}
                            className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-gray-200 text-gray-900 font-semibold rounded-full hover:bg-gray-300 transition-colors shadow-lg"
                        >
                            Download Resume
                            <MdArrowForward className="bg-gray-400 text-gray-900 rounded-full p-0.5 text-xl" />
                        </button>
                        <div className="flex items-center gap-2 text-gray-400">
                            <FaCopy className="text-xl" />
                            <span>maahin810@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Hero;
