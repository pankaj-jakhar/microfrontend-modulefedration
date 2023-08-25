const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;

module.exports = function override(config, env) {
  config.plugins.push(
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        host: `host@http://localhost:7002/_next/static/chunks/remoteEntry.js`,
        app1: "app1@http://localhost:8000/remoteEntry.js",
      },
      shared: {
        ...deps,
        react: { singleton: true, eager: true, requiredVersion: deps.react },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: deps["react-dom"],
        },
        "react-router-dom": {
          singleton: true,
          eager: true,
          requiredVersion: deps["react-router-dom"],
        },
      },
    }),
  );

  return config;
};
