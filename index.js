/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-leaflet-polyline-decorator',
  included: function(app) {
    app.import(app.bowerDirectory + '/leaflet-polylinedecorator/leaflet.polylineDecorator.js');
  }
};
