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

  const centerHeaderContainer = document.createElement('div');
  centerHeaderContainer.id = "center-header-container"

const centerTitleContainer = document.createElement('div');
centerTitleContainer.id = "center-title-container"

const subjectTitle = document.createElement('h3');
subjectTitle.textContent = "Geography";
subjectTitle.id = "subject-title";

const topicTitle = document.createElement('h1');
topicTitle.textContent = "Global Warming";
topicTitle.id = "topic-title";

centerTitleContainer.appendChild(subjectTitle);
centerTitleContainer.appendChild(topicTitle);

centerHeaderContainer.appendChild(centerTitleContainer)

const centerTitleImgContainer = document.createElement('div')
centerTitleImgContainer.id = "center-title-img-container"

const centerTitleImage = document.createElement('img')
centerTitleImage.id = "center-title-img";
centerTitleImage.src = "../images/Global-title-img.png";

centerTitleImgContainer.appendChild(centerTitleImage);
centerHeaderContainer.appendChild(centerTitleImgContainer)

this.container.appendChild(centerHeaderContainer);

const flexBox = document.createElement('div');
flexBox.classList.add("flex-container")

const topicContainer = document.createElement('div');
topicContainer.id = "topics-container";

flexBox.appendChild(topicContainer);
this.container.appendChild(flexBox)


  const topicView = new TopicView(topicContainer);
  // topics.forEach((topic) => console.log(topic));
  topics.forEach((topic) => topicView.render(topic));

};




module.exports = TopicListView;
