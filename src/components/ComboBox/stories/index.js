import { h } from 'preact';
import { action, storiesOf } from '@kadira/storybook';

import ComboBox from '../';

const suggestions = [
  {
    value: 'Preact',
  },
  {
    value: 'React',
  },
  {
    value: 'Angular',
  },
  {
    value: 'Ember',
  },
  {
    value: 'Choo',
  },
  {
    value: 'Vue',
  },
];

storiesOf('ComboBox', module)
  .addWithInfo('basic', () => (
    <ComboBox suggestions={ suggestions } />
  ))
  .addWithInfo('empty', () => (
    <ComboBox />
  ))
  .addWithInfo('placeholder', () => (
    <ComboBox suggestions={ suggestions } placeholder="Choose a framework" />
  ))
  .addWithInfo('default value', () => (
    <ComboBox suggestions={ suggestions } placeholder="Choose a framework" value="Preact" />
  ))
  .addWithInfo('a changeHandler', () => (
    <ComboBox
      suggestions={ suggestions }
      placeholder="Choose a framework"
      changeHandler={ action('changed') }
    />
  ))
  .addWithInfo('full', () => (
    <ComboBox full />
  ))
  .addWithInfo('large', () => (
    <ComboBox large />
  ))
  .addWithInfo('inputProps', () => (
    <ComboBox
      suggestions={ suggestions }
      placeholder="Choose a framework"
      inputProps={ {
        class: 'topcoat-text-input--large full',
        style: { background: 'white' },
        onClick: action('click'),
      } }
    />
  ));
