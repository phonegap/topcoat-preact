import React from 'react';
import classNames from 'classnames';

const ListHeader = (props) => {
  const cx = classNames({
    'topcoat-list__header': true,
  });
  return (
    <h3 className={ cx }>
      { props.children || <span>&nbsp;</span> }
    </h3>
  );
};

ListHeader.displayName = 'ListHeader';

ListHeader.propTypes = {
  children: React.PropTypes.any,
};

export default ListHeader;
