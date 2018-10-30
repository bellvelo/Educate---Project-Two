const PubSub = require('../helpers/pub_sub.js');
const Siema = require('siema')


const CarouselView = function(container){
  this.container = container;
};

CarouselView.prototype.render = function (imageInfo) {

const flexContainer = document.createElement('div');
flexContainer.classList.add('flex-container')

const infoImageContainer = document.createElement('div');
infoImageContainer.classList.add('info-image-container')

const image = document.createElement('img');
image.classList.add('info-image')
image.src = imageInfo.image

const caption = document.createElement('p');
caption.classList.add('image-caption')
caption.textContent = imageInfo.text



infoImageContainer.appendChild(image)
infoImageContainer.appendChild(caption)
flexContainer.appendChild(infoImageContainer)
this.container.appendChild(flexContainer);



};

module.exports = CarouselView;
