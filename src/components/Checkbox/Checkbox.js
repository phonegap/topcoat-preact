import { h } from 'preact';
import classNames from 'classnames';

// @TODO - checkboxes should be managed
//   ...or at least be able to be managed
// @TODO - implement all label and a11y suggestions from http://codepen.io/Topcoat/pen/piHcs
const Checkbox = (props) => {
  const { description, disabled = false, id, ...rest } = props;
  const cx = classNames({
    'topcoat-checkbox': true,
  });
  return (
    <label htmlFor={ id } className={ cx } { ...rest }>
      { props.children }
      <input
        aria-label="checkbox with aria-label"
        type="checkbox"
        id={ id }
        disabled={ !!disabled }
        aria-describedby={ description || 'checkbox' }
      />
      <div className="topcoat-checkbox__checkmark"></div>
    </label>
  );
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
