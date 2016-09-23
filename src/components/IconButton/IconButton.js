import { h } from 'preact';
import classNames from 'classnames';
import Tappable from 'react-tappable';

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
    <Tappable
      component="button"
      className={ cx }
      onTap={ clickHandler }
      { ...rest }
    >
      <span className="topcoat-icon">
        { props.children }
      </span>
    </Tappable>
  );
};

IconButton.displayName = 'IconButton';

export default IconButton;
