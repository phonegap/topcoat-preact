import { h } from 'preact';
import classNames from 'classnames';

const Button = (props) => {
  const { clickHandler = () => {},
    cta = false, full = false, large = false, quiet = false, ...rest } = props;
  const cx = classNames({
    full,
    'topcoat-button': !quiet && !cta && !large,
    'topcoat-button--quiet': !cta && !large && quiet,
    'topcoat-button--cta': cta && !large && !quiet,
    'topcoat-button--large': large && !cta && !quiet,
    'topcoat-button--large--cta': large && cta,
    'topcoat-button--large--quiet': large && quiet && !cta,
  });
  return (
    <button
      className={ cx }
      onClick={ clickHandler }
      { ...rest }
    >
      { props.children.length ? props.children : <span>&nbsp;</span> }
    </button>
  );
};

Button.displayName = 'Button';

export default Button;
