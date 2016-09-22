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
  ))
  .addWithInfo('large', () => (
    <TextInput name="large" large />
  ))
  .addWithInfo('large default value', () => (
    <TextInput name="large-default-value" large defaultValue="large default value" />
  ))
  .addWithInfo('large fail', () => (
    <TextInput name="large-fail" large pattern="not-fail" defaultValue="fail" />
  ))
  .addWithInfo('large disabled', () => (
    <TextInput name="large-disabled" disabled large />
  ));
