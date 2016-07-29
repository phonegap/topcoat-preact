import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { List, ListContainer, ListHeader, ListItem } from '../';

storiesOf('List', module)
  .addWithInfo('default', () => (
    <List>
      <ListHeader>Header</ListHeader>
      <ListContainer>
        <ListItem>List Item One</ListItem>
        <ListItem>List Item Two</ListItem>
        <ListItem>List Item Three</ListItem>
      </ListContainer>
    </List>
  ))
  .addWithInfo('no header', () => (
    <List>
      <ListContainer>
        <ListItem>List Item One</ListItem>
        <ListItem>List Item Two</ListItem>
        <ListItem>List Item Three</ListItem>
      </ListContainer>
    </List>
  ))
  .addWithInfo('header only', () => (
    <List>
      <ListHeader>Header</ListHeader>
    </List>
  ))
  .addWithInfo('empty container', () => (
    <List>
      <ListContainer />
    </List>
  ));
