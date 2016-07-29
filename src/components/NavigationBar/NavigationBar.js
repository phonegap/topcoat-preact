import React from 'react';
import classNames from 'classnames';

import NavigationBarTitle from './NavigationBarTitle';

const NavigationBar = (props) => {
  const cx = classNames({
    'topcoat-navigation-bar': true,
  });
  return (
    <div className={ cx }>
      { props.children || <NavigationBarTitle>&nbsp;</NavigationBarTitle> }
    </div>
  );
};

NavigationBar.displayName = 'NavigationBar';

NavigationBar.propTypes = {
  children: React.PropTypes.any,
};

export default NavigationBar;
