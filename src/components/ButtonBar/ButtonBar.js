import React from 'react';
import classNames from 'classnames';
import Tappable from 'react-tappable';

const ButtonBar = (props) => {
  const { clickHandler = () => {},
    full = false, large = false, ...rest } = props;
  const classNameModifier = large
    ? '--large'
    : '';
  const cx = classNames({
    full,
    'topcoat-button-bar': true,
  });
  const tabs = props.children.map(child => (
    <div key={ child.key } className="topcoat-button-bar__item">
      <Tappable
        component="button"
        className={ `topcoat-button-bar__button${classNameModifier}` }
        onTap={ () => clickHandler(child.key) }
      >
        { child }
      </Tappable>
    </div>
  ));
  return (
    <div className={ cx } { ...rest }>
      { tabs }
    </div>
  );
};

ButtonBar.displayName = 'ButtonBar';

ButtonBar.propTypes = {
  children: React.PropTypes.any,
  clickHandler: React.PropTypes.func,
  full: React.PropTypes.bool,
  large: React.PropTypes.bool,
};

export default ButtonBar;
