import { h } from 'preact';
import classNames from 'classnames';

import { NavigationBarItem } from './NavigationBarItem';

const NavigationBarTitle = (props) => {
  const cx = classNames({
    'topcoat-navigation-bar__title': true,
  });
  return (
    <h1 className={ cx } { ...props }>
      { props.children || <span>&nbsp;</span> }
    </h1>
  );
};

NavigationBarTitle.displayName = 'NavigationBarTitle';

export default NavigationBarTitle;
