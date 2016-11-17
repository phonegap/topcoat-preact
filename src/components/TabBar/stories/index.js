import { h } from 'preact';
import { storiesOf, action } from '@kadira/storybook';

import TabBar from '../';

import 'adobe-mobile-ui/css/tab-bar-mobile.css';

storiesOf('TabBar', module)
  .addWithInfo('default', 'Children must be provided with keys', () => (
    <TabBar name="default">
      <span key="one">One</span>
      <span key="two">Two</span>
      <span key="three">Three</span>
    </TabBar>
  ))
  .addWithInfo('emoji', () => (
    <TabBar name="emoji">
      <span key="💀">💀</span>
      <span key="☠️">☠️</span>
      <span key="⚡️">⚡️</span>
    </TabBar>
  ))
  .addWithInfo('full', () => (
    <TabBar name="full" full>
      <span key="one">One</span>
      <span key="two">Two</span>
      <span key="three">Three</span>
    </TabBar>
  ))
  .addWithInfo('clickHandler', () => (
    <TabBar name="clickHandler" clickHandler={ action('tapped') }>
      <span key="one">One</span>
      <span key="two">Two</span>
      <span key="three">Three</span>
    </TabBar>
  ));
