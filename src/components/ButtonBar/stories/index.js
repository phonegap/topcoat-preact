import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import ButtonBar from '../';

storiesOf('ButtonBar', module)
  .add('default', () => (
    <ButtonBar>
      <span key="one">One</span>
      <span key="two">Two</span>
      <span key="three">Three</span>
    </ButtonBar>
  ))
  .add('emoji', () => (
    <ButtonBar>
      <span key="💀">💀</span>
      <span key="☠️">☠️</span>
      <span key="⚡️">⚡️</span>
    </ButtonBar>
  ))
  .add('clickHandler', () => (
    <ButtonBar clickHandler={ action('tapped') }>
      <span key="one">One</span>
      <span key="two">Two</span>
      <span key="three">Three</span>
    </ButtonBar>
  ))
  .add('large', () => (
    <ButtonBar large>
      <span key="one">One</span>
      <span key="two">Two</span>
      <span key="three">Three</span>
    </ButtonBar>
  ));
