import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isHome = location.pathname === '/';

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 lg:px-8 py-4 transition-all duration-300 bg-background-dark/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold tracking-tighter text-white">
                    Maahin Sikder
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-2 bg-gray-800/30 backdrop-blur-sm p-1.5 rounded-full border border-white/5">
                    <Link
                        to="/"
                        className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${location.pathname === '/' ? 'bg-gray-200/10 text-white' : 'text-gray-400 hover:text-white'}`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${location.pathname === '/about' ? 'bg-gray-200/10 text-white' : 'text-gray-400 hover:text-white'}`}
                    >
                        About
                    </Link>
                    <Link
                        to="/work"
                        className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${location.pathname === '/work' ? 'bg-gray-200/10 text-white' : 'text-gray-400 hover:text-white'}`}
                    >
                        Work
                    </Link>
                </nav>

                <div className="text-2xl font-bold text-white hidden md:block"></div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-background-dark border-b border-white/10 p-4 flex flex-col gap-4">
                    <Link to="/" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/about" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="../pages/Work" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Work</Link>
                </div>
            )}
        </header>
    );
};

export default Navbar;
