import { h } from 'preact';
import { storiesOf } from '@kadira/storybook';

import RadioButton from '../';

storiesOf('RadioButton', module)
  .addWithInfo('left label', () => (
    <RadioButton name="left-label">Left label </RadioButton>
  ))
  .addWithInfo('right label', () => (
    <RadioButton right name="right-label"> Right label</RadioButton>
  ))
  .addWithInfo('no label', () => (
    <RadioButton name="no-label" />
  ))
  .addWithInfo('emoji label', () => (
    <RadioButton name="emoji-label">⚡️💀☠️✨ </RadioButton>
  ))
  .addWithInfo('disabled', () => (
    <RadioButton name="disabled" disabled>Disabled </RadioButton>
  ));
