import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Range from '../';

// @TODO why is the margin-top needed?
storiesOf('Range', module)
  .add('default', () => (
    <Range name="default" style={ { marginTop: '20px' } } />
  ))
  .add('disabled', () => (
    <Range name="disabled" style={ { marginTop: '20px' } } disabled />
  ));
