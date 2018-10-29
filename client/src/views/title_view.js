const PubSub = require('../helpers/pub_sub.js');

const TitleView = function(container){
  this.container = container
};

TitleView.prototype.render = function (topic) {
  console.dir(topic);
  console.dir(this.container);
  const headerContainer = document.createElement('div');
  headerContainer.classList.add('center-title-container');

  const title = document.createElement('h1');
  title.textContent = topic.title
  title.id = 'hello'

  headerContainer.appendChild(title);

  this.container.appendChild(headerContainer);

};

module.exports = TitleView;
