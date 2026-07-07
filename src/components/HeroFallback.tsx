import type { ReactNode } from "react";
import { fullText, segments } from "@/lib/hero-content";

const linkClassName = "text-gray-200 hover:text-white hover:underline";

function renderSegments(charIndex: number): ReactNode[] {
  let remaining = charIndex;
  const parts: ReactNode[] = [];

  for (const segment of segments) {
    if (remaining <= 0) break;

    const visibleLength = Math.min(remaining, segment.value.length);
    const visibleText = segment.value.slice(0, visibleLength);
    remaining -= visibleLength;

    if (segment.type === "link") {
      parts.push(
        <a
          key={segment.href}
          href={segment.href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          {visibleText}
        </a>,
      );
    } else {
      parts.push(visibleText);
    }
  }

  return parts;
}

export function HeroFallback() {
  const content = renderSegments(fullText.length);

  return (
    <>
      <span className="sr-only">{content}</span>
      <noscript>{content}</noscript>
    </>
  );
}
