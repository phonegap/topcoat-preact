import { h } from 'preact';
import { storiesOf } from '@kadira/storybook';

import Range from '../';

// @TODO why is the margin-top needed?
storiesOf('Range', module)
  .addWithInfo('default', () => (
    <Range name="default" />
  ))
  .addWithInfo('disabled', () => (
    <Range name="disabled" disabled />
  ));
