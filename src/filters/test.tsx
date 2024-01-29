import { colors } from "react-select/dist/declarations/src/theme";
import type { Filter } from "../types";
import { hexToRGBA } from "../utils";
import { getIndexer } from "../utils";
type MyFilterOptions = {
  /* Define options here, as we will get them
  in our apply function -- this needs to match
  the list of options provided below. I'll provide
  three example options to show one of each type */
  color: string;
  strength: number;
  darkMode: boolean;
};
export const test: Filter<MyFilterOptions> = {
  name: "Test",
  apply: (pixels, width, height, options) => {
    const [red, green, blue, alpha] = hexToRGBA(options.color);
    let getIndexes = getIndexer(width);
    // We can now access our options with
    // e.g. options.color, options.strength, etc.

    // Note that "color" options give you a string (e.g. a hex code)
    // and our utils library has a convenience function to convert
    // from RGB (or RGBA) hex codes into an array of numbers (0-255)
    for (let c = width; c > width / 2; c--) {
      for (let row = 0; row < height; row++) {
        const [r, g, b, a] = getIndexes(row, c);
        pixels[r] = (pixels[r] + red) / 2;
        pixels[g] = (pixels[g] + green) / 2;
        pixels[b] = (pixels[b] + blue) / 2;
      }
    }
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
