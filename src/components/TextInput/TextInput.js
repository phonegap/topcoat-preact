import React from 'react';
import classNames from 'classnames';

// @TODO - text inputs should be managed
//   ...or at least be able to be managed
const TextInput = (props) => {
  const { large = false, ...rest } = props;
  const cx = classNames({
    'topcoat-text-input': !large,
    'topcoat-text-input--large': large,
  });
  return (
    <input type="text" className={ cx } { ...rest } />
  );
};

TextInput.displayName = 'TextInput';

TextInput.propTypes = {
  large: React.PropTypes.bool,
};

export default TextInput;
