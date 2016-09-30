'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _preact = require('preact');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactTappable = require('react-tappable');

var _reactTappable2 = _interopRequireDefault(_reactTappable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TabBar = function TabBar(props) {
  var _props$full = props.full;
  var full = _props$full === undefined ? false : _props$full;
  var _props$clickHandler = props.clickHandler;
  var clickHandler = _props$clickHandler === undefined ? function () {} : _props$clickHandler;

  var rest = _objectWithoutProperties(props, ['full', 'clickHandler']);

  var cx = (0, _classnames2.default)({
    full: full,
    'topcoat-tab-bar': true
  });
  var tabs = props.children.map(function (child) {
    return (0, _preact.h)(
      'label',
      { key: child.key, className: 'topcoat-tab-bar__item' },
      (0, _preact.h)('input', { type: 'radio', name: props.name }),
      (0, _preact.h)(
        _reactTappable2.default,
        {
          component: 'button',
          className: 'topcoat-tab-bar__button full',
          onTap: function onTap() {
            return clickHandler(child.key);
          }
        },
        child
      )
    );
  });
  return (0, _preact.h)(
    'div',
    _extends({ className: cx }, rest),
    tabs
  );
};

TabBar.displayName = 'TabBar';

exports.default = TabBar;