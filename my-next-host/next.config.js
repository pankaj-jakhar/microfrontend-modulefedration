/** @type {import('next').NextConfig} */

const NextFederationPlugin = require('@module-federation/nextjs-mf')
// const remotes = isServer => {
//     const location = isServer ? 'ssr' : 'chunks';
//     return {
//       remote: `remote@http://localhost:7001/_next/static/${location}/remoteEntry.js`,
//     };
// };
const nextConfig = {
    webpack(config, { isServer }) {
        config.plugins.push(
          new NextFederationPlugin({
            name: 'host',
            // remotes: remotes(isServer),
            exposes: {
                './test2': './src/pages/test2.js',
              },
            filename: 'static/chunks/remoteEntry.js',
            shared: {}, 
          }),
        )
        return config
      },
}

module.exports = nextConfig
// my-next-host port 7002
