import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | window', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /window', async function (assert) {
    await visit('/calculator');

    assert.equal(currentURL(), '/calculator');

    await click('[data-test-calculate]');

    assert.dom('[data-test-component-row]').exists({ count: 15 });
    assert
      .dom('[data-test-component-row="Cill"] [data-test-component-name]')
      .hasText('Cill');
    assert
      .dom('[data-test-component-row="Cill"] [data-test-component-height]')
      .hasText('60');
    assert
      .dom('[data-test-component-row="Cill"] [data-test-component-width]')
      .hasText('1142');
    assert
      .dom('[data-test-component-row="Cill"] [data-test-component-depth]')
      .hasText('143');
    assert
      .dom('[data-test-component-row="Cill"] [data-test-component-count]')
      .hasText('1');
    assert
      .dom('[data-test-component-row="Cill"] [data-test-component-width]')
      .hasClass('highlight');

    assert
      .dom('[data-test-component-row="Head"] [data-test-component-name]')
      .hasText('Head');
    assert
      .dom('[data-test-component-row="Head"] [data-test-component-height]')
      .hasText('22');
    assert
      .dom('[data-test-component-row="Head"] [data-test-component-width]')
      .hasText('1142');
    assert
      .dom('[data-test-component-row="Head"] [data-test-component-depth]')
      .hasText('113');
    assert
      .dom('[data-test-component-row="Head"] [data-test-component-count]')
      .hasText('1');
    assert
      .dom('[data-test-component-row="Head"] [data-test-component-width]')
      .hasClass('highlight');

    assert
      .dom(
        '[data-test-component-row="Outer Lining Head"] [data-test-component-name]',
      )
      .hasText('Outer Lining Head');
    assert
      .dom(
        '[data-test-component-row="Outer Lining Head"] [data-test-component-height]',
      )
      .hasText('98');
    assert
      .dom(
        '[data-test-component-row="Outer Lining Head"] [data-test-component-width]',
      )
      .hasText('940');
    assert
      .dom(
        '[data-test-component-row="Outer Lining Head"] [data-test-component-depth]',
      )
      .hasText('16');
    assert
      .dom(
        '[data-test-component-row="Outer Lining Head"] [data-test-component-count]',
      )
      .hasText('1');
    assert
      .dom(
        '[data-test-component-row="Outer Lining Head"] [data-test-component-width]',
      )
      .hasClass('highlight');

    assert
      .dom(
        '[data-test-component-row="Inner Lining Head"] [data-test-component-name]',
      )
      .hasText('Inner Lining Head');
    assert
      .dom(
        '[data-test-component-row="Inner Lining Head"] [data-test-component-height]',
      )
      .hasText('80');
    assert
      .dom(
        '[data-test-component-row="Inner Lining Head"] [data-test-component-width]',
      )
      .hasText('976');
    assert
      .dom(
        '[data-test-component-row="Inner Lining Head"] [data-test-component-depth]',
      )
      .hasText('14');
    assert
      .dom(
        '[data-test-component-row="Inner Lining Head"] [data-test-component-count]',
      )
      .hasText('1');
    assert
      .dom(
        '[data-test-component-row="Inner Lining Head"] [data-test-component-width]',
      )
      .hasClass('highlight');

    assert
      .dom(
        '[data-test-component-row="Outer Lining"] [data-test-component-name]',
      )
      .hasText('Outer Lining');
    assert
      .dom(
        '[data-test-component-row="Outer Lining"] [data-test-component-height]',
      )
      .hasText('1678');
    assert
      .dom(
        '[data-test-component-row="Outer Lining"] [data-test-component-width]',
      )
      .hasText('101');
    assert
      .dom(
        '[data-test-component-row="Outer Lining"] [data-test-component-depth]',
      )
      .hasText('16');
    assert
      .dom(
        '[data-test-component-row="Outer Lining"] [data-test-component-count]',
      )
      .hasText('2');
    assert
      .dom(
        '[data-test-component-row="Outer Lining"] [data-test-component-height]',
      )
      .hasClass('highlight');

    assert
      .dom(
        '[data-test-component-row="Inner Lining"] [data-test-component-name]',
      )
      .hasText('Inner Lining');
    assert
      .dom(
        '[data-test-component-row="Inner Lining"] [data-test-component-height]',
      )
      .hasText('1678');
    assert
      .dom(
        '[data-test-component-row="Inner Lining"] [data-test-component-width]',
      )
      .hasText('83');
    assert
      .dom(
        '[data-test-component-row="Inner Lining"] [data-test-component-depth]',
      )
      .hasText('14');
    assert
      .dom(
        '[data-test-component-row="Inner Lining"] [data-test-component-count]',
      )
      .hasText('2');
    assert
      .dom(
        '[data-test-component-row="Inner Lining"] [data-test-component-height]',
      )
      .hasClass('highlight');

    assert
      .dom(
        '[data-test-component-row="Pulley Stiles"] [data-test-component-name]',
      )
      .hasText('Pulley Stiles');
    assert
      .dom(
        '[data-test-component-row="Pulley Stiles"] [data-test-component-height]',
      )
      .hasText('1578');
    assert
      .dom(
        '[data-test-component-row="Pulley Stiles"] [data-test-component-width]',
      )
      .hasText('22');
    assert
      .dom(
        '[data-test-component-row="Pulley Stiles"] [data-test-component-depth]',
      )
      .hasText('113');
    assert
      .dom(
        '[data-test-component-row="Pulley Stiles"] [data-test-component-count]',
      )
      .hasText('2');
    assert
      .dom(
        '[data-test-component-row="Pulley Stiles"] [data-test-component-height]',
      )
      .hasClass('highlight');

    assert
      .dom('[data-test-component-row="Glass"] [data-test-component-name]')
      .hasText('Glass');
    assert
      .dom('[data-test-component-row="Glass"] [data-test-component-height]')
      .hasText('701.5');
    assert
      .dom('[data-test-component-row="Glass"] [data-test-component-width]')
      .hasText('888');
    assert
      .dom('[data-test-component-row="Glass"] [data-test-component-depth]')
      .hasText('24');
    assert
      .dom('[data-test-component-row="Glass"] [data-test-component-count]')
      .hasText('4');

    assert
      .dom('[data-test-component-row="Bottom Rail"] [data-test-component-name]')
      .hasText('Bottom Rail');
    assert
      .dom(
        '[data-test-component-row="Bottom Rail"] [data-test-component-height]',
      )
      .hasText('92');
    assert
      .dom(
        '[data-test-component-row="Bottom Rail"] [data-test-component-width]',
      )
      .hasText('975');
    assert
      .dom(
        '[data-test-component-row="Bottom Rail"] [data-test-component-depth]',
      )
      .hasText('47');
    assert
      .dom(
        '[data-test-component-row="Bottom Rail"] [data-test-component-count]',
      )
      .hasText('1');
    assert
      .dom(
        '[data-test-component-row="Bottom Rail"] [data-test-component-width]',
      )
      .hasClass('highlight');

    assert
      .dom('[data-test-component-row="Top Rail"] [data-test-component-name]')
      .hasText('Top Rail');
    assert
      .dom('[data-test-component-row="Top Rail"] [data-test-component-height]')
      .hasText('62');
    assert
      .dom('[data-test-component-row="Top Rail"] [data-test-component-width]')
      .hasText('975');
    assert
      .dom('[data-test-component-row="Top Rail"] [data-test-component-depth]')
      .hasText('47');
    assert
      .dom('[data-test-component-row="Top Rail"] [data-test-component-count]')
      .hasText('1');
    assert
      .dom('[data-test-component-row="Top Rail"] [data-test-component-width]')
      .hasClass('highlight');

    assert
      .dom(
        '[data-test-component-row="Meeting Rail"] [data-test-component-name]',
      )
      .hasText('Meeting Rail');
    assert
      .dom(
        '[data-test-component-row="Meeting Rail"] [data-test-component-height]',
      )
      .hasText('39');
    assert
      .dom(
        '[data-test-component-row="Meeting Rail"] [data-test-component-width]',
      )
      .hasText('975');
    assert
      .dom(
        '[data-test-component-row="Meeting Rail"] [data-test-component-depth]',
      )
      .hasText('56');
    assert
      .dom(
        '[data-test-component-row="Meeting Rail"] [data-test-component-count]',
      )
      .hasText('2');
    assert
      .dom(
        '[data-test-component-row="Meeting Rail"] [data-test-component-width]',
      )
      .hasClass('highlight');

    assert
      .dom(
        '[data-test-component-row="Glazing Bar Inner"] [data-test-component-name]',
      )
      .hasText('Glazing Bar Inner');
    assert
      .dom(
        '[data-test-component-row="Glazing Bar Inner"] [data-test-component-height]',
      )
      .hasText('706.5');
    assert
      .dom(
        '[data-test-component-row="Glazing Bar Inner"] [data-test-component-width]',
      )
      .hasText('22');
    assert
      .dom(
        '[data-test-component-row="Glazing Bar Inner"] [data-test-component-depth]',
      )
      .hasText('11.5');
    assert
      .dom(
        '[data-test-component-row="Glazing Bar Inner"] [data-test-component-count]',
      )
      .hasText('2');
    assert
      .dom(
        '[data-test-component-row="Glazing Bar Inner"] [data-test-component-height]',
      )
      .hasClass('highlight');

    assert
      .dom(
        '[data-test-component-row="Glazing Bar Outer"] [data-test-component-name]',
      )
      .hasText('Glazing Bar Outer');
    assert
      .dom(
        '[data-test-component-row="Glazing Bar Outer"] [data-test-component-height]',
      )
      .hasText('706.5');
    assert
      .dom(
        '[data-test-component-row="Glazing Bar Outer"] [data-test-component-width]',
      )
      .hasText('22');
    assert
      .dom(
        '[data-test-component-row="Glazing Bar Outer"] [data-test-component-depth]',
      )
      .hasText('9');
    assert
      .dom(
        '[data-test-component-row="Glazing Bar Outer"] [data-test-component-count]',
      )
      .hasText('2');
    assert
      .dom(
        '[data-test-component-row="Glazing Bar Outer"] [data-test-component-height]',
      )
      .hasClass('highlight');

    assert
      .dom('[data-test-component-row="Top Stile"] [data-test-component-name]')
      .hasText('Top Stile');
    assert
      .dom('[data-test-component-row="Top Stile"] [data-test-component-height]')
      .hasText('867.5');
    assert
      .dom('[data-test-component-row="Top Stile"] [data-test-component-width]')
      .hasText('56');
    assert
      .dom('[data-test-component-row="Top Stile"] [data-test-component-depth]')
      .hasText('47');
    assert
      .dom('[data-test-component-row="Top Stile"] [data-test-component-count]')
      .hasText('2');
    assert
      .dom('[data-test-component-row="Top Stile"] [data-test-component-height]')
      .hasClass('highlight');

    assert
      .dom(
        '[data-test-component-row="Bottom Stile"] [data-test-component-name]',
      )
      .hasText('Bottom Stile');
    assert
      .dom(
        '[data-test-component-row="Bottom Stile"] [data-test-component-height]',
      )
      .hasText('897.5');
    assert
      .dom(
        '[data-test-component-row="Bottom Stile"] [data-test-component-width]',
      )
      .hasText('56');
    assert
      .dom(
        '[data-test-component-row="Bottom Stile"] [data-test-component-depth]',
      )
      .hasText('47');
    assert
      .dom(
        '[data-test-component-row="Bottom Stile"] [data-test-component-count]',
      )
      .hasText('2');
    assert
      .dom(
        '[data-test-component-row="Bottom Stile"] [data-test-component-height]',
      )
      .hasClass('highlight');
  });
});
