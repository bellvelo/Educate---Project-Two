const PubSub = require('../helpers/pub_sub.js');

const QuestionDetailView = function(container){
  this.container = container;
};

QuestionDetailView.prototype.bindEvents = function () {
  PubSub.subscribe('Educate:answer-checked', (evt) => {
    const answerChecked = evt.detail;
    console.log(evt.detail); // boolean
    this.render(answerChecked)
  })
};

QuestionDetailView.prototype.render = function (answerChecked) {
  const container = document.querySelector('#answer');

  const answer = document.createElement('p');
  answer.classList.add('answer-text');
  answer.textContent = this.checkText(answerChecked);

  container.appendChild(answer);
};

QuestionDetailView.prototype.checkText = function (answerChecked) {
  if (answerChecked) {
    return `That is the Correct answer. Here's how they rank`
  } else {
    return `That's not the Correct answer. Here's how they rank'`
  }
};


module.exports = QuestionDetailView;
