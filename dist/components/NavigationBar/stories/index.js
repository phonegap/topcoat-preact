'use strict';

var _preact = require('preact');

var _storybook = require('@kadira/storybook');

var _ = require('../');

require('adobe-mobile-ui/css/navigation-bar-mobile.css');

(0, _storybook.storiesOf)('NavigationBar', module).addWithInfo('default', function () {
  return (0, _preact.h)(
    _.NavigationBar,
    null,
    (0, _preact.h)(
      _.NavigationBarItem,
      null,
      (0, _preact.h)(
        _.NavigationBarTitle,
        null,
        'Header'
      )
    )
  );
}).addWithInfo('empty', function () {
  return (0, _preact.h)(_.NavigationBar, null);
}).addWithInfo('empty title', function () {
  return (0, _preact.h)(
    _.NavigationBar,
    null,
    (0, _preact.h)(_.NavigationBarTitle, null)
  );
}).addWithInfo('emoji', function () {
  return (0, _preact.h)(
    _.NavigationBar,
    null,
    (0, _preact.h)(
      _.NavigationBarItem,
      null,
      (0, _preact.h)(
        _.NavigationBarTitle,
        null,
        '\u26A1\uFE0F\uD83D\uDC80\u2620\uFE0F\uD83D\uDC80\u26A1\uFE0F'
      )
    )
  );
}).addWithInfo('full centred', function () {
  return (0, _preact.h)(
    _.NavigationBar,
    null,
    (0, _preact.h)(
      _.NavigationBarItem,
      { full: true, center: true },
      (0, _preact.h)(
        _.NavigationBarTitle,
        null,
        'Full Centered Title'
      )
    )
  );
}).addWithInfo('with IconButtons', function () {
  return (0, _preact.h)(
    _.NavigationBar,
    null,
    (0, _preact.h)(
      _.NavigationBarItem,
      { quarter: true, left: true },
      (0, _preact.h)(
        'button',
        { className: 'topcoat-icon-button' },
        (0, _preact.h)('span', { className: 'topcoat-icon' })
      )
    ),
    (0, _preact.h)(
      _.NavigationBarItem,
      { half: true, center: true },
      (0, _preact.h)(
        _.NavigationBarTitle,
        null,
        'Centred Title'
      )
    ),
    (0, _preact.h)(
      _.NavigationBarItem,
      { quarter: true, right: true },
      (0, _preact.h)(
        'button',
        { className: 'topcoat-icon-button' },
        (0, _preact.h)('span', { className: 'topcoat-icon' })
      )
    )
  );
});