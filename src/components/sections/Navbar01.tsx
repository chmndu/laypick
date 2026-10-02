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
        <span
          style={{
            fontFamily: "var(--lp-type-navigation-font)",
            fontSize: "var(--lp-type-navigation-size)",
            lineHeight: "var(--lp-type-navigation-line-height)",
            fontWeight: "var(--lp-type-navigation-weight)",
            letterSpacing: "var(--lp-type-navigation-tracking)",
          }}
        >
          {content.brand}
        </span>

        <nav
          className="hidden items-center gap-8 md:flex"
          style={{
            fontFamily: "var(--lp-type-navigation-font)",
            fontSize: "var(--lp-type-navigation-size)",
            lineHeight: "var(--lp-type-navigation-line-height)",
            fontWeight: "var(--lp-type-navigation-weight)",
            letterSpacing: "var(--lp-type-navigation-tracking)",
          }}
        >
          <span>Work</span>
          <span>About</span>
          <span>Contact</span>
        </nav>

        <button
          className="rounded-full border border-[var(--lp-border)] px-4 py-2 md:hidden"
          style={{
            borderRadius: "var(--lp-radius)",
            fontFamily: "var(--lp-type-button-font)",
            fontSize: "var(--lp-type-button-size)",
            lineHeight: "var(--lp-type-button-line-height)",
            fontWeight: "var(--lp-type-button-weight)",
            letterSpacing: "var(--lp-type-button-tracking)",
          }}
        >
          Menu
        </button>
      </div>
    </header>
  )
}