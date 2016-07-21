import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Button from '../';

storiesOf('Button', module)
  .add('text', () => (
    <Button>Button</Button>
  ))
  .add('emoji', () => (
    <Button>☠️✨💀⚡️💀✨☠️</Button>
  ))
  .add('a clickHandler', () => (
    <Button clickHandler={ action('tapped') }>Click Me</Button>
  ))
  .add('no text (all defaults)', () => (
    <Button></Button>
  ))
  .add('disabled', () => (
    <Button disabled>Button</Button>
  ))
  .add('quiet', () => (
    <Button quiet>Button</Button>
  ))
  .add('disabled quiet', () => (
    <Button quiet disabled>Button</Button>
  ))
  .add('cta', () => (
    <Button cta>Button</Button>
  ))
  .add('disabled cta', () => (
    <Button cta disabled>Button</Button>
  ))
  .add('large', () => (
    <Button large>Button</Button>
  ))
  .add('disabled large', () => (
    <Button large disabled>Button</Button>
  ))
  .add('large quiet', () => (
    <Button large quiet>Button</Button>
  ))
  .add('disabled large quiet', () => (
    <Button large quiet disabled>Button</Button>
  ))
  .add('large cta', () => (
    <Button large cta>Button</Button>
  ))
  .add('disabled large cta', () => (
    <Button large cta disabled>Button</Button>
  ));
