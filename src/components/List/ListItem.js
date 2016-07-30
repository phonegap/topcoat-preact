import React from 'react';
import classNames from 'classnames';
import Tappable from 'react-tappable';

const ListItem = (props) => {
  const { clickHandler = false, ...rest } = props;
  const cx = classNames({
    'topcoat-list__item': true,
  });
  const item = clickHandler
    ? (<Tappable
      component="li"
      onTap={ clickHandler }
      className={ cx }
      { ...rest }
    >
      { props.children }
    </Tappable>)
    : (<li className={ cx } { ...rest }>
      { props.children }
    </li>);
  return item;
};

ListItem.displayName = 'ListItem';

ListItem.propTypes = {
  children: React.PropTypes.any,
};

export default ListItem;
