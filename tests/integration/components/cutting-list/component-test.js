import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | cutting-list', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.components = [
      {
        name: 'Component 1',
        height: 10,
        width: 20,
        depth: 30,
        count: 25,
        lengthKey: 'width'
      },
      {
        name: 'Component 2',
        height: 20,
        width: 40,
        depth: 50,
        count: 35,
        lengthKey: 'height'
      },
      {
        name: 'Component 3',
        height: 20,
        width: 40,
        depth: 50,
        count: 35,
        lengthKey: 'depth'
      }
    ];

    await render(hbs`<CuttingList @components={{this.components}}/>`);

    assert.dom('[data-test-component-row]').exists({ count: 3 });
    assert.dom('[data-test-component-row="Component 1"] [data-test-component-height]').hasText('10');
    assert.dom('[data-test-component-row="Component 1"] [data-test-component-width]').hasText('20');
    assert.dom('[data-test-component-row="Component 1"] [data-test-component-depth]').hasText('30');
    assert.dom('[data-test-component-row="Component 1"] [data-test-component-count]').hasText('25');
    assert.dom('[data-test-component-row="Component 1"] [data-test-component-width]').hasClass('highlight');

  });
});
