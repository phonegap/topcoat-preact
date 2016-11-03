import { h } from 'preact';
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
  ));
