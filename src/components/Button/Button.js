import React from 'react';
import classNames from 'classnames';
import Tappable from 'react-tappable';

const Button = (props) => {
  const { clickHandler = () => {},
    cta = false, large = false, quiet = false, ...rest } = props;
  const cx = classNames({
    full: props.full || false,
    'topcoat-button': !cta && !large,
    'topcoat-button--quiet': !cta && !large && quiet,
    'topcoat-button--cta': cta && !large && !quiet,
    'topcoat-button--large': large && !cta && !quiet,
    'topcoat-button--large--cta': large && cta,
    'topcoat-button--large--quiet': large && quiet && !cta,
  });
  return (
    <Tappable
      component="button"
      className={ cx }
      onTap={ clickHandler }
      { ...rest }
    >
      { props.children || <span>&nbsp;</span> }
    </Tappable>
  );
};

Button.displayName = 'Button';

Button.propTypes = {
  children: React.PropTypes.any,
  clickHandler: React.PropTypes.func,
  cta: React.PropTypes.bool,
  full: React.PropTypes.bool,
  large: React.PropTypes.bool,
  quiet: React.PropTypes.bool,
};

export default Button;
