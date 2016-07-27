import { configure } from '@kadira/storybook';

import './topcoat-0.8.0/css/topcoat-mobile-light.css';

function loadStories() {
  require('../src/components/Button/stories');
  require('../src/components/ButtonBar/stories');
  require('../src/components/NavigationBar/stories');
  require('../src/components/Range/stories');
  require('../src/components/RadioButton/stories');
  require('../src/components/SearchInput/stories');
  require('../src/components/TabBar/stories');
}

configure(loadStories, module);
