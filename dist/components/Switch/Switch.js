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

// @TODO - switches should be managed
//   ...or at least be able to be managed
// NOTE: the 'checked' prop will freeze the component in 'on' unless the
//   component is managed
var Switch = function Switch(props) {
  var checked = props.checked,
      disabled = props.disabled,
      rest = _objectWithoutProperties(props, ['checked', 'disabled']);

  var cx = (0, _classnames2.default)({
    'topcoat-switch': true
  });
  return (0, _preact.h)(
    'label',
    _extends({ className: cx }, rest),
    (0, _preact.h)('input', {
      type: 'checkbox',
      className: 'topcoat-switch__input',
      disabled: disabled,
      checked: checked
    }),
    (0, _preact.h)('div', { className: 'topcoat-switch__toggle' })
  );
};

Switch.displayName = 'Switch';

exports.default = Switch;