const PubSub = require('../helpers/pub_sub.js');

const ButtonView = function(container){
  this.container = container;
};

ButtonView.prototype.render = function (topic) {
  console.dir(topic); // object
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('flex-container');

  const homeButton = this.createHomeButton(topic);
  homeButton.id = 'home-button';

  buttonContainer.appendChild(homeButton);

  this.container.appendChild(buttonContainer);
};

ButtonView.prototype.createHomeButton = function (topic) {
  const button = document.createElement('button');
  button.textContent = "Return to all categories";
  button.classList.add('home-button');
  button.value = topic;

  button.addEventListener('click', (evt) => {
    PubSub.publish('ButtonView:home-button-clicked', evt.target.value);
    // console.dir('home-button', evt.target.value);
  });
  return button;
};


module.exports = ButtonView;
