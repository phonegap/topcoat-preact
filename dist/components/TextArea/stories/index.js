'use strict';

var _preact = require('preact');

var _storybook = require('@kadira/storybook');

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.storiesOf)('TextArea', module).addWithInfo('basic', function () {
  return (0, _preact.h)(_2.default, { name: 'basic' });
}).addWithInfo('placeholder', function () {
  return (0, _preact.h)(_2.default, { name: 'placeholder', placeholder: 'This text area has a placeholder' });
}).addWithInfo('with text', function () {
  return (0, _preact.h)(
    _2.default,
    { name: 'with-text' },
    'This text area has existing text'
  );
}).addWithInfo('sized', function () {
  return (0, _preact.h)(_2.default, { name: 'sized', cols: '24', rows: '6' });
}).addWithInfo('disabled', function () {
  return (0, _preact.h)(_2.default, { name: 'disabled', disabled: true });
});