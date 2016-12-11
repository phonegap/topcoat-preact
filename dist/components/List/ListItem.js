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

var ListItem = function ListItem(props) {
  var _props$clickHandler = props.clickHandler,
      clickHandler = _props$clickHandler === undefined ? false : _props$clickHandler,
      className = props.className,
      rest = _objectWithoutProperties(props, ['clickHandler', 'className']);

  var cx = (0, _classnames2.default)({
    'topcoat-list__item': true
  });
  // @TODO when there is a clickHandler, maybe make it an <a>?
  var item = clickHandler ? (0, _preact.h)(
    'li',
    _extends({
      onClick: clickHandler,
      className: cx + ' ' + className
    }, rest),
    props.children
  ) : (0, _preact.h)(
    'li',
    _extends({ className: cx + ' ' + className }, rest),
    props.children
  );
  return item;
};

ListItem.displayName = 'ListItem';

exports.default = ListItem;