export function Footer01() {
  return (
    <footer
      className="border-t"
      style={{
        borderColor: "var(--lp-border)",
      }}
    >
      <div
        className="mx-auto flex flex-col gap-4 px-6 py-8 text-sm md:flex-row md:items-center md:justify-between"
        style={{
          maxWidth: "var(--lp-max-width)",
          color: "var(--lp-muted)",
        }}
      >
        <span>Studio</span>

        <span>© 2026 All rights reserved.</span>
      </div>
    </footer>
  )
}