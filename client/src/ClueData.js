const data = [
  {
    phrase: 'THE RED SQUARE BIRDLARS',
    text: {
      1: 'Before 1969 when construction of the parking garage began below Red Square and the iconic red bricks were installed, this area’s official name was Central Plaza. But when one The Daily editor referred to the Central Plaza as “Red Square” in 1971, the name stuck.',
      2: 'If you visit the Red Square often enough, you’ll often see seagulls feeding on scraps left on the ground or by people. However, feeding wildlife like seagulls a diet of french fries or bread doesn’t have the same nutritional value of natural foods, which may impact the long-term survival of the birds.',
      3: 'A study from Duke University found that at least 1.4 million seagulls feed at landfills throughout North America, and produce an extra 240 tons of nitrogen and 39 tons of phosphorus into nearby reservoirs and lakes. This results in an increased amount of algae that deplete the water of oxygen and kills fish and other animals as well as lower water quality.',
      4: 'Make sure to not feed wildlife like seagulls and also take any leftovers with you! There are trash cans located across campus for you to use.',
    },
    short: 'A study from Duke University found that at least 1.4 million seagulls feed at landfills throughout North America, and produce an extra 240 tons of nitrogen and 39 tons of phosphorus into nearby reservoirs and lakes. This results in an increased amount of algae that deplete the water of oxygen and kills fish and other animals as well as lower water quality.',
    prompt: 'Find the trash cans located closest to the Suzzallo Library.',
    img: 'images/redsquare.png',
    lat: 47.656225,
    long: -122.308864,
    question: 'What are some of the impacts that 1.4 million and more seagulls feeding in North American landfills have on the environment?',
    qtype: 'radio',
    ansOptions: [
      {
        isCorrect: false,
        text: 'Higher mortality rates of seagulls in the surrounding region due to aircrafts.',
      },
      {
        isCorrect: true,
        text: 'Extra tens to hundreds of tons of nitrogen and phosphorus in nearby lakes and reservoirs.',
      },
      {
        isCorrect: false,
        text: 'Increased costs for local governments to maintain water quality levels.',
      },
    ],
  },
  {
    phrase: 'REUSE THE NEWS',
    text: {
      1: 'Housed within the Communications building is UW’s student run newspaper, The Daily. Founded in 1891, The Daily is currently one of the most awarded college newspapers. They publish online every day of the week, and put out a print paper every Monday.',
      2: 'But what happens to newspapers (or any paper) after you’re done reading them? Most would know to recycle if you can, but is that enough?',
      3: 'According to University College London and Yale researchers, if we continue to recycle paper using the same methods that rely on fossil fuels, emissions could increase by 10% if all waste paper were being recycled by 2050. However, even just moving to using renewable energy while keeping the same recycling and landfill practices would reduce emissions by 96%.',
      4: 'Just because recycling paper alone doesn’t address climate change, doesn’t mean you shouldn’t! Try reusing newspapers at home as well by composting them or even making crafts.',
    },
    short: 'According to University College London and Yale researchers, if we continue to recycle paper using the same methods that rely on fossil fuels, emissions could increase by 10% if all waste paper were being recycled by 2050.',
    prompt: 'Find the south entrance of the Communications building.',
    img: 'images/comm.png',
    lat: 47.657172,
    long: -122.305457,
    question: 'True or false: Recycling paper using current methods and energy sources will help reduce emissions and combat climate change.',
    qtype: 'radio',
    ansOptions: [
      {
        isCorrect: false,
        text: 'true',
      },
      {
        isCorrect: true,
        text: 'false',
      },
    ],
  },
  {
    phrase: 'LETTUCE COMPOST TOGETHER',
    text: {
      1: 'Built in 1949, the Husky Union Building is viewed as the “hub of student life.” The HUB is yet another building named by UW’s student newspaper, and offers various facilities including meeting spaces and the Husky Den Food Court.',
      2: 'According to research from the University of Vermont, between 2007 to 2014, U.S. consumers wasted almost one pound of food per person everyday.',
      3: 'What can we do about the food waste? A UW study by Dr. Sally Brown, a research associate professor in the School of Forest Resources, confirms that composting food waste is much better sustainably than disposing of it in the trash. Food waste shipped to landfills are buried and then decay to produce a significant amount of the greenhouse gas, methane, which is not the case when food waste is composted.',
      4: 'Check to see if your local city or county offers a curbside compost pickup service, and take advantage of it if you can. You can try aerobic (that doesn’t produce methane) composting as well!',
    },
    short: 'A UW  study showed that composting food waste is much better sustainably than disposing of it in the trash. Food waste shipped to landfills are buried and then decay to produce a significant amount of the greenhouse gas, methane, which is not the case when food waste is composted.',
    prompt: 'Find the north entrance of the HUB.',
    img: 'images/hub.png',
    lat: 47.655614,
    long: -122.305706,
    question: 'Is disposing food waste in the garbage more sustainable than composting it, why or why not?',
    qtype: 'radio',
    ansOptions: [
      {
        isCorrect: true,
        text: 'No, food waste in landfills decay and produce the greenhouse gas methane while the correct type (aerobic) of composting doesn’t.',
      },
      {
        isCorrect: false,
        text: 'Yes, food waste in landfills are buried and all gases produced are trapped, therefore there are no emissions when compared to composting.',
      },
      {
        isCorrect: false,
        text: 'Yes, although food waste in landfills produce methane, the amount of methane emissions is lower compared to aerobic composting.',
      },
    ],
  },
  {
    phrase: 'SHE SELLS PLASTIC BY THE SEA SHORE',
    text: {
      1: 'Mines Hall was built in 1921 and was renamed to Roberts Hall in 1947 after the dean of the School of Mines. Today, Roberts Hall sits above the basement building, Mueller Hall, and is home to the Department of Materials Science and Engineering.',
      2: 'In an interdisciplinary research study from May 2020 with professors from the departments of Materials Science and Engineering, Aquatic and Fishery Sciences, and Chemistry, they found that presence of microplastics in oysters of the Puget Sound is very low. Out of the ten sites where oysters were collected for analysis, only five of the sites’ oysters contained microplastics.',
      3: 'However, this doesn’t mean that microplastics don’t exist in the waters of the Puget Sound. Instead, these results are the first baseline value for microplastics in oysters from Washington. As global demand for plastic continues to rise, there are an estimated 5 trillion pieces of marine plastic!',
      4: 'So it’s very important to reduce your consumption of single use plastics.',
    },
    short: 'In an interdisciplinary UW study, they found that presence of microplastics in oysters of the Puget Sound is very low. Out of the ten sites where oysters were collected for analysis, only five of the sites’ oysters contained microplastics. These results are the first baseline value for microplastics in oysters from Washington.',
    prompt: 'Find Roberts Hall.',
    img: 'images/roberts.png',
    lat: 47.652155,
    long: -122.305191,
    question: 'Select the false statement about the research from UW on microplastics found in Puget Sound oysters.',
    qtype: 'radio',
    ansOptions: [
      {
        isCorrect: false,
        text: 'Five out of the ten sites examined had oysters that contained microplastics.',
      },
      {
        isCorrect: true,
        text: 'Oysters in the Puget Sound contained an average amount of microplastics in them.',
      },
      {
        isCorrect: false,
        text: 'The research results serve as a first baseline value for microplastics in oysters from Washington.',
      },
    ],
  },
  {
    phrase: 'A DAY IN THE LEAF',
    text: {
      1: 'The UW Medicinal Herb Garden was founded in 1911 for cultivating and researching medicinal plants. Although it’s not used for research today, the herb garden boasts about 1000 species of plants.',
      2: 'Medicinal plants are important sources of new drugs, about 118 of the top 150 prescription drugs in the U.S. are based on natural sources! However, of the 50,000 to 80,000 flowering plants species, 15,000 are on the brink of extinction due to overharvesting and habitat destruction from increased human population and consumption.',
      3: 'Although it’s unlikely you’ll start your own medicinal herb garden in your backyard, you can still start a small vegetable one! From a 2016 UC Santa Barbara study, researchers found that for each kilo of homegrown vegetables, greenhouse gas emissions can be cut by two kilograms when compared to the store-bought counterpart.',
      4: 'Perhaps it’s time to see if you have a green thumb!',
    },
    short: 'From a 2016 UC Santa Barbara study, researchers found that for each kilo of homegrown vegetables, greenhouse gas emissions can be cut by two kilograms when compared to the store-bought counterpart.',
    prompt: 'Find the monkey statues in the UW Medicinal Herb Garden.',
    img: 'images/medicinal.png',
    lat: 47.653223,
    long: 122.307682,
    question: 'Select the true statement about vegetable gardens.',
    qtype: 'radio',
    ansOptions: [
      {
        isCorrect: false,
        text: 'Vegetable gardens always do not yield enough produce to be able to contribute any significant factor to reducing greenhouse gas emissions.',
      },
      {
        isCorrect: false,
        text: 'The same amount of store-bought vegetables produce less emissions in general than homegrown vegetables.',
      },
      {
        isCorrect: true,
        text: 'For each kilo of homegrown vegetables, greenhouse gas emissions can be cut by two kilograms when compared to the store-bought counterpart.',
      },
    ],
  },
  {
    phrase: 'A PEAK EXPERIENCE',
    text: {
      1: 'Completed in 2018, the Life Sciences Building is the newest home to UW’s Biology department. It features a 20,000 square foot greenhouse, and vertical solar fins on the south side windows to provide shade and generate enough electricity to light up 12,400 square feet of office space.',
      2: 'A research study including UW Biology’s Janneke Hille Ris Lambers found that snow in subalpine meadows like Mount Rainier will melt months earlier than due to climate change. As a result, the iconic wildflower bloom season on Mount Rainier also arrives earlier, creating a mismatch between peak blooming and tourists visiting.',
      3: 'Earlier snow melts not only impact tourism, but also the ecosystems as well. Another one of Lambers’ studies found that the plant species on Mount Rainier bloomed in a different order than usual in 2015, which may have uncertain ecological implications in the future.',
      4: 'Although there isn’t just one thing you can do to completely stop climate change, you can incorporate more eco-friendly behaviors into your life from all of the suggestions you’ve seen thus far. Supporting local green initiatives, looking into using more renewable energy at home, or lowering your household carbon footprint can all make a difference!',
    },
    short: 'A UW research study found that snow in subalpine meadows like Mount Rainier will melt months earlier than due to climate change. As a result, the wildflower bloom season on Mount Rainier also arrives earlier, creating a mismatch between peak blooming and tourists visiting.',
    prompt: 'Find the main entrance of the Life Sciences Building.',
    img: 'images/lifesciences.png',
    lat: 47.652460,
    long: -122.310232,
    question: 'Why are earlier snow melts due to climate change on Mount Rainier a cause for concern?',
    qtype: 'radio',
    ansOptions: [
      {
        isCorrect: true,
        text: 'Earlier snow melts lead to Mount Rainier’s wildflowers blooming earlier, which also creates a mismatch between peak tourism and wildflower blooming.',
      },
      {
        isCorrect: false,
        text: 'They are not a cause for concern, earlier snow melts are normal and have not changed the ecosystem.',
      },
      {
        isCorrect: false,
        text: 'Snow melts lead to too much freshwater going into the oceans, which disrupts the PH balance and affects sea life.',
      },
    ],
  },
  {
    phrase: 'PAINT THAT TAINTS',
    text: {
      1: 'The Henry Art Gallery is Washington’s first art museum, founded in 1926 and currently aims to display work from emerging artists that pushes the boundaries of contemporary art and culture.',
      2: 'Paint is likely the first medium you would think of when the word “art” is mentioned, but what are the environmental impacts of various types of paint? According to a recent study published a few months ago by the University of Oldenburg, ship coatings where plastics are used as binder in acrylic paints or epoxy resins introduce microplastics into the water.',
      3: 'At the individual level, it’s still important to safely use and dispose of your paints (be it latex to acrylic paints) for human health, wildlife, fish, and groundwater. King County recommends drying out water-based paints and dispose of the dry paint in trash.',
      4: 'Make sure to check your local government’s guidelines for disposing hazardous waste like paint, and if they have any recycling programs for paint!',
    },
    short: 'It’s important to safely use and dispose of your paints (be it latex to acrylic paints) for human health, wildlife, fish, and groundwater. King County recommends drying out water-based paints and dispose of the dry paint in the trash.',
    prompt: 'Find the Henry Art Gallery.',
    img: 'images/henry.png',
    lat: 47.656193,
    long: -122.311474,
    question: 'What is the correct way to dispose of water-based paints according to King County guidelines?',
    qtype: 'radio',
    ansOptions: [
      {
        isCorrect: false,
        text: 'It is safe to dump all water-based paints down the drain.',
      },
      {
        isCorrect: true,
        text: 'Dry out any water-based paint and discard the dry paint in the trash.',
      },
      {
        isCorrect: false,
        text: 'Throwing all (not yet dried) water-based paint in the trash is safe.',
      },
    ],
  },
  {
    phrase: 'DEWEY DECIMATE CONSUMER WASTE',
    text: {
      1: 'The University of Washington Law Library was renamed to Marian Gould Gallagher Law Library in 1981. Gallagher worked as the library’s director for 37 years, and was praised for “putting together one of the great law schools in the nation” by the then dean of UW.',
      2: 'Although this library consists of what you expect as normal library materials, you can borrow less conventional items from a Library of Things (LoT). LoT is a collection of loanable items that expands on what’s traditionally borrowed from libraries, and objects can range from lawn mowers to musical instruments.',
      3: 'From a case study from the University of Southampton, LoT London calculated that their lending and repair services reduce 11 tons of waste and 60 tons of carbon emissions each year. In addition, 60% of surveyed borrowers said they were now more inclined to recycle and repair items, which suggests that engaging with a LoT can influence people into other types of sustainable behaviors.',
      4: 'To reduce your consumption and save a little bit of money, consider searching for a Library of Things near your home to borrow from the next time you think you need to buy equipment for a project!',
    },
    short: 'Library of Things London calculated that their lending and repair services reduce 11 tons of waste and 60 tons of carbon emissions each year. In addition, 60% of surveyed borrowers said they were now more inclined to recycle and repair items, which suggests that engaging with a LoT can influence people into other types of sustainable behaviors.',
    prompt: 'Find the Gallagher Law Library glass pyramids.',
    img: 'images/law.png',
    lat: 47.659244,
    long: -122.310166,
    question: 'What is not a possible result of a Library of Things system?',
    qtype: 'radio',
    ansOptions: [
      {
        isCorrect: true,
        text: 'Library of Things systems can always generate additional revenue for green initiatives.',
      },
      {
        isCorrect: false,
        text: 'Decreased waste and carbon emissions.',
      },
      {
        isCorrect: false,
        text: 'Using a Library of Things system can encourage borrowers to engage in other sustainable behaviors as well.',
      },
    ],
  },
];

export default data;
