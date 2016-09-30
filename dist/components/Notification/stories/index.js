'use strict';

var _preact = require('preact');

var _storybook = require('@kadira/storybook');

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.storiesOf)('Notification', module).addWithInfo('default', function () {
  return (0, _preact.h)(_2.default, null);
}).addWithInfo('with a count', function () {
  return (0, _preact.h)(_2.default, { count: '1' });
}).addWithInfo('with a high count', function () {
  return (0, _preact.h)(_2.default, { count: '189236' });
});