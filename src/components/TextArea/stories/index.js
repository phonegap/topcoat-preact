import React from 'react';
import { storiesOf } from '@kadira/storybook';

import TextArea from '../';

storiesOf('TextArea', module)
  .addWithInfo('basic', () => (
    <TextArea name="basic" />
  ))
  .addWithInfo('placeholder', () => (
    <TextArea name="placeholder" placeholder="This text area has a placeholder" />
  ))
  .addWithInfo('with text', () => (
    <TextArea name="with-text">This text area has existing text</TextArea>
  ))
  .addWithInfo('sized', () => (
    <TextArea name="sized" cols="24" rows="6" />
  ))
  .addWithInfo('disabled', () => (
    <TextArea name="disabled" disabled />
  ))
  .addWithInfo('large', () => (
    <TextArea name="large" large />
  ))
  .addWithInfo('large placeholder', () => (
    <TextArea name="large-placeholder" placeholder="This large text area has a placeholder" />
  ))
  .addWithInfo('large with text', () => (
    <TextArea name="large-with-text">This large text area has existing text</TextArea>
  ))
  .addWithInfo('large sized', () => (
    <TextArea name="large-sized" large cols="24" rows="6" />
  ))
  .addWithInfo('large disabled', () => (
    <TextArea name="large-disabled" disabled large />
  ));
