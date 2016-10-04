import { h } from 'preact';
import { storiesOf } from '@kadira/storybook';

import Range from '../';

storiesOf('Range', module)
  .addWithInfo('default', () => (
    <Range style={ { marginTop: '20px' } } name="default" />
  ))
  .addWithInfo('disabled', () => (
    <Range style={ { marginTop: '20px' } } name="disabled" disabled />
  ));
