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

// @TODO - checkboxes should be managed
//   ...or at least be able to be managed
// @TODO - implement all label and a11y suggestions from http://codepen.io/Topcoat/pen/piHcs
var Checkbox = function Checkbox(props) {
  var description = props.description,
      _props$disabled = props.disabled,
      disabled = _props$disabled === undefined ? false : _props$disabled,
      id = props.id,
      rest = _objectWithoutProperties(props, ['description', 'disabled', 'id']);

  var cx = (0, _classnames2.default)({
    'topcoat-checkbox': true
  });
  return (0, _preact.h)(
    'label',
    _extends({ htmlFor: id, className: cx }, rest),
    props.children,
    (0, _preact.h)('input', {
      'aria-label': 'checkbox with aria-label',
      type: 'checkbox',
      id: id,
      disabled: !!disabled,
      'aria-describedby': description || 'checkbox'
    }),
    (0, _preact.h)('div', { className: 'topcoat-checkbox__checkmark' })
  );
};

Checkbox.displayName = 'Checkbox';

exports.default = Checkbox;