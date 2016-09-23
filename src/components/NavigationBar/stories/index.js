import { h } from 'preact';
import { storiesOf } from '@kadira/storybook';

import { NavigationBar, NavigationBarTitle } from '../';

storiesOf('NavigationBar', module)
  .addWithInfo('default', () => (
    <NavigationBar>
      <NavigationBarTitle>Header</NavigationBarTitle>
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
      <NavigationBarTitle>⚡️💀☠️💀⚡️</NavigationBarTitle>
    </NavigationBar>
  ))
  .addWithInfo('not full', () => (
    <NavigationBar>
      <NavigationBarTitle full={ false }>Not Full</NavigationBarTitle>
    </NavigationBar>
  ))
  .addWithInfo('not centered', () => (
    <NavigationBar>
      <NavigationBarTitle center={ false }>Not Centered</NavigationBarTitle>
    </NavigationBar>
  ))
  .addWithInfo('not centered or full', () => (
    <NavigationBar>
      <NavigationBarTitle full={ false } center={ false }>Not Centered or Full</NavigationBarTitle>
    </NavigationBar>
  ))
  .addWithInfo('with IconButtons', () => (
    <NavigationBar>
      <NavigationBarTitle>@TODO once there are IconButtons</NavigationBarTitle>
    </NavigationBar>
  ));
