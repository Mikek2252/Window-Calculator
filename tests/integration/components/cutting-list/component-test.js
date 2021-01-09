import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | cutting-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    let store = this.owner.lookup('service:store');
    this.components = [
      store.createRecord('component', {
        name: 'Component 1',
        height: 100,
        width: 200,
        depth: 300,
        count: 25,
        lengthKey: 'width',
      }),
      store.createRecord('component', {
        name: 'Component 2',
        height: 20,
        width: 40,
        depth: 50,
        count: 35,
        lengthKey: 'height',
      }),
      store.createRecord('component', {
        name: 'Component 3',
        height: 20,
        width: 40,
        depth: 50,
        count: 35,
        lengthKey: 'depth',
      }),
    ];

    await render(hbs`<CuttingList @components={{this.components}}/>`);

    assert.dom('[data-test-component-row]').exists({ count: 3 });
    assert
      .dom(
        '[data-test-component-row="Component 1"] [data-test-component-height]',
      )
      .hasText('100');
    assert
      .dom(
        '[data-test-component-row="Component 1"] [data-test-component-width]',
      )
      .hasText('200');
    assert
      .dom(
        '[data-test-component-row="Component 1"] [data-test-component-depth]',
      )
      .hasText('300');
    assert
      .dom(
        '[data-test-component-row="Component 1"] [data-test-component-count]',
      )
      .hasText('25');
    assert
      .dom(
        '[data-test-component-row="Component 1"] [data-test-component-width]',
      )
      .hasClass('highlight');
    assert
      .dom(
        '[data-test-component-row="Component 1"] [data-test-component-cubic-feet]',
      )
      .hasText('0.2115');
    assert
      .dom(
        '[data-test-component-row="Component 1"] [data-test-component-cubic-meters]',
      )
      .hasText('0.0060');
  });
});
