import React from 'react';
import { storiesOf } from '@kadira/storybook';

import RadioButton from '../';

storiesOf('RadioButton', module)
  .addWithInfo('left label', () => (
    <RadioButton name="left-label">Left label </RadioButton>
  ))
  .addWithInfo('right label', () => (
    <div>
      <RadioButton right name="right-label"> Right label</RadioButton>
    </div>
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
