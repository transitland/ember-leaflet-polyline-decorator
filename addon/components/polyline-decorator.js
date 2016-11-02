import Ember from 'ember';
import ArrayPathLayer from 'ember-leaflet/components/polyline-layer';

export default ArrayPathLayer.extend({
  leafletOptions: [
    'offset',
    'endOffset',
    'repeat',
    'symbol'
  ],

  createLayer() {
    return this.L.polylineDecorator(...this.get('requiredOptions'), this.get('options'));
  }
});
