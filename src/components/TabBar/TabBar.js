import { h } from 'preact';
import classNames from 'classnames';

const TabBar = (props) => {
  const { full = false, clickHandler = () => {}, ...rest } = props;
  const cx = classNames({
    full,
    'topcoat-tab-bar': true,
  });
  const tabs = props.children.map(child => (
    <label key={ child.key } className="topcoat-tab-bar__item">
      { /* <input aria-hidden="true" type="radio" name={ props.name } /> */ }
      <button
        className={ `topcoat-tab-bar__button${child.props.selected ? '--selected' : ''}` }
        onClick={ () => clickHandler(child.key) }
      >
        { child }
      </button>
    </label>
  ));
  return (
    <div className={ cx } { ...rest }>
      { tabs }
    </div>
  );
};

TabBar.displayName = 'TabBar';

export default TabBar;
