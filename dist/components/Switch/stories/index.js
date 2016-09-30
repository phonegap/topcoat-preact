'use strict';

var _preact = require('preact');

var _storybook = require('@kadira/storybook');

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.storiesOf)('Switch', module).addWithInfo('default', function () {
  return (0, _preact.h)(_2.default, null);
}).addWithInfo('checked', function () {
  return (0, _preact.h)(_2.default, { checked: true });
}).addWithInfo('disabled', function () {
  return (0, _preact.h)(_2.default, { disabled: true });
}).addWithInfo('checked and disabled', function () {
  return (0, _preact.h)(_2.default, { checked: true, disabled: true });
});