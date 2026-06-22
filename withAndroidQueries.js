const { withAndroidManifest } = require('@expo/config-plugins');

module.exports = function withAndroidQueries(config) {
  return withAndroidManifest(config, async (config) => {
    const androidManifest = config.modResults;

    if (!androidManifest.manifest.queries) {
      androidManifest.manifest.queries = [];
    }

    // Check if package array already exists to avoid duplicates
    let packages = [];
    if (androidManifest.manifest.queries.length > 0 && androidManifest.manifest.queries[0].package) {
      packages = androidManifest.manifest.queries[0].package;
    } else {
      androidManifest.manifest.queries.push({ package: packages });
    }

    const appsToQuery = [
      'br.gov.serpro.denatran.fiscalizacaodenatran',
      'br.kms.placafipe',
      'com.jeyluta.timestampcamerafree',
      'com.devplank.masterplaca'
    ];

    appsToQuery.forEach((packageName) => {
      // Avoid duplicate entries
      const exists = packages.some(p => p.$ && p.$['android:name'] === packageName);
      if (!exists) {
        packages.push({ $: { 'android:name': packageName } });
      }
    });

    return config;
  });
};
