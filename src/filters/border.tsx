import type { Filter } from "../types";
import { getIndexer } from "../utils";
import { hexToRGBA } from "../utils";

type MyFilterOptions = {
  /* Define options here, as we will get them
  in our apply function -- this needs to match
  the list of options provided below. I'll provide
  three example options to show one of each type */
  color: string;
  thickness: number;
  strength: number;
};
export const border: Filter<MyFilterOptions> = {
  name: "Border",
  apply: (pixels, width, height, options) => {
    const [red, green, blue, alpha] = hexToRGBA(options.color);
    const borderThickness = options.thickness;
    // We can now access our options with
    // e.g. options.color, options.strength, etc.
    let getIndexes = getIndexer(width);
    for (let c = 0; c < width; c++) {
      for (let row = 0; row < borderThickness; row++) {
        const [r, g, b, a] = getIndexes(row, c);
        pixels[r] = red;
        pixels[g] = green;
        pixels[b] = blue;
      }
    }
    for (let c = 0; c < width; c++) {
      for (let row = height; row > height - borderThickness; row--) {
        const [r, g, b, a] = getIndexes(row, c);
        pixels[r] = red;
        pixels[g] = green;
        pixels[b] = blue;
      }
    }
    for (let row = 0; row < height; row++) {
      for (let c = 0; c < borderThickness; c++) {
        const [r, g, b, a] = getIndexes(row, c);
        pixels[r] = red;
        pixels[g] = green;
        pixels[b] = blue;
      }
    }
    for (let row = 0; row < height; row++) {
      for (let c = width; c > width - borderThickness; c--) {
        const [r, g, b, a] = getIndexes(row, c);
        pixels[r] = red;
        pixels[g] = green;
        pixels[b] = blue;
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
    {
      name: "thickness",
      type: "number",
      default: "20",
    },
  ],
};
