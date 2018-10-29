const PubSub = require('../helpers/pub_sub.js');

const TopicView = function (container) {
  this.container = container;
};

TopicView.prototype.render = function (topic) {
  const topicContainer = document.createElement('div');
  topicContainer.classList.add('topic-choice');

  const topicButton = this.createButton(topic);
  topicContainer.appendChild(topicButton);

const topicListContainer = document.createElement('div')
topicListContainer.classList.add('topic-list-container')

  const topInfoList = document.createElement('ol');
  topInfoList.classList.add('topic-info-list');

  const topicInfoListItem = this.createListItem(topic, topInfoList);


topicListContainer.appendChild(topInfoList)

  topicContainer.appendChild(topicListContainer);



  this.container.appendChild(topicContainer);

};

TopicView.prototype.createButton = function (topic) {
  const button = document.createElement('button');
  button.classList.add('topic-button');
  button.textContent = topic.title
  button.value = topic._id;

  button.addEventListener('click', (evt) => {
    PubSub.publish('TopicView:topic-button-clicked', evt.target.value);

  })
  return button;
};

TopicView.prototype.createListItem = function (topic, container) {

  topic.info_points.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.classList.add('topic-list-item');
    listItem.textContent = item;

    container.appendChild(listItem)


  return listItem;
});
};


module.exports = TopicView;
