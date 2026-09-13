import React, { useRef } from 'react'

const Project = () => {
    const miniProjectsRef = useRef(null)

    const scrollMiniProjects = (direction) => {
        const container = miniProjectsRef.current

        if (!container) return

        const scrollAmount = container.clientWidth * 0.8
        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        })
    }

    return (

        <>
            <section id="projects" className="bg-slate-950 px-6 py-20 text-white sm:px-10 lg:px-20">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-12 text-center">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                            My work
                        </p>
                        <h2 className="text-3xl font-bold sm:text-4xl">Featured Projects</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                            A selection of full-stack applications built with modern MERN stack technologies.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: 'ShopSphere',
                                description: 'A complete e-commerce platform with authentication, product management, cart, and secure checkout.',
                                tags: ['MongoDB', 'Express', 'React', 'Node.js'],
                                link: '#',
                            },
                            {
                                title: 'TaskFlow',
                                description: 'A collaborative project management dashboard with real-time updates and team workflows.',
                                tags: ['React', 'Node.js', 'Socket.io', 'Tailwind'],
                                link: '#',
                            },
                            {
                                title: 'DevConnect',
                                description: 'A developer community platform for sharing ideas, connecting with peers, and publishing posts.',
                                tags: ['MERN', 'JWT Auth', 'REST API'],
                                link: '#',
                            },
                        ].map((project) => (
                            <article
                                key={project.title}
                                className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10"
                            >
                                <div className="mb-6 flex h-40 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 text-5xl font-bold text-cyan-400">
                                    {'</>'}
                                </div>
                                <h3 className="text-xl font-bold">{project.title}</h3>
                                <p className="mt-3 flex-1 leading-7 text-slate-400">{project.description}</p>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-cyan-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a href={project.link} className="mt-6 inline-flex items-center font-semibold text-cyan-400 transition hover:text-cyan-300">
                                    View project <span className="ml-2 transition group-hover:translate-x-1">→</span>
                                </a>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-slate-900 px-6 py-20 text-white sm:px-8 lg:px-12">
                <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
                    <div className="overflow-hidden rounded-2xl border border-slate-800 shadow-xl">
                        <img
                            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80"
                            alt="Developer working on a laptop"
                            className="h-full min-h-[320px] w-full object-cover"
                        />
                    </div>

                    <div>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                            About my work
                        </p>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Turning ideas into digital experiences
                        </h2>
                        <p className="mt-5 leading-7 text-slate-300">
                            I create clean, responsive, and high-performing web applications
                            that solve real problems. From planning and design to development
                            and deployment, I focus on building products that are easy to use
                            and maintain.
                        </p>
                        <p className="mt-4 leading-7 text-slate-300">
                            With a strong interest in the MERN stack, I am always learning new
                            technologies and improving my skills to deliver better solutions.
                        </p>

                        <div className="mt-7 flex flex-wrap gap-4">
                            <a
                                href="#projects"
                                className="inline-block rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                            >
                                Project Live
                            </a>
                            <a
                                href="#contact"
                                className="inline-block rounded-lg border border-slate-700 bg-slate-800 px-5 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
                            >
                                View Demo
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <section className="bg-slate-950 px-6 py-16 text-white sm:px-10 lg:px-20">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-8 flex items-end justify-between gap-4">
                            <div>
                                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                                    Mini projects
                                </p>
                                <h2 className="text-3xl font-bold sm:text-4xl">Small builds, big ideas</h2>
                            </div>

                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    onClick={() => scrollMiniProjects('left')}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-lg text-cyan-300 transition hover:border-cyan-400 hover:text-cyan-200"
                                    aria-label="Scroll left"
                                >
                                    ←
                                </button>
                                <button
                                    type="button"
                                    onClick={() => scrollMiniProjects('right')}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-lg text-cyan-300 transition hover:border-cyan-400 hover:text-cyan-200"
                                    aria-label="Scroll right"
                                >
                                    →
                                </button>
                            </div>
                        </div>

                        <div
                            ref={miniProjectsRef}
                            className="flex snap-x gap-5 overflow-x-auto scroll-smooth pb-5 [scrollbar-width:thin] [-ms-overflow-style:none] [scrollbar-color:#22d3ee_#0f172a] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-800 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-cyan-400/80 hover:[&::-webkit-scrollbar-thumb]:bg-cyan-300"
                        >
                            {[
                                {
                                    title: 'Weather App',
                                    description: 'A clean weather dashboard with location-based forecasts.',
                                    tags: ['React', 'API'],
                                    color: 'from-cyan-500/30 to-blue-500/20',
                                },
                                {
                                    title: 'Expense Tracker',
                                    description: 'Track income and spending with a simple visual summary.',
                                    tags: ['JavaScript', 'Tailwind'],
                                    color: 'from-violet-500/30 to-fuchsia-500/20',
                                },
                                {
                                    title: 'Quiz Master',
                                    description: 'An interactive quiz app with instant answers and score tracking.',
                                    tags: ['React', 'UI Design'],
                                    color: 'from-emerald-500/30 to-cyan-500/20',
                                },
                                {
                                    title: 'Notes App',
                                    description: 'Organize, search, and manage notes in a focused workspace.',
                                    tags: ['MERN', 'CRUD'],
                                    color: 'from-orange-500/30 to-rose-500/20',
                                },
                            ].map((project) => (
                                <article
                                    key={project.title}
                                    className="group min-w-[280px] snap-start rounded-2xl border border-slate-800 bg-slate-900 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 sm:min-w-[330px]"
                                >
                                    <div className={`mb-5 flex h-32 items-center justify-center rounded-xl bg-gradient-to-br ${project.color} text-4xl font-bold text-cyan-300`}>
                                        {'</>'}
                                    </div>
                                    <h3 className="text-xl font-bold">{project.title}</h3>
                                    <p className="mt-2 min-h-14 text-sm leading-6 text-slate-400">{project.description}</p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-cyan-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </section>

        </>
    )
}

export default Project