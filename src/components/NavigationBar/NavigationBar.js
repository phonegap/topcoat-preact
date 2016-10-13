import { h } from 'preact';
import classNames from 'classnames';

import NavigationBarTitle from './NavigationBarTitle';

const NavigationBar = (props) => {
  const cx = classNames({
    'topcoat-navigation-bar': true,
  });
  return (
    <header role="banner" className={ cx } { ...props }>
      { props.children.length ? props.children : <div /> }
    </header>
  );
};

NavigationBar.displayName = 'NavigationBar';

export default NavigationBar;
