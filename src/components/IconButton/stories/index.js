import React from 'react';
import { storiesOf } from '@kadira/storybook';

import IconButton from '../';
// @TODO this is all a mess -- need a beter way to do IconButtons
import Icon from 'babel!svg-react!./hamburger_dark.svg?name=HamburgerIcon';
import iconPNG from 'base64!./checkbox_checked_dark.png';

storiesOf('IconButton', module)
  .addWithInfo('default', () => (
    <IconButton />
  ))
  .addWithInfo('with an svg', () => (
    <IconButton><Icon /></IconButton>
  ))
  .addWithInfo('with a png', () => (
    <IconButton><img src={ `data:image/png;base64,${iconPNG}` } alt="icon" /></IconButton>
  ));
