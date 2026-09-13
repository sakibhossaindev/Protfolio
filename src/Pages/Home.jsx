import React from 'react'

const Home = () => {
    return (
        <section className="flex min-h-screen items-center justify-center bg-[linear-gradient(135deg,#0f172a_0%,#111827_40%,#1e293b_100%)] px-5 py-10 font-sans text-slate-50">
            <div className="grid w-full max-w-[1200px] items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                    <p className="mb-5 inline-block rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold tracking-[0.5px] text-blue-100">
                      SAKIB HOSSAIN
                    </p>

                    <h1 className="mb-5 text-[clamp(2.5rem,5vw,5rem)] font-extrabold leading-[1.1]">
                        MERN Stack Developer
                    </h1>

                    <p className="mb-[30px] max-w-[620px] text-[1.1rem] leading-[1.8] text-slate-300">
                        I build modern, scalable, and user-friendly web applications using
                        MongoDB, Express, React, and Node.js. From concept to deployment,
                        I create powerful digital experiences that drive results.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a href="#projects" className="rounded-xl bg-green-500 px-6 py-3.5 font-bold text-green-950 no-underline shadow-[0_10px_25px_rgba(34,197,94,0.25)]">
                            View Projects
                        </a>
                        <a href="#contact" className="rounded-xl border border-white/20 bg-transparent px-6 py-3.5 font-bold text-slate-50 no-underline">
                            Contact Me
                        </a>
                    </div>

                    <div className="mt-[35px] flex flex-wrap gap-[30px]">
                        {[
                            ['3+', 'Years Experience'],
                            ['20+', 'Projects Delivered'],
                            ['100%', 'Client Satisfaction'],
                        ].map(([value, label]) => (
                            <div key={label}>
                                <div className="text-[1.8rem] font-extrabold">{value}</div>
                                <div className="text-[0.9rem] text-slate-400">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="w-full max-w-[420px] rounded-3xl border border-slate-400/25 bg-slate-900/80 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.5)]">
                        <div className="mb-5 rounded-[20px] bg-gradient-to-br from-blue-600 to-violet-600 p-5">
                            <div className="mb-3 text-xs uppercase tracking-[1px] text-blue-100">
                                Full Stack Workflow
                            </div>

                            <div className="grid gap-3 rounded-2xl bg-white/[0.08] p-4">
                                {['MongoDB', 'Express', 'React', 'Node.js'].map((tech) => (
                                    <div key={tech} className="flex items-center justify-between rounded-[10px] bg-slate-900/35 px-3 py-2.5">
                                        <span>{tech}</span>
                                        <span className="font-bold text-green-300">✓</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-[14px] border border-slate-400/20 bg-slate-900 p-[18px_16px]">
                                <div className="text-[0.85rem] text-slate-400">Projects</div>
                                <div className="text-3xl font-extrabold">45+</div>
                            </div>
                            <div className="rounded-[14px] border border-slate-400/20 bg-slate-900 p-[18px_16px]">
                                <div className="text-[0.85rem] text-slate-400">API</div>
                                <div className="text-3xl font-extrabold">60+</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home