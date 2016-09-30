import { h } from 'preact';
import classNames from 'classnames';

const IconButton = (props) => {
  const { clickHandler = () => {},
    large = false, quiet = false, ...rest } = props;
  const cx = classNames({
    'topcoat-icon-button': !quiet && !large,
    'topcoat-icon-button--large': large && !quiet,
    'topcoat-icon-button--quiet': quiet && !large,
    'topcoat-icon-button--large--quiet': large && quiet,
  });
  return (
    <button
      className={ cx }
      onClick={ clickHandler }
      { ...rest }
    >
      <span className="topcoat-icon">
        { props.children }
      </span>
    </button>
  );
};

IconButton.displayName = 'IconButton';

export default IconButton;
