import { configure, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

setAddon(infoAddon);

import 'adobe-mobile-ui/css/root-mobile.css'
// import 'topcoat/css/topcoat-mobile-light.css';

function loadStories() {
  require('../src/components/Button/stories');
  require('../src/components/ButtonBar/stories');
  require('../src/components/Checkbox/stories');
  require('../src/components/ComboBox/stories');
  require('../src/components/IconButton/stories');
  require('../src/components/List/stories');
  require('../src/components/NavigationBar/stories');
  require('../src/components/Notification/stories');
  require('../src/components/Range/stories');
  require('../src/components/RadioButton/stories');
  require('../src/components/SearchInput/stories');
  require('../src/components/Switch/stories');
  require('../src/components/TabBar/stories');
  require('../src/components/TextArea/stories');
  require('../src/components/TextInput/stories');
}

configure(loadStories, module);
