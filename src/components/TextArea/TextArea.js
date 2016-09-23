import { h } from 'preact';
import classNames from 'classnames';

// @TODO - text areas should be managed
//   ...or at least be able to be managed
const TextArea = (props) => {
  const { large = false, ...rest } = props;
  const cx = classNames({
    'topcoat-textarea': !large,
    'topcoat-textarea--large': large,
  });
  return (
    <textarea className={ cx } { ...rest }>
      { props.children }
    </textarea>
  );
};

TextArea.displayName = 'TextArea';

export default TextArea;
