import { h } from 'preact';
import { storiesOf } from '@kadira/storybook';

import Notification from '../';

storiesOf('Notification', module)
  .addWithInfo('default', () => (
    <Notification />
  ))
  .addWithInfo('with a count', () => (
    <Notification count="1" />
  ))
  .addWithInfo('with a high count', () => (
    <Notification count="189236" />
  ));
