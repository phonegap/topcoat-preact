import React from 'react';
import classNames from 'classnames';

const List = (props) => {
  const cx = classNames({
    'topcoat-list': true,
  });
  return (
    <div className={ cx } { ...props }>
      { props.children }
    </div>
  );
};

List.displayName = 'List';

List.propTypes = {
  children: React.PropTypes.any,
};

export default List;
