import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <footer className="w-full py-8 bg-background-dark border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-400 text-center sm:text-left">© 2025 Maahin Sikder. All rights reserved.</p>
                    <nav className="flex items-center gap-6">
                        <Link className="text-sm text-gray-400 hover:text-white transition-colors" to="/">Home</Link>
                        <Link className="text-sm text-gray-400 hover:text-white transition-colors" to="/about">About</Link>
                        <Link className="text-sm text-gray-400 hover:text-white transition-colors" to="/work">Work</Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
