'use strict';

var _preact = require('preact');

var _storybook = require('@kadira/storybook');

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.storiesOf)('TextInput', module).addWithInfo('default', function () {
  return (0, _preact.h)(_2.default, { name: 'default' });
}).addWithInfo('default value', function () {
  return (0, _preact.h)(_2.default, { name: 'default-value', defaultValue: 'default value' });
}).addWithInfo('fail', function () {
  return (0, _preact.h)(_2.default, { name: 'fail', pattern: 'not-fail', defaultValue: 'fail' });
}).addWithInfo('disabled', function () {
  return (0, _preact.h)(_2.default, { name: 'disabled', disabled: true });
}).addWithInfo('large', function () {
  return (0, _preact.h)(_2.default, { name: 'large', large: true });
}).addWithInfo('large default value', function () {
  return (0, _preact.h)(_2.default, { name: 'large-default-value', large: true, defaultValue: 'large default value' });
}).addWithInfo('large fail', function () {
  return (0, _preact.h)(_2.default, { name: 'large-fail', large: true, pattern: 'not-fail', defaultValue: 'fail' });
}).addWithInfo('large disabled', function () {
  return (0, _preact.h)(_2.default, { name: 'large-disabled', disabled: true, large: true });
});