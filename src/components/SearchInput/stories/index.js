import React from 'react';
import { storiesOf } from '@kadira/storybook';

import SearchInput from '../';

storiesOf('SearchInput', module)
  .add('basic', () => (
    <SearchInput name="basic" />
  ))
  .add('disabled', () => (
    <SearchInput name="disabled" disabled />
  ))
  .add('large', () => (
    <div>
      <SearchInput name="large" large />
    </div>
  ))
  .add('large disabled', () => (
    <SearchInput name="large-disabled" disabled large />
  ));
