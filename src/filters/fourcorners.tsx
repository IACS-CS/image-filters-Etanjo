import type { Filter } from "../types";
import { getIndexer } from "../utils";
import { hexToRGBA } from "../utils";

export const fourcorners: Filter = {
  name: "Windowsify",
  apply: (pixels, width, height, options) => {
    const borderThickness = options.thickness;
    // We can now access our options with
    // e.g. options.color, options.strength, etc.
    let getIndexes = getIndexer(width);
    for (let c = 0; c < width / 2; c++) {
      for (let row = 0; row < height / 2; row++) {
        const [r, g, b, a] = getIndexes(row, c);
        pixels[r] = pixels[r] + 60;
        pixels[g] = pixels[g];
        pixels[b] = pixels[b];
      }
    }
    for (let c = 0; c < width / 2; c++) {
      for (let row = height; row > height / 2; row--) {
        const [r, g, b, a] = getIndexes(row, c);
        pixels[b] = pixels[b] + 60;
        pixels[r] = pixels[r];
        pixels[g] = pixels[g];
      }
    }
    for (let c = width; c > width / 2; c--) {
      for (let row = height; row > height / 2; row--) {
        const [r, g, b, a] = getIndexes(row, c);
        pixels[b] = pixels[b];
        pixels[r] = pixels[r] + 60;
        pixels[g] = pixels[g] + 60;
      }
    }
    for (let c = width; c > width / 2; c--) {
      for (let row = 0; row < height / 2; row++) {
        const [r, g, b, a] = getIndexes(row, c);
        pixels[r] = pixels[r];
        pixels[g] = pixels[g] + 60;
        pixels[b] = pixels[b];
      }
    }

    // Note that "color" options give you a string (e.g. a hex code)
    // and our utils library has a convenience function to convert
    // from RGB (or RGBA) hex codes into an array of numbers (0-255)

    /* Modify pixels... */
    return pixels;
  },
  options: [
    {
      name: "color",
      type: "color",
      default: "#ff0000",
    },
  ],
};
