const PubSub = require('../helpers/pub_sub.js');
const TitleView = require('./title_view.js');
const IntroView = require('./intro_view.js');
const CarouselView = require('./carousel_view.js');
const Question = require('./question_view.js');
const QuestionView = require('./question_view.js')
const ButtonView = require('./button_view.js');


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

  const imageViewOne = new CarouselView(mainContainer);
  imageViewOne.render(topic.images.image_one);

  const questionView = new QuestionView(mainContainer);
  questionView.render(topic);

  const imageViewTwo = new CarouselView(mainContainer);
  imageViewTwo.render(topic.images.image_two);

  const buttonView = new ButtonView(mainContainer); // NEW
  buttonView.render(topic);

  this.container.appendChild(mainContainer);

};



module.exports = ChosenTopicView;
