import { configure } from '@kadira/storybook';

function loadStories() {
  require('../stories/Button');
  // require as many stories as you need.
}

configure(loadStories, module);
