const PubSub = require('../helpers/pub_sub.js');

const TitleView = function(container){
  this.container = container
};

TitleView.prototype.render = function (topic) {
  // console.dir(topic);
  // console.dir(this.container);

  // MAIN CONTAINER
  const headerContainer = document.createElement('div');
  headerContainer.id = 'center-header-container';

  // MAKE TITLE CONTAINER
  const titleContainer = document.createElement('div');
  titleContainer.id = "center-title-container"


  // CREATE SUBJECT TITLE AND ADD TO CONTAINER
  const subjectTitle = document.createElement('h3');
  subjectTitle.id = "subject-title";
  subjectTitle.textContent = topic.subject
  titleContainer.appendChild(subjectTitle);

  // CREATE TOPIC HEADING AND ADD TO CONTAINER
  const topicTitle = document.createElement('h2');
  topicTitle.id = "topic-title";
  topicTitle.textContent = topic.title;
  titleContainer.appendChild(topicTitle);

  // ADD TITLE CONTAINER TO MAIN HEADER CONTAINER
  headerContainer.appendChild(titleContainer);

  const imageContainer = document.createElement('div');
  imageContainer.id = "center-title-img-container";

  const topicImage = document.createElement('img');
  topicImage.src = topic.topic_image;
  topicImage.id = "center-title-img";
  imageContainer.appendChild(topicImage);
  headerContainer.appendChild(imageContainer);

  this.container.appendChild(headerContainer);

};

module.exports = TitleView;
