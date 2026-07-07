export type Segment =
  | { type: "text"; value: string }
  | { type: "link"; value: string; href: string };

export const segments: Segment[] = [
  { type: "text", value: "Hey, " },
  { type: "link", value: "I'm Lucas ", href: "https://x.com/lukecarry_" },
  { type: "text", value: "and I build viral consumer apps " },
];

export const fullText = segments.map((segment) => segment.value).join("");

export const TYPING_DELAY_MS = 45;
export const SEGMENT_PAUSE_MS = 600;

export const segmentStarts = segments.reduce<number[]>(
  (starts, segment, index) => {
    if (index === 0) return [0];
    return [...starts, starts[index - 1] + segments[index - 1].value.length];
  },
  [],
);

export function getTypingDelay(charIndex: number) {
  return segmentStarts.includes(charIndex) && charIndex > 0
    ? SEGMENT_PAUSE_MS
    : TYPING_DELAY_MS;
}
