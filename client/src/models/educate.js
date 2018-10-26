const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Educate = function(url) {
  this.url = url;
  this.request = new Request(this.url);
};

Educate.prototype.getData = function () {
  this.request.get()
  .then((topics) => {
    PubSub.publish('Educate:all-data-loaded', topics);
    console.log(topics);
  })
  .catch(console.error);
};

module.exports = Educate;
