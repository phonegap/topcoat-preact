import React from 'react';
import { storiesOf } from '@kadira/storybook';

import SearchInput from '../';

storiesOf('SearchInput', module)
  .addWithInfo('basic', () => (
    <SearchInput name="basic" />
  ))
  .addWithInfo('disabled', () => (
    <SearchInput name="disabled" disabled />
  ))
  .addWithInfo('large', () => (
    <div>
      <SearchInput name="large" large />
    </div>
  ))
  .addWithInfo('large disabled', () => (
    <SearchInput name="large-disabled" disabled large />
  ));
