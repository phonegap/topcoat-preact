import React from 'react';
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

Notification.propTypes = {
  count: React.PropTypes.number,
};

export default Notification;
