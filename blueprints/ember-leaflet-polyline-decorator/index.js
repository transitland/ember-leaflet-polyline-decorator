/*jshint node:true*/
module.exports = {
  description: 'add leaflet-polylinedecorator, using npm',

  normalizeEntityName: function() {}, // no-op since we're just adding dependencies
  
  afterInstall: function() {
    return this.addPackageToProject('leaflet-polylinedecorator', '^1.2.0'); // Add's a package to the project's package.json
  }
};
