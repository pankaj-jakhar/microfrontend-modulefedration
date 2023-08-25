/** @type {import('next').NextConfig} */

const NextFederationPlugin = require('@module-federation/nextjs-mf')
const remotes = isServer => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    host: `host@http://localhost:7002/_next/static/${location}/remoteEntry.js`,
    app1: "app1@http://localhost:8000/remoteEntry.js",
  };
};

const nextConfig = {
    webpack: (config, { isServer }) => {
        config.plugins.push(
          new NextFederationPlugin({
            name: 'remote',
            remotes: remotes(isServer),
            exposes: {
                './test': './src/pages/test.js',
              },
            filename: 'static/chunks/remoteEntry.js',
            shared: { },
          }),
        )
    
        return config
      },
}

module.exports = nextConfig
// my-next-remote port 7001