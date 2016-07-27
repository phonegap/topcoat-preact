import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { NavigationBar, NavigationBarTitle } from '../';

storiesOf('NavigationBar', module)
  .add('default', () => (
    <NavigationBar>
      <NavigationBarTitle>Header</NavigationBarTitle>
    </NavigationBar>
  ))
  .add('empty', () => (
    <NavigationBar />
  ))
  .add('empty title', () => (
    <NavigationBar>
      <NavigationBarTitle />
    </NavigationBar>
  ))
  .add('emoji', () => (
    <NavigationBar>
      <NavigationBarTitle>⚡️💀☠️💀⚡️</NavigationBarTitle>
    </NavigationBar>
  ))
  .add('not full', () => (
    <NavigationBar>
      <NavigationBarTitle full={ false }>Not Full</NavigationBarTitle>
    </NavigationBar>
  ))
  .add('not centered', () => (
    <NavigationBar>
      <NavigationBarTitle center={ false }>Not Centered</NavigationBarTitle>
    </NavigationBar>
  ))
  .add('not centered or full', () => (
    <NavigationBar>
      <NavigationBarTitle full={ false } center={ false }>Not Centered or Full</NavigationBarTitle>
    </NavigationBar>
  ))
  .add('with IconButtons', () => (
    <NavigationBar>
      <NavigationBarTitle>@TODO once there are IconButtons</NavigationBarTitle>
    </NavigationBar>
  ));
