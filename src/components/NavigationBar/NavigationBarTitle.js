import React from 'react';
import classNames from 'classnames';

const NavigationBarTitle = (props) => {
  const { full = true, center = true, ...rest } = props;
  const cx = classNames({
    full,
    center,
    'topcoat-navigation-bar__item': true,
  });
  return (
    <div className={ cx } { ...rest }>
      <h1 className="topcoat-navigation-bar__title">
        { props.children || <span>&nbsp;</span> }
      </h1>
    </div>
  );
};

NavigationBarTitle.displayName = 'NavigationBarTitle';

NavigationBarTitle.propTypes = {
  center: React.PropTypes.bool,
  children: React.PropTypes.any,
  full: React.PropTypes.bool,
};

export default NavigationBarTitle;
