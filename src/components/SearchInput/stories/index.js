import { h } from 'preact';
import { storiesOf } from '@kadira/storybook';

import SearchInput from '../';

storiesOf('SearchInput', module)
  .addWithInfo('basic', () => (
    <SearchInput name="basic" />
  ))
  .addWithInfo('disabled', () => (
    <SearchInput name="disabled" disabled />
  ));
