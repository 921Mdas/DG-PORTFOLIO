module: {
  rules: [
    {
      test: /\.(glsl|vs|fs|frag|vert)$/,
      loader: "shader-loader",
      use: "raw-loader",
      options: {
        glsl: {
          chunkPath: resolve("/glsl/chunks"),
        },
      },
    },
  ];
}
