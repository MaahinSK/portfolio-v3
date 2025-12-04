import React from 'react';

const About = () => {
    return (
        <div className="relative min-h-screen overflow-hidden pt-32 pb-20">
            <div className="absolute inset-0 starry-bg"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[40%] bg-gradient-to-t from-indigo-900/40 via-indigo-900/10 to-transparent blur-3xl opacity-60 rounded-full pointer-events-none"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-down">
                    <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">About Me</h1>
                    <p className="text-xl text-gray-400">Getting to know the person behind the code.</p>
                </div>

                <div className="space-y-16">
                    {/* Work Section */}
                    <section className="bg-gray-900/40 border border-white/10 rounded-2xl p-8 md:p-12" data-aos="fade-up">
                        <h2 className="text-3xl font-bold  mb-6 flex text-purple-400 items-center gap-3">
                            {/* <span className="material-symbols-outlined text-purple-400">work</span> */}
                            The Work I Do
                        </h2>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            I specialize in building full-stack web applications that are not only functional but also visually stunning.
                            My expertise lies in the MERN stack (MongoDB, Express, React, Node.js) and modern frontend technologies like Tailwind CSS.
                            I love solving complex problems and turning abstract ideas into tangible digital products. Whether it's a decentralized app
                            or a sleek portfolio, I bring passion and precision to every project.
                        </p>
                    </section>

                    {/* Hobbies Section */}
                    <section className="bg-gray-900/40 border border-white/10 rounded-2xl p-8 md:p-12" data-aos="fade-up" data-aos-delay="100">
                        <h2 className="text-3xl font-bold text-purple-400 mb-6 flex items-center gap-3">
                            {/* <span className="material-symbols-outlined text-purple-400">sports_esports</span> */}
                            My Hobbies
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-4">Gaming</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    When I'm not coding, you can often find me immersed in video games. I enjoy the strategic depth of competitive games
                                    and the immersive storytelling of RPGs. It's a great way to unwind and keep my problem-solving skills sharp in a different context.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-4">Video Editing</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    I also have a passion for video editing. Creating content allows me to express my creativity visually.
                                    I love the process of piecing together footage, adding effects, and telling a story through video.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default About;
