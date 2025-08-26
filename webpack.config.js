const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');
const share = mf.share;
const mfHelpers = require('module-federation-helpers');
const getSharedDependency = mfHelpers.getSharedDependency;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, 'tsconfig.json'), [
  /* mapped paths to share */
]);

module.exports = {
  output: {
    uniqueName: 'mf1',
    publicPath: 'auto',
  },
  optimization: {
    runtimeChunk: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: 'module' },

      name: 'mf1Plugin',
      filename: 'remoteEntry.js',
      exposes: {
        './ExternalRoutes':
          './src/app/external/external.routes.ts',
      },

      shared: share({
        ...getSharedDependency('@angular/core', {
          singleton: true,
          strictVersion: true,
          requiredVersion: '^auto',
        }),
        ...getSharedDependency('@angular/common', {
          singleton: true,
          strictVersion: true,
          requiredVersion: '^auto',
        }),
        ...getSharedDependency('@angular/material', {
          singleton: true,
          strictVersion: true,
          requiredVersion: '^auto',
        }),
        ...getSharedDependency('@angular/router', {
          singleton: true,
          strictVersion: true,
          requiredVersion: '^auto',
        }),


        ...sharedMappings.getDescriptors(),
      }),
    }),
    sharedMappings.getPlugin(),
  ],
};
