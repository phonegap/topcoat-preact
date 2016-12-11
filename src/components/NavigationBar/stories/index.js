import { h } from 'preact';
import { storiesOf } from '@kadira/storybook';

import { NavigationBar, NavigationBarItem, NavigationBarTitle } from '../';

import 'adobe-mobile-ui/css/navigation-bar-mobile.css';

storiesOf('NavigationBar', module)
  .addWithInfo('default', () => (
    <NavigationBar>
      <NavigationBarItem>
        <NavigationBarTitle>Header</NavigationBarTitle>
      </NavigationBarItem>
    </NavigationBar>
  ))
  .addWithInfo('empty', () => (
    <NavigationBar />
  ))
  .addWithInfo('empty title', () => (
    <NavigationBar>
      <NavigationBarTitle />
    </NavigationBar>
  ))
  .addWithInfo('emoji', () => (
    <NavigationBar>
      <NavigationBarItem>
        <NavigationBarTitle>⚡️💀☠️💀⚡️</NavigationBarTitle>
      </NavigationBarItem>
    </NavigationBar>
  ))
  .addWithInfo('full centred', () => (
    <NavigationBar>
      <NavigationBarItem full center>
        <NavigationBarTitle>Full Centered Title</NavigationBarTitle>
      </NavigationBarItem>
    </NavigationBar>
  ))
  .addWithInfo('with IconButtons', () => (
    <NavigationBar>
      <NavigationBarItem quarter left>
        <button className="topcoat-icon-button">
          <span className="topcoat-icon" />
        </button>
      </NavigationBarItem>
      <NavigationBarItem half center>
        <NavigationBarTitle>Centred Title</NavigationBarTitle>
      </NavigationBarItem>
      <NavigationBarItem quarter right>
        <button className="topcoat-icon-button">
          <span className="topcoat-icon" />
        </button>
      </NavigationBarItem>
    </NavigationBar>
  ));
