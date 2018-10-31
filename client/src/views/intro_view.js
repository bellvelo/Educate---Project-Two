const PubSub = require('../helpers/pub_sub.js');


const IntroView = function(container){
  this.container = container;
};

IntroView.prototype.render = function (para) {

  console.dir(this.container);

const headerContainer = document.createElement('div');
headerContainer.classList.add('header-flex-container');

const header = document.createElement('h2');
header.classList.add('para-header')
header.textContent = para.header

headerContainer.appendChild(header);
this.container.appendChild(headerContainer);

  const introContainer = document.createElement('div');
  introContainer.classList.add('flex-container');

  const intro = document.createElement('p');
  intro.textContent = para.text
  intro.id = 'intro'

  introContainer.appendChild(intro);

  this.container.appendChild(introContainer);
};

module.exports = IntroView;
