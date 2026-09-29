import type { ContentValue } from "@/types/content"

type Footer01Props = {
  content: Record<string, ContentValue>
}

export function Footer01({
  content,
}: Footer01Props) {
  return (
    <footer
      className="border-t"
      style={{ borderColor: "var(--lp-border)" }}
    >
      <div
        className="mx-auto flex flex-col gap-4 px-6 py-8 text-sm md:flex-row md:items-center md:justify-between"
        style={{
          maxWidth: "var(--lp-max-width)",
          color: "var(--lp-muted)",
        }}
      >
        <span>{content.brand}</span>
        <span>{content.copyright}</span>
      </div>
    </footer>
  )
}