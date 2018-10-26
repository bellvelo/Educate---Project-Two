const Educate = require('./models/educate')
const TopicListView = require('./views/topic_list_view.js');


document.addEventListener('DOMContentLoaded', () => {

const topicsContainer = document.querySelector('#topics-container');
const topicListView = new TopicListView(topicsContainer);
topicListView.bindEvents();

const educateUrl = 'http://localhost:3000/api/bbc';
const educate = new Educate(educateUrl);
educate.getData();

});
