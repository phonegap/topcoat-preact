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

var Notification = function Notification(props) {
  var _props$count = props.count,
      count = _props$count === undefined ? 0 : _props$count,
      rest = _objectWithoutProperties(props, ['count']);

  var cx = (0, _classnames2.default)({
    'topcoat-notification': true
  });
  return (0, _preact.h)(
    'span',
    _extends({ className: cx }, rest),
    count
  );
};

Notification.displayName = 'Notification';

exports.default = Notification;