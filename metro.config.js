const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const blacklist = require('metro-config/src/defaults/exclusionList')

config = {
  resolver: {
    blacklistRE: blacklist([/\/nodejs-assets\/.*/, /\/android\/.*/, /\/ios\/.*/]),
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
}

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
