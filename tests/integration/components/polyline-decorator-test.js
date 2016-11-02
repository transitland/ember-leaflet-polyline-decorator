import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('polyline-decorator', 'Integration | Component | polyline decorator', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{polyline-decorator}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#polyline-decorator}}
      template block text
    {{/polyline-decorator}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
