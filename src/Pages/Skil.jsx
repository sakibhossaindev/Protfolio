import React from 'react'

const Skil = () => {
    return (
        <>
            <section id="skills" className="bg-slate-950 px-6 py-20 text-white sm:px-8 lg:px-12">
                <div className="mx-auto max-w-6xl">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">My expertise</p>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Skills &amp; Technologies</h2>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                        I build modern, scalable, and user-friendly web applications with
                        the MERN stack.
                    </p>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition hover:-translate-y-1 hover:border-cyan-400/60">
                            <h3 className="text-xl font-semibold text-cyan-300">Frontend</h3>
                            <ul className="mt-5 space-y-3 text-slate-300">
                                <li>HTML5 &amp; CSS3</li>
                                <li>JavaScript (ES6+)</li>
                                <li>React.js</li>
                                <li>Responsive Design</li>
                            </ul>
                        </article>

                        <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition hover:-translate-y-1 hover:border-cyan-400/60">
                            <h3 className="text-xl font-semibold text-cyan-300">Backend</h3>
                            <ul className="mt-5 space-y-3 text-slate-300">
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>REST APIs</li>
                                <li>Authentication &amp; Authorization</li>
                            </ul>
                        </article>

                        <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition hover:-translate-y-1 hover:border-cyan-400/60">
                            <h3 className="text-xl font-semibold text-cyan-300">Database &amp; Tools</h3>
                            <ul className="mt-5 space-y-3 text-slate-300">
                                <li>MongoDB</li>
                                <li>Mongoose</li>
                                <li>Git &amp; GitHub</li>
                                <li>Postman &amp; VS Code</li>
                            </ul>
                        </article>
                    </div>
                </div>
            </section>

           
        </>

    )
}

export default Skil