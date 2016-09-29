import { Component, h } from 'preact';
import classNames from 'classnames';

export default class SearchInput extends Component {
  render() {
    // @TODO - search inputs should be managed
    //   ...or at least be able to be managed
    // @TODO - search icon is missing... need to figure
    //   out webpack issues around this
    const { large = false, ...rest } = this.props;
    const cx = classNames({
      'topcoat-search-input': !large,
      'topcoat-search-input--large': large,
    });
    return (
      <input
        ref={ (node) => { this.searchInput = node; } }
        type="search"
        placeholder="search"
        className={ cx } { ...rest }
      />
    );
  }
}
