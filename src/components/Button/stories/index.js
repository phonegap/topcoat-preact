import { h } from 'preact';
import { storiesOf, action } from '@kadira/storybook';

import Button from '../';

import 'adobe-mobile-ui/css/button-mobile.css';

storiesOf('Button', module)
  .addWithInfo('text', () => (
    <Button>Button</Button>
  ))
  .addWithInfo('emoji', () => (
    <Button foo>☠️✨💀⚡️💀✨☠️</Button>
  ))
  .addWithInfo('a clickHandler', () => (
    <Button clickHandler={ action('tapped') }>Click Me</Button>
  ))
  .addWithInfo('a disabled clickHandler', () => (
    <Button disabled clickHandler={ action('tapped') }>Click Me</Button>
  ))
  .addWithInfo('no text (all defaults)', () => (
    <Button />
  ))
  .addWithInfo('disabled', () => (
    <Button disabled>Button</Button>
  ))
  .addWithInfo('quiet', () => (
    <Button quiet>Button</Button>
  ))
  .addWithInfo('disabled quiet', () => (
    <Button quiet disabled>Button</Button>
  ))
  .addWithInfo('cta', () => (
    <Button cta>Button</Button>
  ))
  .addWithInfo('disabled cta', () => (
    <Button cta disabled>Button</Button>
  ));
