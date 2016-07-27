import React from 'react';
import classNames from 'classnames';

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

NavigationBar.propTypes = {
  children: React.PropTypes.any,
};

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

NavigationBarTitle.propTypes = {
  center: React.PropTypes.bool,
  children: React.PropTypes.any,
  full: React.PropTypes.bool,
};

export { NavigationBar, NavigationBarTitle };
