import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";
import PolylineDecorator from "ember-leaflet-polyline-decorator/components/polyline-decorator";
/* global L */

let polylineDecorator;

module("Integration | Component | polyline decorator", function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register(
      "component:polyline-decorator",
      PolylineDecorator.extend({
        init() {
          this._super(...arguments);
          polylineDecorator = this;
        }
      })
    );

    this.set("center", L.latLng(45.5283, -122.663));
    this.set(
      "latlngs",
      [
        [-122.68335, 45.5127],
        [-122.68422, 45.51293],
        [-122.68469, 45.51306],
        [-122.68474, 45.51309],
        [-122.68548, 45.51328],
        [-122.68561, 45.51332],
        [-122.68568, 45.51336],
        [-122.68504, 45.51456]
      ].map(coord => L.latLng(coord[1], coord[0]))
    );
    this.set("patterns", [
      {
        offset: 0,
        repeat: 20,
        symbol: L.Symbol.arrowHead({
          pixelSize: 12,
          pathOptions: { fillOpacity: 1, weight: 0 }
        })
      }
    ]);
  });

  test("it renders", async function(assert) {
    await render(hbs`
      <LeafletMap @zoom={{10}} @center={{center}} @maxZoom={{25}} as |layers|>
        <layers.polyline-decorator @latlngs={{latlngs}} @patterns={{patterns}} as |polylineDecorator|>
          <polylineDecorator.polyline @locations={{latlngs}} />
        </layers.polyline-decorator>
      </LeafletMap>`);

    assert.equal(polylineDecorator.childComponents.length, 1);
  });

  test("it renders with patterns options", async function(assert) {
    await render(hbs`
      <LeafletMap @zoom={{10}} @center={{center}} @maxZoom={{25}} as |layers|>
        <layers.polyline-decorator @latlngs={{latlngs}} @patterns={{patterns}} as |polylineDecorator|>
          <polylineDecorator.polyline @locations={{latlngs}} />
        </layers.polyline-decorator>
      </LeafletMap>`);

    assert.equal(polylineDecorator._layer.options.patterns[0].offset, 0);
  });
});
