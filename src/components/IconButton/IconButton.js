import React from 'react';
import classNames from 'classnames';
import Tappable from 'react-tappable';

const IconButton = (props) => {
  const { large = false, quiet = false, ...rest } = props;
  const cx = classNames({
    'topcoat-icon-button': !quiet && !large,
    'topcoat-icon-button--large': large && !quiet,
    'topcoat-icon-button--quiet': quiet && !large,
    'topcoat-icon-button--large--quiet': large && quiet,
  });
  return (
    <Tappable
      component="button"
      className={ cx }
      onTap={ props.clickHandler }
      { ...rest }
    >
      { props.children || <span className="topcoat-icon">&nbsp;</span> }
    </Tappable>
  );
};

IconButton.propTypes = {
  children: React.PropTypes.any,
  clickHandler: React.PropTypes.func.isRequired,
  large: React.PropTypes.bool,
  quiet: React.PropTypes.bool,
};

export default IconButton;
