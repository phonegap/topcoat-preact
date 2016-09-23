import { h } from 'preact';
import classNames from 'classnames';

// @TODO - radio buttons should be managed
//   ...or at least be able to be managed
const RadioButton = (props) => {
  const { right = false, disabled = false, name, ...rest } = props;
  const cx = classNames({
    'topcoat-radio-button': true,
  });
  return (
    <label className={ cx } { ...rest }>
      { !right && props.children }
      <input
        type="radio"
        name={ name }
        disabled={ !!disabled }
      />
      <div className="topcoat-radio-button__checkmark"></div>
      { right && props.children }
    </label>
  );
};

RadioButton.displayName = 'RadioButton';

export default RadioButton;
