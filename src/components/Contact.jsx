import React, { useRef, useState } from 'react';
import { MdSend, MdEmail } from 'react-icons/md';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        // Replace these with your actual EmailJS Service ID, Template ID, and Public Key
        // You can get these from https://dashboard.emailjs.com/admin
        const SERVICE_ID = 'service_yrrvpxh';
        const TEMPLATE_ID = 'template_is51bqf';
        const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                alert("Message sent successfully!");
                form.current.reset();
                setLoading(false);
            }, (error) => {
                console.log(error.text);
                alert("Failed to send message. Please try again.");
                setLoading(false);
            });
    };

    return (
        <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background-dark">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Get In Touch</h2>
                    <p className="mt-4 text-lg text-gray-400">Have a project in mind or just want to say hi? Feel free to reach out.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
                    <div className="lg:col-span-2 bg-gray-900/40 border border-white/10 rounded-xl p-8" data-aos="fade-right">
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <label className="text-gray-300" htmlFor="user_name">Name</label>
                                <input name="user_name" className="w-full mt-2 bg-gray-800 border-gray-700 rounded-lg text-white focus:ring-purple-500 focus:border-purple-500 p-3" id="user_name" placeholder="Your Name" type="text" required />
                            </div>
                            <div>
                                <label className="text-gray-300" htmlFor="user_email">Email</label>
                                <input name="user_email" className="w-full mt-2 bg-gray-800 border-gray-700 rounded-lg text-white focus:ring-purple-500 focus:border-purple-500 p-3" id="user_email" placeholder="you@example.com" type="email" required />
                            </div>
                            <div>
                                <label className="text-gray-300" htmlFor="message">Message</label>
                                <textarea name="message" className="w-full mt-2 bg-gray-800 border-gray-700 rounded-lg text-white focus:ring-purple-500 focus:border-purple-500 p-3" id="message" placeholder="Your message..." rows="5" required></textarea>
                            </div>
                            <div>
                                <button disabled={loading} className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 text-gray-900 font-semibold rounded-full hover:bg-gray-300 transition-colors shadow-lg disabled:opacity-50" type="submit">
                                    {loading ? 'Sending...' : 'Send Message'}
                                    <MdSend className="text-xl" />
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="space-y-8" data-aos="fade-left">
                        <h3 className="text-2xl font-semibold text-white">Connect with me</h3>
                        <div className="space-y-6">
                            <a className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors" href="mailto:maahin810@gmail.com">
                                <MdEmail className="text-2xl text-purple-400" />
                                <span>maahin810@gmail.com</span>
                            </a>
                            <a className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors" href="#">
                                <FaGithub className="text-2xl text-purple-400" />
                                <span>GitHub</span>
                            </a>
                            <a className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors" href="#">
                                <FaFacebook className="text-2xl text-purple-400" />
                                <span>Facebook</span>
                            </a>
                            <a className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors" href="#">
                                <FaLinkedin className="text-2xl text-purple-400" />
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
