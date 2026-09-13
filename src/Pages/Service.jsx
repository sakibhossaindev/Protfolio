import React from 'react'

const Service = () => {
    return (
        <section className="bg-slate-950 px-6 py-20 text-white sm:px-10 lg:px-20" id="services">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto mb-14 max-w-2xl text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                        What I offer
                    </p>
                    <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Services that bring ideas to life</h2>
                    <p className="mt-5 text-slate-400">
                        I build fast, scalable, and user-friendly web applications tailored to your goals.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    <article className="group rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/60">
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-400/10 text-3xl text-cyan-400">
                            &lt;/&gt;
                        </div>
                        <h3 className="text-2xl font-bold">Full Stack Development</h3>
                        <p className="mt-4 leading-7 text-slate-400">
                            End-to-end web solutions, from responsive frontends to secure backend APIs and databases.
                            I turn complex requirements into reliable, production-ready applications.
                        </p>
                        <ul className="mt-6 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
                            <li>✓ Responsive UI development</li>
                            <li>✓ REST API integration</li>
                            <li>✓ Database architecture</li>
                            <li>✓ Deployment & maintenance</li>
                            <li>✓ Business logic workflows</li>
                            <li>✓ Performance optimization</li>
                        </ul>
                    </article>

                    <article className="group rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-emerald-400/60">
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-400/10 text-3xl text-emerald-400">
                            M
                        </div>
                        <h3 className="text-2xl font-bold">MERN Stack Development</h3>
                        <p className="mt-4 leading-7 text-slate-400">
                            Modern JavaScript applications powered by MongoDB, Express, React, and Node.js for a
                            smooth, scalable, and maintainable development experience.
                        </p>
                        <ul className="mt-6 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
                            <li>✓ React applications</li>
                            <li>✓ Node.js & Express APIs</li>
                            <li>✓ MongoDB solutions</li>
                            <li>✓ Authentication & security</li>
                            <li>✓ Real-time features</li>
                            <li>✓ Scalable architecture</li>
                        </ul>
                    </article>

                    <article className="group rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-violet-400/60 md:col-span-2 xl:col-span-1">
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-violet-400/10 text-3xl text-violet-400">
                            ⚡
                        </div>
                        <h3 className="text-2xl font-bold">Custom Web Solutions</h3>
                        <p className="mt-4 leading-7 text-slate-400">
                            Tailored digital products designed to match your brand, workflows, and user expectations.
                            From landing pages to dashboards and client portals, every detail is crafted for impact.
                        </p>
                        <ul className="mt-6 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
                            <li>✓ Landing pages</li>
                            <li>✓ Admin dashboards</li>
                            <li>✓ SaaS product builds</li>
                            <li>✓ UI/UX refinement</li>
                            <li>✓ Third-party integrations</li>
                            <li>✓ Ongoing support</li>
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Service 