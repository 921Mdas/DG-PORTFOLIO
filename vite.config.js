import { defineConfig } from "vite";
import glsl from "vite-plugin-glsl";
import curlNoise from "glsl-curl-noise2";
import classicNoise from "glsl-noise/classic/3d.glsl";

export default defineConfig({
  plugins: [
    glsl({
      include: [/\.glsl$/, /\.vert$/, /\.frag$/],
      transform: (code, id) => {
        if (/\.glsl$/.test(id)) {
          code = code.replace(
            /#pragma glslify: curl = require\('glsl-curl-noise2'\)/g,
            curlNoise
          );
          code = code.replace(
            /#pragma glslify: noise = require\('glsl-noise\/classic\/3d.glsl'\)/g,
            classicNoise
          );
        }
        return code;
      },
    }),
  ],
});
