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
        ref={ c => this.input = c }
        type="text"
        className={ cx }
        { ...rest }
      />
    );
  }
}
