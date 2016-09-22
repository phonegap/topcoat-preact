import { h } from 'preact';
import { storiesOf } from '@kadira/storybook';

import Switch from '../';

storiesOf('Switch', module)
  .addWithInfo('default', () => (
    <Switch />
  ))
  .addWithInfo('checked', () => (
    <Switch checked />
  ))
  .addWithInfo('disabled', () => (
    <Switch disabled />
  ))
  .addWithInfo('checked and disabled', () => (
    <Switch checked disabled />
  ));
