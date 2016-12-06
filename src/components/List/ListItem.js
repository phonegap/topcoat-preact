import { h } from 'preact';
import classNames from 'classnames';

const ListItem = (props) => {
  const { clickHandler = false, className, ...rest } = props;
  const cx = classNames({
    'topcoat-list__item': true,
  });
  // @TODO when there is a clickHandler, maybe make it an <a>?
  const item = clickHandler
    ? (<li
      onClick={ clickHandler }
      className={ `${cx} ${className}` }
      { ...rest }
    >
      { props.children }
    </li>)
    : (<li className={ `${cx} ${className}` } { ...rest }>
      { props.children }
    </li>);
  return item;
};

ListItem.displayName = 'ListItem';

export default ListItem;
