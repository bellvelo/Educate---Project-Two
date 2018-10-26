const PubSub = require('../helpers/pub_sub.js');

const TopicView = function (container) {
  this.container = container;
};

TopicView.prototype.render = function (topic) {
  const topicContainer = document.createElement('div');
  topicContainer.classList.add('topic-choice');

  const title = this.createHeading(topic.title);
  topicContainer.appendChild(title)

  this.container.appendChild(topicContainer);

};

TopicView.prototype.createHeading = function (textContent) {
  const heading = document.createElement('h1');
  heading.textContent = textContent;
  return heading;
};


module.exports = TopicView;
