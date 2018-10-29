const PubSub = require('../helpers/pub_sub.js');
const TitleView = require('./title_view.js');
const IntroView = require('./intro_view.js');
const CarouselView = require('./carousel_view.js');
const Question = require('./question_view.js');
const QuestionDetailView = require('./question_detail_view.js');
const QuestionView = require('./question_view.js')


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
  titleView.render(topic);

  const introView = new IntroView(mainContainer);
  introView.render(topic);

  const carouselView = new CarouselView(mainContainer);
  carouselView.render(topic);

  const questionView = new QuestionView(mainContainer);
  questionView.render(topic);

  // const questionDetailView = new QuestionDetailView(mainContainer);
  // questionDetailView.render(topic);


  this.container.appendChild(mainContainer);

};



module.exports = ChosenTopicView;
