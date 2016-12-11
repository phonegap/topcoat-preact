import { h, Component } from 'preact';
import Autosuggest from 'react-autosuggest';
import classNames from 'classnames';

class ComboBox extends Component {
  constructor() {
    super();

    this.state = {
      value: undefined,
      suggestionsState: [],
    };
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue,
    });
    if (this.props.changeHandler) {
      this.props.changeHandler(event, { newValue, method });
    }
  }

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestionsState: this.getSuggestions(value),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestionsState: [],
    });
  };

  onSuggestionSelected = () => {
    this.input.blur();
  }

  // simplest possible default
  getSuggestions = value => this.props.suggestions || [];

  getSuggestionValue = suggestion => suggestion.value;

  shouldRenderSuggestions = () => true;

  theme = {
    container: 'topcoat-combobox__container',
    containerOpen: 'topcoat-combobox__container--open',
    input: 'topcoat-combobox__select',
    suggestionsContainer: 'topcoat-combobox__suggestions-container',
    suggestionsList: 'topcoat-list__container',
    suggestion: 'topcoat-list__item',
    suggestionFocused: 'topcoat-combobox__suggestion--focused',
    sectionContainer: 'topcoat-combobox__section-container',
    sectionTitle: 'topcoat-combobox__section-title',
  };

  renderSuggestion = suggestion => (
    <span>{ suggestion.label || suggestion.value }</span>
  );

  render() {
    const { value, suggestionsState } = this.state;
    const inputClassNames = classNames({
      'topcoat-combobox__select': true,
      full: !!this.props.full,
    });
    const {
      full = false,
      large = false,
      theme = this.theme,
      suggestions = [],
      getSuggestions = this.getSuggestions,
      getSuggestionValue = this.getSuggestionValue,
      onSuggestionSelected = this.onSuggestionSelected,
      onChangeHandler = this.onChange,
      onSuggestionsFetchRequested = this.onSuggestionsFetchRequested,
      onSuggestionsClearRequested = this.onSuggestionsClearRequested,
      shouldRenderSuggestions = this.shouldRenderSuggestions,
      inputProps = {},
      placeholder,
      renderSuggestion = this.renderSuggestion,
      ...rest,
    } = this.props;
    const defaultInputProps = {
      ...inputProps,
      full,
      className: inputClassNames,
      placeholder: this.props.placeholder || '',
      value: (value !== undefined ? value : this.props.value || ''),
      onChange: this.onChange,
    };

    const classNameModifier = large
      ? '--large'
      : '';

    return (
      <Autosuggest
        ref={ (autosuggest) => {
          if (autosuggest) {
            this.input = autosuggest.input;
          }
        } }
        theme={ theme }
        suggestions={ suggestionsState }
        onSuggestionSelected={ onSuggestionSelected }
        onSuggestionsFetchRequested={ onSuggestionsFetchRequested }
        onSuggestionsClearRequested={ onSuggestionsClearRequested }
        getSuggestionValue={ getSuggestionValue }
        shouldRenderSuggestions={ shouldRenderSuggestions }
        renderSuggestion={ renderSuggestion }
        inputProps={ defaultInputProps }
        focusInputOnSuggestionClick={ false }
        { ...rest }
      />
    );
  }
}

ComboBox.displayName = 'ComboBox';

export default ComboBox;
