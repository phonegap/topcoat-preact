import { h } from 'preact';
import classNames from 'classnames';

// @TODO - range inputs should be managed
//   ...or at least be able to be managed
const Range = (props) => {
  const cx = classNames({
    'topcoat-range': true,
  });
  return (<input type="range" className={ cx } { ...props } />);
};

Range.displayName = 'Range';

export default Range;
