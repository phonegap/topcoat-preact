import { h } from 'preact';
import { storiesOf } from '@kadira/storybook';

import Checkbox from '../';

storiesOf('Checkbox', module)
  .addWithInfo('label', () => (
    <Checkbox description="labelled checkbox" id="label">label </Checkbox>
  ))
  .addWithInfo('no label', () => (
    <Checkbox description="unlabelled checkbox" id="no-label" />
  ))
  .addWithInfo('emoji label', () => (
    <Checkbox description="emoji checkbox" id="emoji-label">⚡️💀☠️✨ </Checkbox>
  ))
  .addWithInfo('disabled', () => (
    <Checkbox description="disabled checkbox" id="disabled" disabled>Disabled </Checkbox>
  ));
