import type { NavbarContent } from "@/types/content"

type Navbar01Props = {
  content: NavbarContent
}

export function Navbar01({
  content,
}: Navbar01Props) {
  return (
    <header className="border-b border-[var(--lp-border)]">
      <div
        className="mx-auto flex h-20 items-center justify-between px-6"
        style={{
          maxWidth: "var(--lp-max-width)",
        }}
      >
        <span className="text-lg">
          {content.brand}
        </span>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          <span>Work</span>
          <span>About</span>
          <span>Contact</span>
        </nav>

        <button
          className="rounded-full border border-[var(--lp-border)] px-4 py-2 text-sm md:hidden"
          style={{ borderRadius: "var(--lp-radius)" }}
        >
          Menu
        </button>
      </div>
    </header>
  )
}