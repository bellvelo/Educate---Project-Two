const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Educate = function(url) {
  this.url = url;
  this.request = new Request(this.url);
};

Educate.prototype.bindEvents = function () {
  PubSub.subscribe('TopicView:topic-button-clicked', (evt) => {
    console.dir(evt.detail);
    this.getSelectedTopic(evt.detail);
  })
  PubSub.subscribe('QuestionView:answer-button-clicked', (evt) => {
    console.dir(evt.detail);
    const result = this.checkAnswer(evt.detail);
    PubSub.publish('Educate:answer-checked', result);
    // console.log(result); //boolean
  })
};

Educate.prototype.getData = function () {
  this.request.get()
  .then((topics) => {
    PubSub.publish('Educate:all-data-loaded', topics);
    console.log(topics);
  })
  .catch(console.error);
};

Educate.prototype.getSelectedTopic = function (topicId) {
  this.request.getTopic(topicId)
  .then((topic) => {
    PubSub.publish('Educate:chosen-topic', topic)
  })
  .catch(console.error);
};

Educate.prototype.checkAnswer = function () {
  console.dir(event.detail);

  if (event.detail.correct_answer === event.detail.selected_answer) {
    return true;
  } else {
    return false;
  }
};

module.exports = Educate;
