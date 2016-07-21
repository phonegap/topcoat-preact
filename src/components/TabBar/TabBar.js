import React from 'react';
import classNames from 'classnames';
import Tappable from 'react-tappable';

const TabBar = (props) => {
  const { full = false, ...rest } = props;
  const cx = classNames({
    full,
    'pg-tab-bar': true,
    'topcoat-tab-bar': true,
  });
  const tabs = props.children.map(child => (
    <label key={ child.key } className="topcoat-tab-bar__item">
      <input type="radio" name={ props.name } />
      <Tappable
        component="button"
        className="topcoat-tab-bar__button"
        onTap={ () => props.clickHandler(child.key) }
      >
        { child }
      </Tappable>
    </label>
  ));
  return (
    <div className={ cx } { ...rest }>
      { tabs }
    </div>
  );
};

TabBar.propTypes = {
  children: React.PropTypes.any,
  clickHandler: React.PropTypes.func.isRequired,
  full: React.PropTypes.bool,
  name: React.PropTypes.string.isRequired,
};

export default TabBar;

