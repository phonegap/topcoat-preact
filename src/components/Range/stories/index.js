import { h } from 'preact';
import { storiesOf } from '@kadira/storybook';

import Range from '../';

storiesOf('Range', module)
  .addWithInfo('default', () => (
    <Range name="default" />
  ))
  .addWithInfo('disabled', () => (
    <Range name="disabled" disabled />
  ));
