const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Educate = function(url) {
  this.url = url;
  this.request = new Request(this.url);
  this.allData = {}
};

Educate.prototype.bindEvents = function () {
  PubSub.subscribe('TopicView:topic-button-clicked', (evt) => {
    console.dir(evt.detail);
    this.getSelectedTopic(evt.detail);
  })
  PubSub.subscribe('QuestionView:answer-button-clicked', (evt) => {
    console.dir(evt.detail);

    const result = {}
    result.checked = this.checkAnswer(evt.detail);
    result.topic = evt.detail.topic
    result.correct_answer = evt.detail.correct_answer; //NEW
  result.selected_answer = evt.detail.selected_answer; //NEW
    PubSub.publish('Educate:answer-checked', result);
    // console.log(result); //boolean

  })
PubSub.subscribe('ButtonView:home-button-clicked', (evt) => {
  // const home = evt.detail
  PubSub.publish('Educate:all-data-loaded', this.allData);
  console.log(this.allData);
})
};

Educate.prototype.getData = function () {
  this.request.get()
  .then((topics) => {
    this.allData = topics;
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
