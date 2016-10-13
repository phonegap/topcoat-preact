import { h } from 'preact';
import classNames from 'classnames';

const ListHeader = (props) => {
  const cx = classNames({
    'topcoat-list__header': true,
  });
  return (
    <h3 className={ cx } { ...props }>
      { props.children.length ? props.children : <span>&nbsp;</span> }
    </h3>
  );
};

ListHeader.displayName = 'ListHeader';

export default ListHeader;
