import { h } from 'preact';
import classNames from 'classnames';

import NavigationBarTitle from './NavigationBarTitle';

const NavigationBar = (props) => {
  const cx = classNames({
    'topcoat-navigation-bar': true,
  });
  return (
    <div className={ cx } { ...props }>
      { props.children || <NavigationBarTitle>&nbsp;</NavigationBarTitle> }
    </div>
  );
};

NavigationBar.displayName = 'NavigationBar';

export default NavigationBar;
