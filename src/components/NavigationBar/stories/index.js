import React from 'react';
import { storiesOf } from '@kadira/storybook';

import NavigationBar from '../';

storiesOf('NavigationBar', module)
  .add('basic', () => (
    <NavigationBar>Header</NavigationBar>
  ))
  .add('empty', () => (
    <NavigationBar />
  ))
  .add('emoji', () => (
    <NavigationBar>⚡️💀☠️💀⚡️</NavigationBar>
  ))
  .add('full children', () => (
    <NavigationBar>
      <div className="topcoat-navigation-bar__item center full">
        <h1 className="topcoat-navigation-bar__title">Specified Header</h1>
      </div>
    </NavigationBar>
  ))
  .add('with IconButtons', () => (
    <NavigationBar>@TODO once there are IconButtons</NavigationBar>
  ));
