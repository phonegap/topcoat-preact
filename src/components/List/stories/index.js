import { h } from 'preact';
import { action, storiesOf } from '@kadira/storybook';

import { List, ListContainer, ListHeader, ListItem } from '../';

import 'adobe-mobile-ui/css/list-mobile.css';

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
  .addWithInfo('clickHandler', () => (
    <List>
      <ListHeader>Header</ListHeader>
      <ListContainer>
        <ListItem clickHandler={ action('tapped one') }>
          List Item One
        </ListItem>
        <ListItem clickHandler={ action('tapped two') }>
          List Item Two
        </ListItem>
        <ListItem clickHandler={ action('tapped three') }>
          List Item Three
        </ListItem>
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
