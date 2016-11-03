import { h } from 'preact';
import { storiesOf, action } from '@kadira/storybook';

import ButtonBar from '../';

storiesOf('ButtonBar', module)
  .addWithInfo('default', () => (
    <ButtonBar>
      <span key="one">One</span>
      <span key="two">Two</span>
      <span key="three">Three</span>
    </ButtonBar>
  ))
  .addWithInfo('emoji', () => (
    <ButtonBar>
      <span key="💀">💀</span>
      <span key="☠️">☠️</span>
      <span key="⚡️">⚡️</span>
    </ButtonBar>
  ))
  .addWithInfo('clickHandler', () => (
    <ButtonBar clickHandler={ action('tapped') }>
      <span key="one">One</span>
      <span key="two">Two</span>
      <span key="three">Three</span>
    </ButtonBar>
  ));
