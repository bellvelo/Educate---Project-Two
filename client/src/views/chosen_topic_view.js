const PubSub = require('../helpers/pub_sub.js');
const TitleView = require('./title_view.js');
const IntroView = require('./intro_view.js');
const CarouselView = require('./carousel_view.js');
const Question = require('./question_view.js');

const ChosenTopicView = function(container) {
  this.container = container;
};

ChosenTopicView.prototype.bindEvents = function () {
  PubSub.subscribe('Educate:chosen-topic', (evt) => {
    console.dir(evt.detail);
    this.render(evt.detail);
  })
};

ChosenTopicView.prototype.render = function (topic) {
  this.container.innerHTML = '';

  const mainContainer = document.createElement('div');
  mainContainer.classList.add('topic-main-container')

  const titleView = new TitleView(mainContainer);
  titleView.render(topic)

  const intro = new IntroView(mainContainer);
  intro.render(topic);

  const carousel = new CarouselView(mainContainer);
  carousel.render(topic)

  const question = new Question(mainContainer);
  question.render(topic)

  this.container.appendChild(mainContainer);

};



module.exports = ChosenTopicView;
