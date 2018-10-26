const PubSub = require('../helpers/pub_sub.js');
const TopicView = require('./topic_view.js');

const TopicListView = function(container)  {
  this.container = container;
};

TopicListView.prototype.bindEvents = function () {
  PubSub.subscribe('Educate:all-data-loaded', (evt) => {
    this.render(evt.detail);
    console.dir(evt.detail);
  })
};

TopicListView.prototype.render = function (topics) {
  this.container.innerHTML = "";
  const topicView = new TopicView(this.container);
  topics.forEach((topic) => topicView.render(topic));
};





module.exports = TopicListView;
