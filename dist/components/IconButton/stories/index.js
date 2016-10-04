'use strict';

var _preact = require('preact');

var _storybook = require('@kadira/storybook');

var _ = require('../');

var _2 = _interopRequireDefault(_);

var _hamburger_dark = require('babel!svg-react!./hamburger_dark.svg?name=HamburgerIcon');

var _hamburger_dark2 = _interopRequireDefault(_hamburger_dark);

var _checkbox_checked_dark = require('base64!./checkbox_checked_dark.png');

var _checkbox_checked_dark2 = _interopRequireDefault(_checkbox_checked_dark);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @TODO this is all a mess -- need a beter way to do IconButtons
(0, _storybook.storiesOf)('IconButton', module).addWithInfo('default', function () {
  return (0, _preact.h)(_2.default, null);
}).addWithInfo('styled', function () {
  return (0, _preact.h)(_2.default, { className: 'yadda' });
}).addWithInfo('with an svg', function () {
  return (0, _preact.h)(
    _2.default,
    null,
    (0, _preact.h)(_hamburger_dark2.default, null)
  );
}).addWithInfo('with a png', function () {
  return (0, _preact.h)(
    _2.default,
    null,
    (0, _preact.h)('img', { src: 'data:image/png;base64,' + _checkbox_checked_dark2.default, alt: 'icon' })
  );
});