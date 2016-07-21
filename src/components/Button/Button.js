import React from 'react';
import classNames from 'classnames';
import Tappable from 'react-tappable';

const Button = (props) => {
  const { cta = false, large = false, quiet = false, ...rest } = props;
  const cx = classNames({
    full: props.full || false,
    'topcoat-button': !cta && !large,
    'topcoat-button--cta': cta && !large && !quiet,
    'topcoat-button--cta--quiet': cta && quiet && !large,
    'topcoat-button--large': large && !cta && !quiet,
    'topcoat-button--large--cta': large && cta,
    'topcoat-button--large--quiet': large && quiet && !cta,
  });
  return (
    <Tappable
      component="button"
      className={ cx }
      onTap={ props.clickHandler }
      { ...rest }
    >
      { props.children || <span>&nbsp;</span> }
    </Tappable>
  );
};

Button.propTypes = {
  children: React.PropTypes.any,
  clickHandler: React.PropTypes.func.isRequired,
  cta: React.PropTypes.bool,
  full: React.PropTypes.bool,
  large: React.PropTypes.bool,
  quiet: React.PropTypes.bool,
};

export default Button;
