const PubSub = require('../helpers/pub_sub.js');


const IntroView = function(container){
  this.container = container;
};

IntroView.prototype.render = function (topic) {
  console.dir(topic);
  console.dir(this.container);
  const introContainer = document.createElement('div');
  introContainer.id = 'center-intro-container'

  const intro = document.createElement('h3');
  intro.textContent = topic.intro
  intro.id = 'intro'

  introContainer.appendChild(intro);

  this.container.appendChild(introContainer);
};

module.exports = IntroView;
