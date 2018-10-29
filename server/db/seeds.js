use bbc;

db.dropDatabase();

db.global.insertMany([
  {
    title: "The effects of global warming",
    intro: "Although the temperature increases have been gradual, most, but not all, scientists agree that the climate is getting gradually warmer. This is called global warming. Most, but not all, scientists lay the blame for this on human activities increasing the amount of carbon dioxide in the atmosphere. Global warming could cause climate change and extreme weather conditions in some areas.",
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
      question_text: "Which country produces the most Carbon Dioxide? (source: uscusa)",
      correct_answer: "China",
      answers: [
        "Unites States of America",
        "China",
        "Russia",
        "India"
      ]

    }
  },

  {
    title: "Renewable Energy - the Solution?",
    intro: "Renewable energy is sustainable and will never run out. They provide clean energy because they are non-pollutant and non-contributor to greenhouse effects and global warming. Renewable energy facilities generally require less maintenance than traditional generators. Their fuel being derived from natural and available resources reduces the costs of operation.",
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
      question_text: "Which Region is the largest investor in renewable energies? (source: ourworldindata.org)",
      correct_answer: "China",
      answers: [
        "Europe",
        "United States of America",
        "China",
        "Asia & Oceania"
      ]
    }

  }

]);
