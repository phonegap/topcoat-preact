'use strict';

var _preact = require('preact');

var _storybook = require('@kadira/storybook');

var _ = require('../');

var _2 = _interopRequireDefault(_);

require('adobe-mobile-ui/css/tab-bar-mobile.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.storiesOf)('TabBar', module).addWithInfo('default', 'Children must be provided with keys', function () {
  return (0, _preact.h)(
    _2.default,
    { name: 'default' },
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
    { name: 'emoji' },
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
}).addWithInfo('full', function () {
  return (0, _preact.h)(
    _2.default,
    { name: 'full', full: true },
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
}).addWithInfo('clickHandler', function () {
  return (0, _preact.h)(
    _2.default,
    { name: 'clickHandler', clickHandler: (0, _storybook.action)('tapped') },
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