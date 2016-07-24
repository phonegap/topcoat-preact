import React from 'react';
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

RadioButton.propTypes = {
  children: React.PropTypes.any,
  disabled: React.PropTypes.bool,
  left: React.PropTypes.bool,
  name: React.PropTypes.string.isRequired,
  right: React.PropTypes.bool,
};

export default RadioButton;

