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

// @TODO - text areas should be managed
//   ...or at least be able to be managed
var TextArea = function TextArea(props) {
  var _props$large = props.large,
      large = _props$large === undefined ? false : _props$large,
      rest = _objectWithoutProperties(props, ['large']);

  var cx = (0, _classnames2.default)({
    'topcoat-textarea': !large,
    'topcoat-textarea--large': large
  });
  return (0, _preact.h)(
    'textarea',
    _extends({ className: cx }, rest),
    props.children
  );
};

TextArea.displayName = 'TextArea';

exports.default = TextArea;