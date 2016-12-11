'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = require('preact');

var _reactAutosuggest = require('react-autosuggest');

var _reactAutosuggest2 = _interopRequireDefault(_reactAutosuggest);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ComboBox = function (_Component) {
  _inherits(ComboBox, _Component);

  function ComboBox() {
    _classCallCheck(this, ComboBox);

    var _this = _possibleConstructorReturn(this, (ComboBox.__proto__ || Object.getPrototypeOf(ComboBox)).call(this));

    _this.onChange = function (event, _ref) {
      var newValue = _ref.newValue,
          method = _ref.method;

      _this.setState({
        value: newValue
      });
      if (_this.props.changeHandler) {
        _this.props.changeHandler(event, { newValue: newValue, method: method });
      }
    };

    _this.onSuggestionsFetchRequested = function (_ref2) {
      var value = _ref2.value;

      _this.setState({
        suggestionsState: _this.getSuggestions(value)
      });
    };

    _this.onSuggestionsClearRequested = function () {
      _this.setState({
        suggestionsState: []
      });
    };

    _this.onSuggestionSelected = function () {
      _this.input.blur();
    };

    _this.getSuggestions = function (value) {
      return _this.props.suggestions || [];
    };

    _this.getSuggestionValue = function (suggestion) {
      return suggestion.value;
    };

    _this.shouldRenderSuggestions = function () {
      return true;
    };

    _this.theme = {
      container: 'topcoat-combobox__container',
      containerOpen: 'topcoat-combobox__container--open',
      input: 'topcoat-combobox__select',
      suggestionsContainer: 'topcoat-combobox__suggestions-container',
      suggestionsList: 'topcoat-list__container',
      suggestion: 'topcoat-list__item',
      suggestionFocused: 'topcoat-combobox__suggestion--focused',
      sectionContainer: 'topcoat-combobox__section-container',
      sectionTitle: 'topcoat-combobox__section-title'
    };

    _this.renderSuggestion = function (suggestion) {
      return (0, _preact.h)(
        'span',
        null,
        suggestion.label || suggestion.value
      );
    };

    _this.state = {
      value: undefined,
      suggestionsState: []
    };
    return _this;
  }

  // simplest possible default


  _createClass(ComboBox, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          value = _state.value,
          suggestionsState = _state.suggestionsState;

      var inputClassNames = (0, _classnames2.default)({
        'topcoat-combobox__select': true,
        full: !!this.props.full
      });

      var _props = this.props,
          _props$full = _props.full,
          full = _props$full === undefined ? false : _props$full,
          _props$large = _props.large,
          large = _props$large === undefined ? false : _props$large,
          _props$theme = _props.theme,
          theme = _props$theme === undefined ? this.theme : _props$theme,
          _props$suggestions = _props.suggestions,
          suggestions = _props$suggestions === undefined ? [] : _props$suggestions,
          _props$getSuggestions = _props.getSuggestions,
          getSuggestions = _props$getSuggestions === undefined ? this.getSuggestions : _props$getSuggestions,
          _props$getSuggestionV = _props.getSuggestionValue,
          getSuggestionValue = _props$getSuggestionV === undefined ? this.getSuggestionValue : _props$getSuggestionV,
          _props$onSuggestionSe = _props.onSuggestionSelected,
          onSuggestionSelected = _props$onSuggestionSe === undefined ? this.onSuggestionSelected : _props$onSuggestionSe,
          _props$onChangeHandle = _props.onChangeHandler,
          onChangeHandler = _props$onChangeHandle === undefined ? this.onChange : _props$onChangeHandle,
          _props$onSuggestionsF = _props.onSuggestionsFetchRequested,
          onSuggestionsFetchRequested = _props$onSuggestionsF === undefined ? this.onSuggestionsFetchRequested : _props$onSuggestionsF,
          _props$onSuggestionsC = _props.onSuggestionsClearRequested,
          onSuggestionsClearRequested = _props$onSuggestionsC === undefined ? this.onSuggestionsClearRequested : _props$onSuggestionsC,
          _props$shouldRenderSu = _props.shouldRenderSuggestions,
          shouldRenderSuggestions = _props$shouldRenderSu === undefined ? this.shouldRenderSuggestions : _props$shouldRenderSu,
          _props$inputProps = _props.inputProps,
          inputProps = _props$inputProps === undefined ? {} : _props$inputProps,
          placeholder = _props.placeholder,
          _props$renderSuggesti = _props.renderSuggestion,
          renderSuggestion = _props$renderSuggesti === undefined ? this.renderSuggestion : _props$renderSuggesti,
          rest = _objectWithoutProperties(_props, ['full', 'large', 'theme', 'suggestions', 'getSuggestions', 'getSuggestionValue', 'onSuggestionSelected', 'onChangeHandler', 'onSuggestionsFetchRequested', 'onSuggestionsClearRequested', 'shouldRenderSuggestions', 'inputProps', 'placeholder', 'renderSuggestion']);

      var defaultInputProps = _extends({}, inputProps, {
        full: full,
        className: inputClassNames,
        placeholder: this.props.placeholder || '',
        value: value !== undefined ? value : this.props.value || '',
        onChange: this.onChange
      });

      var classNameModifier = large ? '--large' : '';

      return (0, _preact.h)(_reactAutosuggest2.default, _extends({
        ref: function ref(autosuggest) {
          if (autosuggest) {
            _this2.input = autosuggest.input;
          }
        },
        theme: theme,
        suggestions: suggestionsState,
        onSuggestionSelected: onSuggestionSelected,
        onSuggestionsFetchRequested: onSuggestionsFetchRequested,
        onSuggestionsClearRequested: onSuggestionsClearRequested,
        getSuggestionValue: getSuggestionValue,
        shouldRenderSuggestions: shouldRenderSuggestions,
        renderSuggestion: renderSuggestion,
        inputProps: defaultInputProps,
        focusInputOnSuggestionClick: false
      }, rest));
    }
  }]);

  return ComboBox;
}(_preact.Component);

ComboBox.displayName = 'ComboBox';

exports.default = ComboBox;