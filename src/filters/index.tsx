import type { Filter } from "../types";
import sampleRoseColoredGlasses from "./samples/roseColoredGlasses";
import sampleGrid from "./samples/grid";
import sampleVignette from "./samples/vignette";
import Twilight from "./samples/twilight";
import antiblue from "./antiblue";
import brighten from "./brighten";
import darken from "./darken";
import { border } from "./border";
import { fourcorners } from "./fourcorners";
const filters: Filter[] = [
  Twilight,
  sampleRoseColoredGlasses,
  sampleGrid,
  sampleVignette,
  antiblue,
  brighten,
  darken,
  border,
  fourcorners,
];

export default filters;
