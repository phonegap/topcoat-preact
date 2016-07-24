import React from 'react';
import { storiesOf } from '@kadira/storybook';

import RadioButton from '../';

storiesOf('RadioButton', module)
  .add('left label', () => (
    <RadioButton name="left-label">Left label </RadioButton>
  ))
  .add('right label', () => (
    <div>
      <RadioButton right name="right-label"> Right label</RadioButton>
    </div>
  ))
  .add('no label', () => (
    <RadioButton name="no-label" />
  ))
  .add('emoji label', () => (
    <RadioButton name="emoji-label">⚡️💀☠️✨ </RadioButton>
  ))
  .add('disabled', () => (
    <RadioButton name="disabled" disabled>Disabled </RadioButton>
  ));
