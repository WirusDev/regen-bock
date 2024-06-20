import path from "path";

const nextConfig = {
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "[name].[hash].[ext]",
          publicPath: `/_next/static/media/`,
          outputPath: `${isServer ? "../" : ""}static/media/`,
          esModule: false,
        },
      },
    });

    return config;
  },
};

export default nextConfig;
