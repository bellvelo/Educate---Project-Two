const PubSub = require('../helpers/pub_sub.js');

const ChosenTopicView = function(container) {
  this.container = container;
};

ChosenTopicView.prototype.bindEvents = function () {
  PubSub.subscribe('Educate:chosen-topic', (evt) => {
    console.dir(evt.detail);
    // this.render(evt.detail);
  })
};

// ChosenTopicView.prototype.render = function () {
//   this.container.innerHTML = '';
//   const
// };

module.exports = ChosenTopicView;
