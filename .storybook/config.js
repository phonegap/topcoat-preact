import { configure } from '@kadira/storybook';

import '../src/topcoat-0.8.0/css/topcoat-mobile-light.css';

function loadStories() {
  require('../src/components/Button/stories');
}

configure(loadStories, module);
