import { h, Component } from 'preact';
import classNames from 'classnames';

export default class TextInput extends Component {
  render() {
    const { full = false, large = false, ...rest } = this.props;
    const cx = classNames({
      full,
      'topcoat-text-input': !large,
      'topcoat-text-input--large': large,
    });
    return (
      <input
        ref={ (node) => { this.input = node; } }
        type="text"
        className={ cx }
        { ...rest }
      />
    );
  }
}
