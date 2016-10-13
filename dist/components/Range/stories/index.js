'use strict';

var _preact = require('preact');

var _storybook = require('@kadira/storybook');

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.storiesOf)('Range', module).addWithInfo('default', function () {
  return (0, _preact.h)(_2.default, { style: { marginTop: '20px' }, name: 'default' });
}).addWithInfo('disabled', function () {
  return (0, _preact.h)(_2.default, { style: { marginTop: '20px' }, name: 'disabled', disabled: true });
});