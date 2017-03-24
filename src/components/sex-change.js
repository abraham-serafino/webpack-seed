import rivets from 'rivets';
import html from './sex-change.html';

rivets.components['sex-change'] = {
  template: () => html,

  initialize: () => ({
    person: { sex: 'M' }
  })
};
