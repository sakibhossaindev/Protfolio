import React from 'react'

const Abouts = () => {
    return (
        <main className="min-h-screen bg-slate-950 px-6 py-16 text-white sm:px-10 lg:px-20">
            <section className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
                <div>
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                        About me
                    </p>
                    <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
                        Building modern web experiences with the MERN stack.
                    </h1>
                    <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                        I am a passionate full-stack developer who creates fast, scalable,
                        and user-friendly applications using MongoDB, Express.js, React,
                        and Node.js. I enjoy turning ideas into clean, practical products.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        {['MongoDB', 'Express.js', 'React', 'Node.js'].map((skill) => (
                            <span
                                key={skill}
                                className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl shadow-cyan-950/30">
                    <h2 className="text-2xl font-semibold">What I bring</h2>
                    <div className="mt-6 space-y-6">
                        <div>
                            <h3 className="font-medium text-cyan-300">Full-stack development</h3>
                            <p className="mt-2 text-slate-400">
                                From responsive interfaces to secure REST APIs and databases, I
                                build complete solutions from start to finish.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-medium text-cyan-300">Clean and maintainable code</h3>
                            <p className="mt-2 text-slate-400">
                                I focus on reusable components, thoughtful architecture, and
                                performance that supports long-term growth.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-medium text-cyan-300">Continuous learning</h3>
                            <p className="mt-2 text-slate-400">
                                I keep improving my skills and stay curious about modern tools,
                                best practices, and emerging technologies.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Abouts