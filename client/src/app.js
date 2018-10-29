const Educate = require('./models/educate')
const TopicListView = require('./views/topic_list_view.js');
const ChosenTopicView = require('./views/chosen_topic_view.js');
const QuestionDetailView = require('./views/question_detail_view');

document.addEventListener('DOMContentLoaded', () => {

const answerContainer = document.querySelector('#answer');
const questionDetailView = new QuestionDetailView(answerContainer);
questionDetailView.bindEvents();

const topicsContainer = document.querySelector('#topics-container');
const topicListView = new TopicListView(topicsContainer);
topicListView.bindEvents();

const mainContainer = document.querySelector('#center-wrapper');
const chosenTopicView = new ChosenTopicView(mainContainer);
chosenTopicView.bindEvents();

const educateUrl = 'http://localhost:3000/api/bbc';
const educate = new Educate(educateUrl);
educate.getData();
educate.bindEvents();

});
