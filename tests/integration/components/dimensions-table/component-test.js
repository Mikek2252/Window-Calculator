import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | dimensions-table', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {

    this.dimensions = [
      { name: "frame Width", value: 100 },
      { name: "frame Height", value: 79 },
    ];

    await render(hbs`<DimensionsTable @dimensions={{this.dimensions}} />`);

    assert.dom('[data-test-dimension-row]').exists({ count: 2 });
    assert.dom('[data-test-dimension-row="frame Width"] [data-test-dimension-name]').hasText('frame Width');
    assert.dom('[data-test-dimension-row="frame Width"] [data-test-dimension-value]').hasText('100');
    assert.dom('[data-test-dimension-row="frame Height"] [data-test-dimension-name]').hasText('frame Height');
    assert.dom('[data-test-dimension-row="frame Height"] [data-test-dimension-value]').hasText('79');
  });
});
