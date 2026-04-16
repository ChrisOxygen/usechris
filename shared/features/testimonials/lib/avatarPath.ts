/**
 * Derives the avatar image path from a testimonial author's name.
 * e.g. "Marcus Webb" → "/assets/marcuswebb.webp"
 */
export function avatarPath(name: string): string {
  return `/assets/${name.replace(/\s+/g, "").toLowerCase()}.webp`;
}
