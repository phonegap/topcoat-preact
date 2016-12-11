'use strict';

var _preact = require('preact');

var _storybook = require('@kadira/storybook');

var _ = require('../');

var _2 = _interopRequireDefault(_);

require('adobe-mobile-ui/css/combobox-mobile.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var suggestions = [{
  value: 'Preact'
}, {
  value: 'React'
}, {
  value: 'Angular'
}, {
  value: 'Ember'
}, {
  value: 'Choo'
}, {
  value: 'Vue'
}];

(0, _storybook.storiesOf)('ComboBox', module).addWithInfo('basic', function () {
  return (0, _preact.h)(_2.default, { suggestions: suggestions });
}).addWithInfo('empty', function () {
  return (0, _preact.h)(_2.default, null);
}).addWithInfo('placeholder', function () {
  return (0, _preact.h)(_2.default, { suggestions: suggestions, placeholder: 'Choose a framework' });
}).addWithInfo('default value', function () {
  return (0, _preact.h)(_2.default, { suggestions: suggestions, placeholder: 'Choose a framework', value: 'Preact' });
}).addWithInfo('a changeHandler', function () {
  return (0, _preact.h)(_2.default, {
    suggestions: suggestions,
    placeholder: 'Choose a framework',
    changeHandler: (0, _storybook.action)('changed')
  });
}).addWithInfo('full', function () {
  return (0, _preact.h)(_2.default, { full: true });
}).addWithInfo('inputProps', function () {
  return (0, _preact.h)(_2.default, {
    suggestions: suggestions,
    placeholder: 'Choose a framework',
    inputProps: {
      class: 'topcoat-text-input full',
      style: { background: 'white' },
      onClick: (0, _storybook.action)('click')
    }
  });
});