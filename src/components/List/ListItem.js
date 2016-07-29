import React from 'react';
import classNames from 'classnames';

const ListItem = (props) => {
  const cx = classNames({
    'topcoat-list__item': true,
  });
  return (
    <li className={ cx }>
      { props.children }
    </li>
  );
};

ListItem.displayName = 'ListItem';

ListItem.propTypes = {
  children: React.PropTypes.any,
};

export default ListItem;
