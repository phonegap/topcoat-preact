'use strict';

var _preact = require('preact');

var _storybook = require('@kadira/storybook');

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.storiesOf)('Checkbox', module).addWithInfo('label', function () {
  return (0, _preact.h)(
    _2.default,
    { description: 'labelled checkbox', id: 'label' },
    'label '
  );
}).addWithInfo('no label', function () {
  return (0, _preact.h)(_2.default, { description: 'unlabelled checkbox', id: 'no-label' });
}).addWithInfo('emoji label', function () {
  return (0, _preact.h)(
    _2.default,
    { description: 'emoji checkbox', id: 'emoji-label' },
    '\u26A1\uFE0F\uD83D\uDC80\u2620\uFE0F\u2728 '
  );
}).addWithInfo('disabled', function () {
  return (0, _preact.h)(
    _2.default,
    { description: 'disabled checkbox', id: 'disabled', disabled: true },
    'Disabled '
  );
});