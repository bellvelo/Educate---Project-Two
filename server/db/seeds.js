use bbc;

db.dropDatabase();

db.global.insertMany([
  {
    subject: "Geography",
    link: "5bd5cbb4b7944d7ec3b265db",
    title: "The effects of global warming",
    intro: {
      text: "Although the temperature increases have been gradual, most, but not all, scientists agree that the climate is getting gradually warmer. This is called global warming. Most scientists lay the blame for this on human activities increasing the amount of carbon dioxide in the atmosphere. Global warming could cause climate change and extreme weather conditions in some areas.",
      header: "What is global warming?"
    },

    middle_para: {
      text: "When fossil fuels are burnt - by industry, in power stations and in vehicles and planes - the gases enter the atmosphere. Although these gasses have always been present in the world's atmosphere, their concentration is gradually increasing as more and more fossil fuels are burnt. Scientists believe that the build-up of these so-called greenhouse gases in the atmosphere acts like a blanket or greenhouse around the planet; heat is trapped inside the Earth's atmosphere. This is the greenhouse effect, and the resulting increase in global temperatures is called global warming.",
    header: "The greenhouse effect"},

    end_para: {
      text: "Exposure to Smog (a form of air pollution) poses a threat to the health of Chinese citizens. A study from 2012 shows fine particles in the air, which cause respiratory and cardiovascular diseases are one of the key pollutants that are accounted for a large fraction of damage on the health of Chinese citizens.",
    header: "Air Pollution"},
    topic_image: "../images/Pollution.png",
    info_points: [
      "What is global warming",
      "The main causes of global warming",
      "What effect does it have on you ",
      "Test your knowledge"
    ],
    images: {
      image_one: {
        image: "../images/Ice-caps.png",
        text: "The Ice Caps are like the canary in the gold mine. They tell us when it’s time to start worrying about Global Warming."
      },
      image_two: {
        image: "../images/Smog.png",
        text: "In the worst affected regions in China, smog can even lead to lung cancer and premature death"
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

    },
    chart_data: {
    chart_info: [
      ['Country', '1990', '2000', '2010'],
      ['India', 1000000, 4000000, 6000000],
      ['China', 5000000, 4600000, 1150000],
      ['USA', 2000000, 6000000, 10000000],
      ['Russia', 900000, 1700000, 3500000]
    ],
    chart_title: "Airborne CO2 levels",
    chart_subtitle: "Data range: 1990-2010"
  }
  },

  {
    subject: "Geography",
    link: "5bd5cbb4b7944d7ec3b265da",
    title: "Renewable Energy - the Solution?",
    intro: {
      text: "Renewable energies are sustainable and will never run out. They provide clean energy because they are non-pollutant and non-contributor to greenhouse effects and global warming. Renewable energy facilities generally require less maintenance than traditional generators. Their fuel being derived from natural and available resources reduces the costs of operation.",
      header: "What is renewable energy"
    },
    topic_image:"../images/Renewables.png",
    middle_para: {
      text: "Wind Energy captures the natural wind in our environment and converts the air’s motion into mechanical energy. In general, wind speeds are higher near the coast and offshore since there are fewer objects like vegetation, mountains and buildings to slow them down. The mechanism used to convert air motion into electricity is referred to as a turbine. A turbine is a large structure with several spinning blades. These blades are connected to an electro-magnetic generator that generates electricity when the wind causes the blades to spin.",
    header: "Wind power explained"},

    end_para: {
      text: "Most people are familiar with solar panels, found on things like spacecraft, rooftops, and handheld calculators.  When sunlight hits the cells, it knocks electrons loose from their atoms. As the electrons flow through the cell, they generate electricity. On a much larger scale, solar-thermal power plants employ various techniques to concentrate the sun’s energy as a heat source. The heat is then used to boil water to drive a steam turbine that generates electricity in much the same fashion as coal and nuclear power plants, supplying electricity for thousands of people.",
    header: "Solar Energy"},
    info_points: [
      "What is renewable energy? ",
      "How we can harness renewable energy",
      "What are the benefits and draw backs ",
      "Growth of renewable energies"
    ],
    images: {
      image_one: {
        image: "../images/Wind-img.png",
        text: "An average turbine would produce the same amount of electric energy as that used by almost 332 households over a year."
      },
      image_two: {
        image: "../images/Solar-img.png",
        text: "Solar power is arguably the cleanest, most reliable form of renewable energy available, and it can be used in several forms to help power your home or business."
      }
    },
    question: {
      image: "../images/Renewable-un-selected.png",
      answer_image: "../images/Renewable-selected.png",
      question_text: "Which Region is the largest investor in renewable energies?",
      correct_answer: "China",
      correct_order:[
      "China",
      "Europe",
       "Asia & Oceania",
       "United States of America"
     ],
     further_info: "China, the world’s largest emitter of greenhouse gases, is determined to rebalance its energy mix, and incorporate more clean energy. That determination is reflected in the money it put into renewable energy last year, dwarfing spending by the next biggest investor, the US. Last year nearly half of the world’s new renewable energy investment of $279.8 billion came from China, according to a report published April 5 by Bloomberg New Energy Finance, and the sustainable energy finance center run by the United Nations Environment Program and the Frankfurt School of Finance and Management. China’s investment in renewable energy—excluding large hydro projects—rose 30% compared with 2016, and was more than three times of that of the US, whose investment in the sector dropped 6% from 2016 to $40.5 billion last year.",
      answers: [
        "Europe",
        "United States of America",
        "China",
        "Asia & Oceania"
      ]
    },
    chart_data: {
    chart_info: [
      ['Country', '1990', '2000', '2010'],
      ['India', 1000000, 4000000, 6000000],
      ['China', 5000000, 7100000, 11500000],
      ['USA', 2000000, 6000000, 10000000],
      ['Russia', 900000, 1700000, 3500000]
    ],
    chart_title: "Investment in Renewable Energies",
    chart_subtitle: "Data range: 1990-2010"
  }

  }

]);
