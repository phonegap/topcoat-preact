import { h } from 'preact';
import classNames from 'classnames';

const ListContainer = (props) => {
  const cx = classNames({
    'topcoat-list__container': true,
  });
  return (
    <ul className={ cx } { ...props }>
      { props.children }
    </ul>
  );
};

ListContainer.displayName = 'ListContainer';

export default ListContainer;
