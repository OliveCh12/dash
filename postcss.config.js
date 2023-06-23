/** @type {import('postcss-load-config').Config} */

import autoprefixer from "autoprefixer";
import nested from "postcss-nested";
import postcssColorMod from "postcss-color-mod-function";

export default {
  plugins: [
    autoprefixer(),
    nested(),
    postcssColorMod(),
  ],
};
