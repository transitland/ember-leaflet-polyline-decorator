import Ember from 'ember';
import BaseLayer from 'ember-leaflet/components/base-layer';

export default BaseLayer.extend({
  leafletRequiredOptions: [
    'latlngs'
  ],

  leafletOptions: [
    'patterns'
  ],

  createLayer() {
    return this.L.polylineDecorator(this.get('requiredOptions'), this.get('options'));
  }
});
