/**
 * Converts a Hex color string to an RGB array.
 * Supports both 3-digit (#ABC) and 6-digit (#AABBCC) formats.
 */
export function hexToRgb(hex: string): [number, number, number] {
  // Remove '#' if present
  let cleanHex = hex.replace(/^#/, '');

  // Convert 3-digit hex to 6-digit
  if (cleanHex.length === 3) {
    cleanHex = cleanHex
      .split('')
      .map((char) => char + char)
      .join('');
  }

  // Parse hex to RGB
  const bigint = parseInt(cleanHex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return [r, g, b];
}

/**
 * Converts an RGB array to an HSL array.
 * Returns [Hue (0-360), Saturation (0-100), Lightness (0-100)]
 */
export function rgbToHsl(color: [number, number, number]): [number, number, number] {
  const [r, g, b] = color.map((c) => c / 255);

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h = Math.round(h * 60);
    if (h < 0) h += 360;
    s = Math.round(s * 100);
  }

  return [h, s, Math.round(l * 100)];
}

/**
 * Directly converts a Hex string to an HSL array.
 */
export function hexToHsl(hex: string): [number, number, number] {
  return rgbToHsl(hexToRgb(hex));
}
