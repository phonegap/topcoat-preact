import React from 'react';
import classNames from 'classnames';

const NavigationBar = (props) => {
  const cx = classNames({
    'topcoat-navigation-bar': true,
  });
  const children = props.children && props.children.count > 1 ? props.children :
    (<div className="topcoat-navigation-bar__item center full">
      <h1 className="topcoat-navigation-bar__title">
        { props.children || <span>&nbsp;</span> }
      </h1>
    </div>);
  return (
    <div className={ cx }>
      { children }
    </div>
  );
};

NavigationBar.propTypes = {
  children: React.PropTypes.any,
  clickHandler: React.PropTypes.func,
  cta: React.PropTypes.bool,
  full: React.PropTypes.bool,
  large: React.PropTypes.bool,
  quiet: React.PropTypes.bool,
};

export default NavigationBar;

