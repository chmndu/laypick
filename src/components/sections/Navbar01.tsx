export function Navbar01() {
  return (
    <header className="border-b border-black/10">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <span className="text-lg font-semibold tracking-tight">
          Studio
        </span>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          <span>Work</span>
          <span>About</span>
          <span>Contact</span>
        </nav>

        <button className="rounded-full border border-black/15 px-4 py-2 text-sm md:hidden">
          Menu
        </button>
      </div>
    </header>
  )
}