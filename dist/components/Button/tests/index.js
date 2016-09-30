'use strict';

var _preact = require('preact');

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _enzyme = require('enzyme');

var _sinon = require('sinon');

var _ = require('..');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Button />', function () {
  it('should render correctly', function () {
    var wrapper = (0, _enzyme.shallow)((0, _preact.h)(
      _2.default,
      null,
      'A Button'
    ));
    (0, _expect2.default)(wrapper.is('.topcoat-button')).toBe(true);
  });
  it('should render its children correctly', function () {
    (0, _expect2.default)((0, _enzyme.shallow)((0, _preact.h)(
      _2.default,
      null,
      'A Button'
    )).contains('A Button')).toBe(true);
    (0, _expect2.default)((0, _enzyme.shallow)((0, _preact.h)(
      _2.default,
      null,
      (0, _preact.h)(
        'span',
        null,
        'A Button'
      )
    )).contains((0, _preact.h)(
      'span',
      null,
      'A Button'
    ))).toBe(true);
  });
  it('should fire its clickHandler on tap', function () {
    var clickHandler = (0, _sinon.spy)();
    var wrapper = (0, _enzyme.shallow)((0, _preact.h)(
      _2.default,
      { clickHandler: clickHandler },
      'Click me'
    ));
    wrapper.simulate('tap');
    (0, _expect2.default)(clickHandler.callCount).toBe(1);
  });
  it('should show a quiet button', function () {
    var wrapper = (0, _enzyme.shallow)((0, _preact.h)(
      _2.default,
      { quiet: true },
      'Quiet button'
    ));
    (0, _expect2.default)(wrapper.is('.topcoat-button--quiet')).toBe(true);
  });
  it('should show a large button', function () {
    var wrapper = (0, _enzyme.shallow)((0, _preact.h)(
      _2.default,
      { large: true },
      'Quiet button'
    ));
    (0, _expect2.default)(wrapper.is('.topcoat-button--large')).toBe(true);
  });
  it('should show a cta button', function () {
    var wrapper = (0, _enzyme.shallow)((0, _preact.h)(
      _2.default,
      { cta: true },
      'Quiet button'
    ));
    (0, _expect2.default)(wrapper.is('.topcoat-button--cta')).toBe(true);
  });
  it('should show a large quiet button', function () {
    var wrapper = (0, _enzyme.shallow)((0, _preact.h)(
      _2.default,
      { large: true, quiet: true },
      'Quiet button'
    ));
    (0, _expect2.default)(wrapper.is('.topcoat-button--large--quiet')).toBe(true);
  });
  it('should show a large cta button', function () {
    var wrapper = (0, _enzyme.shallow)((0, _preact.h)(
      _2.default,
      { large: true, cta: true },
      'Quiet button'
    ));
    (0, _expect2.default)(wrapper.is('.topcoat-button--large--cta')).toBe(true);
  });
  it('should show a disabled button', function () {
    var wrapper = (0, _enzyme.mount)((0, _preact.h)(
      _2.default,
      { disabled: true },
      'Quiet button'
    ));
    (0, _expect2.default)(wrapper.props().disabled).toBe(true);
  });
  it('should pass on other props to the button', function () {
    var wrapper = (0, _enzyme.mount)((0, _preact.h)(
      _2.default,
      { style: { background: 'red' } },
      'Props'
    ));
    (0, _expect2.default)(wrapper.props().style).toEqual({ background: 'red' });
  });
});