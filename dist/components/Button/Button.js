'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _preact = require('preact');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Button = function Button(props) {
  var _props$clickHandler = props.clickHandler,
      clickHandler = _props$clickHandler === undefined ? function () {} : _props$clickHandler,
      _props$cta = props.cta,
      cta = _props$cta === undefined ? false : _props$cta,
      _props$full = props.full,
      full = _props$full === undefined ? false : _props$full,
      _props$large = props.large,
      large = _props$large === undefined ? false : _props$large,
      _props$quiet = props.quiet,
      quiet = _props$quiet === undefined ? false : _props$quiet,
      rest = _objectWithoutProperties(props, ['clickHandler', 'cta', 'full', 'large', 'quiet']);

  var cx = (0, _classnames2.default)({
    full: full,
    'topcoat-button': !quiet && !cta && !large,
    'topcoat-button--quiet': !cta && !large && quiet,
    'topcoat-button--cta': cta && !large && !quiet,
    'topcoat-button--large': large && !cta && !quiet,
    'topcoat-button--large--cta': large && cta,
    'topcoat-button--large--quiet': large && quiet && !cta
  });
  return (0, _preact.h)(
    'button',
    _extends({
      className: cx,
      onClick: clickHandler
    }, rest),
    props.children.length ? props.children : (0, _preact.h)(
      'span',
      null,
      '\xA0'
    )
  );
};

Button.displayName = 'Button';

exports.default = Button;