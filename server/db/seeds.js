use bbc;

db.dropDatabase();

db.global.insertMany([
  {
    subject: "Geography",
    title: "The effects of global warming",
    intro: "Although the temperature increases have been gradual, most, but not all, scientists agree that the climate is getting gradually warmer. This is called global warming. Most, but not all, scientists lay the blame for this on human activities increasing the amount of carbon dioxide in the atmosphere. Global warming could cause climate change and extreme weather conditions in some areas.",
    topic_image: "../images/Pollution.png",
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
      image: "../images/question-image.png",
      answer_image: "../images/answer-image.png",
      question_text: "Which country produces the most Carbon Dioxide?",
      correct_answer: "China",
      correct_order:[
      "China",
      "United States of America",
       "India",
       "Russia"
     ],
     further_info: "China, since 2006, keeps emitting more CO2 than any other country. China ratified the Kyoto Protocol as a non-Annex B party without binding targets, and ratified the Paris Agreement to fight climate change. As the world’s largest coal producer and consumer country, China worked hard to change energy structure and experienced a decrease in coal consumption since 2013 to 2016. However, China, the United States and India, the three biggest coal users, have increased coal mining in 2017. The Chinese government has implemented several policies to control coal consumption, and boosted the usage of natural gas and electricity. Looking ahead, the construction and manufacturing industries of China will give way to the service industry, and the Chinese government will not set a higher goal for economic growth in 2018, thus the coal consumption may not experience continuous growth in the next few years.",
      answers: [
        "United States of America",
        "China",
        "Russia",
        "India"
      ]

    }
  },

  {
    subject: "Geography",
    title: "Renewable Energy - the Solution?",
    intro: "Renewable energy is sustainable and will never run out. They provide clean energy because they are non-pollutant and non-contributor to greenhouse effects and global warming. Renewable energy facilities generally require less maintenance than traditional generators. Their fuel being derived from natural and available resources reduces the costs of operation.",
    topic_image:"../images/Renewables.png",
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
      image: "../images/question-image.png",
      answer_image: "../images/answer-image.png",
      question_text: "Which Region is the largest investor in renewable energies?",
      correct_answer: "China",
      correct_order:[
      "China",
      "Europe",
       "Asia & Oceania",
       "United States of America"
     ],
     further_info: "China, the world’s largest emitter of greenhouse gases, is determined to rebalance its energy mix, and incorporate more clean energy. That determination is reflected in the money it put into renewable energy last year, dwarfing spending by the next biggest investor, the US. Last year nearly half of the world’s new renewable energy investment of $279.8 billion (pdf, p.11) came from China, according to a report published April 5 by Bloomberg New Energy Finance, and the sustainable energy finance center run by the United Nations Environment Program and the Frankfurt School of Finance and Management. China’s investment in renewable energy—excluding large hydro projects—rose 30% compared with 2016, and was more than three times of that of the US, whose investment in the sector dropped 6% from 2016 to $40.5 billion last year.",
      answers: [
        "Europe",
        "United States of America",
        "China",
        "Asia & Oceania"
      ]
    }

  }

]);
