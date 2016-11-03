import { h } from 'preact';
import { storiesOf } from '@kadira/storybook';

import TextInput from '../';

storiesOf('TextInput', module)
  .addWithInfo('default', () => (
    <TextInput name="default" />
  ))
  .addWithInfo('default value', () => (
    <TextInput name="default-value" defaultValue="default value" />
  ))
  .addWithInfo('fail', () => (
    <TextInput name="fail" pattern="not-fail" defaultValue="fail" />
  ))
  .addWithInfo('disabled', () => (
    <TextInput name="disabled" disabled />
  ));
