import { h } from 'preact';
import classNames from 'classnames';

const Notification = (props) => {
  const { count = 0, ...rest } = props;
  const cx = classNames({
    'topcoat-notification': true,
  });
  return (
    <span className={ cx } { ...rest }>{ count }</span>
  );
};

Notification.displayName = 'Notification';

export default Notification;
