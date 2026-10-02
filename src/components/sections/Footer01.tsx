import type { FooterContent } from "@/types/content"

type Footer01Props = {
  content: FooterContent
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
        className="mx-auto flex flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between"
        style={{
          maxWidth: "var(--lp-max-width)",
          color: "var(--lp-muted)",
          fontFamily: "var(--lp-type-caption-font)",
          fontSize: "var(--lp-type-caption-size)",
          lineHeight: "var(--lp-type-caption-line-height)",
          fontWeight: "var(--lp-type-caption-weight)",
          letterSpacing: "var(--lp-type-caption-tracking)",
        }}
      >
        <span>{content.brand}</span>
        <span>{content.copyright}</span>
      </div>
    </footer>
  )
}