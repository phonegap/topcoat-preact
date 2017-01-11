'use strict';

var _preact = require('preact');

var _storybook = require('@kadira/storybook');

require('adobe-mobile-ui/css/icon-button-mobile.css');

var _ = require('../');

var _2 = _interopRequireDefault(_);

var _settings = require('-!babel!svg-react!./settings.svg');

var _settings2 = _interopRequireDefault(_settings);

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
    (0, _preact.h)(
      'svg',
      { className: 'topcoat-icon', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 22 22', 'enable-background': 'new 0 0 22 22' },
      (0, _preact.h)('path', { className: 'st0', d: 'M20 9.4h-1.5c-.1 0-.2-.1-.2-.2-.2-.7-.5-1.4-.8-2-.1-.1 0-.2 0-.3l1.1-1.1c.4-.4.4-1 0-1.4l-.9-.9c-.4-.4-1-.4-1.4 0l-1.1 1.1c-.1.1-.2.1-.3 0-.6-.4-1.3-.7-2-.8-.1 0-.2-.1-.2-.2v-1.6c0-.6-.4-1-1-1h-1.3c-.6 0-1 .4-1 1v1.5c0 .1-.1.2-.2.2-.7.2-1.4.5-2 .8-.1.1-.2 0-.3 0l-1.1-1c-.4-.4-1-.4-1.4 0l-.9.9c-.4.4-.4 1 0 1.4l1.1 1.1c.1.1.1.2 0 .3-.4.6-.7 1.3-.8 2 0 .1-.1.2-.2.2h-1.6c-.6 0-1 .4-1 1v1.3c0 .6.4 1 1 1h1.5c.1 0 .2.1.2.2.2.7.5 1.4.8 2 .1.1 0 .2 0 .3l-1.1 1.1c-.4.4-.4 1 0 1.4l.9.9c.4.4 1 .4 1.4 0l1.1-1.1c.1-.1.2-.1.3 0 .6.4 1.3.7 2 .8.1 0 .2.1.2.2v1.5c0 .6.4 1 1 1h1.3c.6 0 1-.4 1-1v-1.5c0-.1.1-.2.2-.2.7-.2 1.4-.5 2-.8.1-.1.2 0 .3 0l1.1 1.1c.4.4 1 .4 1.4 0l.9-.9c.4-.4.4-1 0-1.4l-1.1-1.1c-.1-.1-.1-.2 0-.3.4-.6.7-1.3.8-2 0-.1.1-.2.2-.2h1.6c.6 0 1-.4 1-1v-1.3c0-.6-.4-1-1-1zm-9 5.3c-2.1 0-3.8-1.7-3.8-3.8 0-2.1 1.7-3.7 3.8-3.7 2.1 0 3.8 1.7 3.8 3.7 0 2.2-1.7 3.8-3.8 3.8z' })
    )
  );
}).addWithInfo('with a png', function () {
  return (0, _preact.h)(
    _2.default,
    null,
    (0, _preact.h)('img', { className: 'topcoat-icon', src: 'data:image/png;base64,' + _checkbox_checked_dark2.default, alt: 'icon' })
  );
});