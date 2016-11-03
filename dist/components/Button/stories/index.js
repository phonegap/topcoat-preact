'use strict';

var _preact = require('preact');

var _storybook = require('@kadira/storybook');

var _ = require('../');

var _2 = _interopRequireDefault(_);

require('adobe-mobile-ui/css/button-mobile.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.storiesOf)('Button', module).addWithInfo('text', function () {
  return (0, _preact.h)(
    _2.default,
    null,
    'Button'
  );
}).addWithInfo('emoji', function () {
  return (0, _preact.h)(
    _2.default,
    { foo: true },
    '\u2620\uFE0F\u2728\uD83D\uDC80\u26A1\uFE0F\uD83D\uDC80\u2728\u2620\uFE0F'
  );
}).addWithInfo('a clickHandler', function () {
  return (0, _preact.h)(
    _2.default,
    { clickHandler: (0, _storybook.action)('tapped') },
    'Click Me'
  );
}).addWithInfo('a disabled clickHandler', function () {
  return (0, _preact.h)(
    _2.default,
    { disabled: true, clickHandler: (0, _storybook.action)('tapped') },
    'Click Me'
  );
}).addWithInfo('no text (all defaults)', function () {
  return (0, _preact.h)(_2.default, null);
}).addWithInfo('disabled', function () {
  return (0, _preact.h)(
    _2.default,
    { disabled: true },
    'Button'
  );
}).addWithInfo('quiet', function () {
  return (0, _preact.h)(
    _2.default,
    { quiet: true },
    'Button'
  );
}).addWithInfo('disabled quiet', function () {
  return (0, _preact.h)(
    _2.default,
    { quiet: true, disabled: true },
    'Button'
  );
}).addWithInfo('cta', function () {
  return (0, _preact.h)(
    _2.default,
    { cta: true },
    'Button'
  );
}).addWithInfo('disabled cta', function () {
  return (0, _preact.h)(
    _2.default,
    { cta: true, disabled: true },
    'Button'
  );
});