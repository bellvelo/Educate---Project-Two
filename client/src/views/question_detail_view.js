const PubSub = require('../helpers/pub_sub.js');

const QuestionDetailView = function(container){
  this.container = container;
};

QuestionDetailView.prototype.bindEvents = function () {
  PubSub.subscribe('Educate:answer-checked', (evt) => {
    const answerData = evt.detail;
    console.dir(evt.detail); // object.
    this.render(answerData);
  })
};

QuestionDetailView.prototype.render = function (answerData) {

  const container = document.querySelector('.question-container');

  const questionImage = document.createElement('img');
  questionImage.src = answerData.topic.question.answer_image
  questionImage.classList.add("question-map")

  const answerContainer = document.createElement('div');
  answerContainer.classList.add('answer');

  const answerText = document.createElement('h4');
  answerText.classList.add('answer_text');
  answerText.textContent = this.checkText(answerData);
  answerContainer.appendChild(answerText);

  const optionsList = document.createElement('ul');
  optionsList.classList.add('options-listed');


  answerData.topic.question.correct_order.forEach((option) => {
    const result = document.createElement('li');
    result.classList.add('question-option');
    result.value = option;
    result.textContent = option;
    optionsList.appendChild(result);
});
  answerContainer.appendChild(optionsList);

  const furtherInfo = document.createElement('p');
  furtherInfo.classList.add('further-info');
  furtherInfo.textContent = answerData.topic.question.further_info

  answerContainer.appendChild(furtherInfo);
  container.appendChild(questionImage);
  container.appendChild(answerContainer);


};
QuestionDetailView.prototype.checkText = function (answerData) {
  if (answerData.checked) {
    return `That is the Correct answer. Here's how they rank:`
  } else {
    return `That's not the Correct answer. Here's how they rank:`
  }
};


module.exports = QuestionDetailView;
