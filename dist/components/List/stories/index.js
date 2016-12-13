'use strict';

var _preact = require('preact');

var _storybook = require('@kadira/storybook');

var _ = require('../');

require('adobe-mobile-ui/css/list-mobile.css');

(0, _storybook.storiesOf)('List', module).addWithInfo('default', function () {
  return (0, _preact.h)(
    _.List,
    null,
    (0, _preact.h)(
      _.ListHeader,
      null,
      'Header'
    ),
    (0, _preact.h)(
      _.ListContainer,
      null,
      (0, _preact.h)(
        _.ListItem,
        null,
        'List Item One'
      ),
      (0, _preact.h)(
        _.ListItem,
        null,
        'List Item Two'
      ),
      (0, _preact.h)(
        _.ListItem,
        null,
        'List Item Three'
      )
    )
  );
}).addWithInfo('clickHandler', function () {
  return (0, _preact.h)(
    _.List,
    null,
    (0, _preact.h)(
      _.ListHeader,
      null,
      'Header'
    ),
    (0, _preact.h)(
      _.ListContainer,
      null,
      (0, _preact.h)(
        _.ListItem,
        { clickHandler: (0, _storybook.action)('tapped one') },
        'List Item One'
      ),
      (0, _preact.h)(
        _.ListItem,
        { clickHandler: (0, _storybook.action)('tapped two') },
        'List Item Two'
      ),
      (0, _preact.h)(
        _.ListItem,
        { clickHandler: (0, _storybook.action)('tapped three') },
        'List Item Three'
      )
    )
  );
}).addWithInfo('no header', function () {
  return (0, _preact.h)(
    _.List,
    null,
    (0, _preact.h)(
      _.ListContainer,
      null,
      (0, _preact.h)(
        _.ListItem,
        null,
        'List Item One'
      ),
      (0, _preact.h)(
        _.ListItem,
        null,
        'List Item Two'
      ),
      (0, _preact.h)(
        _.ListItem,
        null,
        'List Item Three'
      )
    )
  );
}).addWithInfo('header only', function () {
  return (0, _preact.h)(
    _.List,
    null,
    (0, _preact.h)(
      _.ListHeader,
      null,
      'Header'
    )
  );
}).addWithInfo('empty container', function () {
  return (0, _preact.h)(
    _.List,
    null,
    (0, _preact.h)(_.ListContainer, null)
  );
});