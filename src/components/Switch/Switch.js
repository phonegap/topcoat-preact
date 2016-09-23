import { h } from 'preact';
import classNames from 'classnames';

// @TODO - switches should be managed
//   ...or at least be able to be managed
// NOTE: the 'checked' prop will freeze the component in 'on' unless the
//   component is managed
const Switch = (props) => {
  const { checked, disabled, ...rest } = props;
  const cx = classNames({
    'topcoat-switch': true,
  });
  return (
    <label className={ cx } { ...rest }>
      <input
        type="checkbox"
        className="topcoat-switch__input"
        disabled={ disabled }
        checked={ checked }
      />
      <div className="topcoat-switch__toggle"></div>
    </label>
  );
};

Switch.displayName = 'Switch';

export default Switch;
