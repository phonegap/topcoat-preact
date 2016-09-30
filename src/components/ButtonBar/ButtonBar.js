import { h } from 'preact';
import classNames from 'classnames';

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
      <button
        className={ `topcoat-button-bar__button${classNameModifier}` }
        onClick={ () => clickHandler(child.key) }
      >
        { child }
      </button>
    </div>
  ));
  return (
    <div className={ cx } { ...rest }>
      { tabs }
    </div>
  );
};

ButtonBar.displayName = 'ButtonBar';

export default ButtonBar;
