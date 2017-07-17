/* jshint node: true */
'use strict';
const resolve = require('resolve');
const path = require('path');
const Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-leaflet-polyline-decorator',

  treeForVendor: function() {
    let dist = path.join(this.pathBase('leaflet-polylinedecorator'), 'dist');
    return new Funnel(dist, { destDir: 'leaflet-polylinedecorator' });
  },

  included: function(app) {
    this._super.included.apply(this, arguments);

    // If the addon has the _findHost() method (in ember-cli >= 2.7.0), we'll just
    // use that.
    if (typeof this._findHost === 'function') {
      app = this._findHost();
    }

    // Otherwise, we'll use this implementation borrowed from the _findHost()
    // method in ember-cli.
    // Keep iterating upward until we don't have a grandparent.
    // Has to do this grandparent check because at some point we hit the project.
    var current = this;
    do {
     app = current.app || app;
    } while (current.parent.parent && (current = current.parent));

    var baseDir = 'vendor/leaflet-polylinedecorator/';
    
    app.import(baseDir + 'leaflet.polylineDecorator.js'); // Import the javascript into the app
  },

  pathBase: function(packageName) {
    return path.dirname(resolve.sync(packageName + '/package.json', { basedir: __dirname }));
  }
};