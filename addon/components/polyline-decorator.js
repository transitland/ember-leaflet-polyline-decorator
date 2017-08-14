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
  },

  didInsertParent() {
    this._super(...arguments);
    this._addObservers();
  },

  willDestroyParent() {
    this._removeObservers();
    this._super(...arguments);
  },
  
  // Observe for when patterns option changes, so the decorator can be redrawn with the new pattern
  _addObservers() {
    this._argObservers = {};
    
    this._argObservers['patterns'] = function() {
      let value = this.get('patterns');
      this._layer.setPatterns(value);
    };
    this.addObserver('patterns', this, this._argObservers['patterns']);
    
    this._argObservers['latlngs'] = function() {
      let value = this.get('latlngs');
      this._layer.setPaths(value);
    };
    this.addObserver('latlngs', this, this._argObservers['latlngs']);
  },

  _removeObservers() {
    this.removeObserver('patterns', this, this._argObservers['patterns']);
    this.removeObserver('latlngs', this, this._argObservers['latlngs']);
    this._argObservers = {};
  }
});
