use bbc;

db.dropDatabase();

db.global.insertMany([
  {
    title: "The effects of global warming",
    intro: "problem-intro",
    info_points: [
        "What is global warming",
        "The main causes of global warming",
        "What effect does it have on you ",
        "Test your knowledge"
    ],
    carousel: {
      carousel_one: {
        image: "url",
        text: "text1"
      },
      carousel_two: {
        image: "url",
        text: "text1"
      },
      carousel_three: {
        image: "url",
        text: "text1"
      }
    },
    question: {
      question_text: "problem-question-text",
      correct_answer: "correct",
      answers: [
        "Wrong1",
        "Wrong2",
        "wrong3",
        "correct"
      ]

    }
  },

  {
    title: "There are solutions. Find out how!",
    intro: "solution-intro",
    info_points: [
        "Is renewable energy the future? ",
        "How we can all help",
        "Learn from the past",
        "Calculate your annual carbon footprint"
    ],
    carousel: {
      carousel_one: {
        image: "url",
        text: "text1"
      },
      carousel_two: {
        image: "url",
        text: "text1"
      },
      carousel_three: {
        image: "url",
        text: "text1"
      },
    },
    question: {
      question_text: "problem-question-text",
      correct_answer: "correct",
      answers: [
        "wrong1",
        "wrong2",
        "wrong3",
        "correct"
      ]
    }

  }
]);
