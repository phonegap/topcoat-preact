'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _preact = require('preact');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _NavigationBarItem = require('./NavigationBarItem');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationBarTitle = function NavigationBarTitle(props) {
  var cx = (0, _classnames2.default)({
    'topcoat-navigation-bar__title': true
  });
  return (0, _preact.h)(
    'h1',
    _extends({ className: cx }, props),
    props.children.length ? props.children : (0, _preact.h)(
      'span',
      null,
      '\xA0'
    )
  );
};

NavigationBarTitle.displayName = 'NavigationBarTitle';

exports.default = NavigationBarTitle;