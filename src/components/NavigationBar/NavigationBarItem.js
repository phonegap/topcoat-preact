import { h } from 'preact';
import classNames from 'classnames';

const NavigationBarItem = (props) => {
  const { left = false, right = false, ...rest } = props;
  const cx = classNames({
    'topcoat-left': left,
    'topcoat-right': right,
    'topcoat-navigation-bar__item': true,
  });
  return (
    <div className={ cx } { ...rest }>
      { props.children.length ? props.children : <span>&nbsp;</span> }
    </div>
  );
};

NavigationBarItem.displayName = 'NavigationBarItem';

export default NavigationBarItem;
