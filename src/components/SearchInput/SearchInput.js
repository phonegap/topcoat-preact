import React from 'react';
import classNames from 'classnames';

// @TODO - search inputs should be managed
//   ...or at least be able to be managed
// @TODO - search icon is missing... need to figure
//   out webpack issues around this
const SearchInput = (props) => {
  const { large = false, ...rest } = props;
  const cx = classNames({
    'topcoat-search-input': !large,
    'topcoat-search-input--large': large,
  });
  return (
    <input type="search" placeholder="search" className={ cx } { ...rest } />
  );
};

SearchInput.displayName = 'SearchInput';

SearchInput.propTypes = {
  large: React.PropTypes.bool,
};

export default SearchInput;
