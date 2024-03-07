import type { Filter } from "../types";
export default {
  name: "Let There Be Light",
  apply: (pixels: Uint8ClampedArray) => {
    for (let i = 0; i < pixels.length; i++) {
      // Pixels come in order of red, green, blue, alpha
      // So we need to check if the current pixel is red, green, blue, or alpha
      const isRed = i % 4 === 0;
      const isGreen = i % 4 === 1;
      const isBlue = i % 4 === 2;
      const isAlpha = i % 4 === 3;
      // Now let's check its position in the array...

      if (!isAlpha) {
        pixels[i] = pixels[i] + 100;
      }
    }
    return pixels;
  },
} as Filter;
