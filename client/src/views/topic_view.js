const PubSub = require('../helpers/pub_sub.js');

const TopicView = function (container) {
  this.container = container;
};

TopicView.prototype.render = function (topic) {
  const topicContainer = document.createElement('div');
  topicContainer.classList.add('topic-choice');

  const topicButton = this.createButton(topic._id);
  topicContainer.appendChild(topicButton);

  this.container.appendChild(topicContainer);

};

TopicView.prototype.createButton = function (topicId) {
  const button = document.createElement('button');
  button.classList.add('topic-button');
  button.value = topicId;

  button.addEventListener('click', (evt) => {
    PubSub.publish('TopicView:topic-button-clicked', evt.target.value);

  })
  return button;
};

module.exports = TopicView;
