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

var NavigationBarItem = function NavigationBarItem(props) {
  var _props$left = props.left,
      left = _props$left === undefined ? false : _props$left,
      _props$right = props.right,
      right = _props$right === undefined ? false : _props$right,
      rest = _objectWithoutProperties(props, ['left', 'right']);

  var cx = (0, _classnames2.default)({
    'topcoat-left': left,
    'topcoat-right': right,
    'topcoat-navigation-bar__item': true
  });
  return (0, _preact.h)(
    'div',
    _extends({ className: cx }, rest),
    props.children.length ? props.children : (0, _preact.h)(
      'span',
      null,
      '\xA0'
    )
  );
};

NavigationBarItem.displayName = 'NavigationBarItem';

exports.default = NavigationBarItem;