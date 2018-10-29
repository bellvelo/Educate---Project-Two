const PubSub = require('../helpers/pub_sub.js');


const QuestionView = function(container){
  this.container = container;
};

QuestionView.prototype.render = function (topic) {

  const container = document.createElement('div');
  container.classList.add('question-container');

  const question = document.createElement('h4');
  question.classList.add('question');
  question.textContent = topic.question.question_text;
  container.appendChild(question);

  const optionContainer = document.createElement('div');
  optionContainer.classList.add('options');
  this.renderOptions(topic, container);

  this.container.appendChild(container);
};

QuestionView.prototype.renderOptions = function (topic, container) {

  topic.question.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.classList.add('topic-button');
    button.value = answer;
    container.appendChild(button);

    button.addEventListener('click', (evt) => {
      const questionData = {};
      questionData.correct_answer = topic.question.correct_answer;
      questionData.selected_answer = event.target.value;
      PubSub.publish('QuestionView:answer-button-clicked', questionData);
      console.log(event.target.value);
    });
    return button;

  });
};
module.exports = QuestionView;
