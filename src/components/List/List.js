import { h } from 'preact';
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

export default List;
