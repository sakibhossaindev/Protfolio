import React, { useState } from 'react'

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-slate-800 text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-2xl font-bold tracking-tight">
          SAKIB HOSSAIN
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#home" className="transition-colors hover:text-cyan-400">Home</a>
          <a href="#about" className="transition-colors hover:text-cyan-400">Skill</a>
          <a href="#projects" className="transition-colors hover:text-cyan-400">Project</a>
          <a href="#contact" className="transition-colors hover:text-cyan-400">Service</a>
          <a href="#contact" className="transition-colors hover:text-cyan-400">Contact</a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-md border border-slate-600 px-3 py-2 text-sm transition-colors hover:border-cyan-400 hover:text-cyan-400 md:hidden"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`${isMenuOpen ? 'flex' : 'hidden'} flex-col gap-3 border-t border-slate-700 px-6 py-4 md:hidden`}
      >
        <a href="#home" className="transition-colors hover:text-cyan-400">Home</a>
        <a href="#about" className="transition-colors hover:text-cyan-400">About</a>
        <a href="#projects" className="transition-colors hover:text-cyan-400">Projects</a>
        <a href="#contact" className="transition-colors hover:text-cyan-400">Contact</a>
      </div>
    </nav>
  )
}

export default App