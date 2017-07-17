# Ember-leaflet-polyline-decorator

[![npm version](https://badge.fury.io/js/ember-leaflet-polyline-decorator.svg)](https://badge.fury.io/js/ember-leaflet-polyline-decorator)

An [Ember-CLI](https://ember-cli.com/) addon for using the [Leaflet Polyline Decorator plugin](https://github.com/bbecquet/Leaflet.PolylineDecorator) in [Ember Leaflet](http://www.ember-leaflet.com/).


## Installation

```bash
ember install ember-leaflet-polyline-decorator
```

## Updates
See [CHANGELOG](CHANGELOG.md) for the list of all changes.

## Basic Usage

```hbs
{{polyline-decorator latlngs=polylineLocations patterns=polylinePatterns}}
```

```javascript
polylineLocations: [
	L.latLng(latitude,longitude),
	L.latLng(latitude,longitude),
	L.latLng(latitude,longitude)
],
polylinePatterns: [
	{offset: 0, repeat: 50, symbol: L.Symbol.arrowHead({pixelSize: 15, headAngle: 30, pathOptions: {stroke: false, fillOpacity:1.0, weight:1, color:'red'}})}
]
```

For more comprehensive examples and usage, see the [Leaflet Polyline Decorator plugin](https://github.com/bbecquet/Leaflet.PolylineDecorator)