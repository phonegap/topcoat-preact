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

// @TODO - radio buttons should be managed
//   ...or at least be able to be managed
var RadioButton = function RadioButton(props) {
  var _props$right = props.right,
      right = _props$right === undefined ? false : _props$right,
      _props$disabled = props.disabled,
      disabled = _props$disabled === undefined ? false : _props$disabled,
      name = props.name,
      rest = _objectWithoutProperties(props, ['right', 'disabled', 'name']);

  var cx = (0, _classnames2.default)({
    'topcoat-radio-button': true
  });
  return (0, _preact.h)(
    'label',
    _extends({ className: cx }, rest),
    !right && props.children,
    (0, _preact.h)('input', {
      type: 'radio',
      name: name,
      disabled: !!disabled
    }),
    (0, _preact.h)('div', { className: 'topcoat-radio-button__checkmark' }),
    right && props.children
  );
};

RadioButton.displayName = 'RadioButton';

exports.default = RadioButton;