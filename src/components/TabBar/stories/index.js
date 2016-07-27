import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import TabBar from '../';

storiesOf('TabBar', module)
  .add('default', () => (
    <TabBar name="default">
      <span key="one">One</span>
      <span key="two">Two</span>
      <span key="three">Three</span>
    </TabBar>
  ))
  .add('emoji', () => (
    <TabBar name="emoji">
      <span key="💀">💀</span>
      <span key="☠️">☠️</span>
      <span key="⚡️">⚡️</span>
    </TabBar>
  ))
  .add('full', () => (
    <TabBar name="full" full>
      <span key="one">One</span>
      <span key="two">Two</span>
      <span key="three">Three</span>
    </TabBar>
  ))
  .add('clickHandler', () => (
    <TabBar name="clickHandler" clickHandler={ action('tapped') }>
      <span key="one">One</span>
      <span key="two">Two</span>
      <span key="three">Three</span>
    </TabBar>
  ));
