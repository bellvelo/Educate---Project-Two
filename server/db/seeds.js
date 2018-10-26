use bbc;

db.dropDatabase();

db.global.insertMany([
  {
    title: "The effects of global warming",
    intro: "problem-intro",
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
      incorrect_answers: [
        "wrong1",
        "wrong2",
        "wrong3"
      ]

    }
  },

    {
      title: "There are solutions. Find out how!",
      intro: "solution-intro",
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
          incorrect_answers: [
            "wrong1",
            "wrong2",
            "wrong3"
          ]}

    }
      ]);
