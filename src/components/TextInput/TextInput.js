import React from 'react';
import classNames from 'classnames';

export default React.createClass({

  displayName: 'TextInput',

  propTypes: {
    full: React.PropTypes.bool,
    large: React.PropTypes.bool,
  },

  render() {
    const { full = false, large = false, ...rest } = this.props;
    const cx = classNames({
      full,
      'topcoat-text-input': !large,
      'topcoat-text-input--large': large,
    });
    return (
      <input
        ref="input"
        type="text"
        className={ cx }
        { ...rest }
      />
    );
  },
});
