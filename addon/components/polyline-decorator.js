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
    this._addPatternObserver();
  },

  willDestroyParent() {
    this._removePatternObserver();
    this._super(...arguments);
  },
  
  // Observe for when patterns option changes, so the decorator can be redrawn with the new pattern
  _addPatternObserver() {
    this._patternObserver = null;
    
    this._patternObserver = function() {
      let value = this.get('patterns');
      this._layer.setPatterns(value);
    };

    this.addObserver('patterns', this, this._patternObserver);
  },

  _removePatternObserver() {
    this.removeObserver('patterns', this, this._patternObserver);
    this._patternObserver = null;
  }
});
