'use strict';

var _preact = require('preact');

var _storybook = require('@kadira/storybook');

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.storiesOf)('ButtonBar', module).addWithInfo('default', function () {
  return (0, _preact.h)(
    _2.default,
    null,
    (0, _preact.h)(
      'span',
      { key: 'one' },
      'One'
    ),
    (0, _preact.h)(
      'span',
      { key: 'two' },
      'Two'
    ),
    (0, _preact.h)(
      'span',
      { key: 'three' },
      'Three'
    )
  );
}).addWithInfo('emoji', function () {
  return (0, _preact.h)(
    _2.default,
    null,
    (0, _preact.h)(
      'span',
      { key: '\uD83D\uDC80' },
      '\uD83D\uDC80'
    ),
    (0, _preact.h)(
      'span',
      { key: '\u2620\uFE0F' },
      '\u2620\uFE0F'
    ),
    (0, _preact.h)(
      'span',
      { key: '\u26A1\uFE0F' },
      '\u26A1\uFE0F'
    )
  );
}).addWithInfo('clickHandler', function () {
  return (0, _preact.h)(
    _2.default,
    { clickHandler: (0, _storybook.action)('tapped') },
    (0, _preact.h)(
      'span',
      { key: 'one' },
      'One'
    ),
    (0, _preact.h)(
      'span',
      { key: 'two' },
      'Two'
    ),
    (0, _preact.h)(
      'span',
      { key: 'three' },
      'Three'
    )
  );
});