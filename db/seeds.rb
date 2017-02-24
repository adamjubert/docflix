# # # This file should contain all the record creation needed to seed the database with its default values.
# # # The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
# # #
# # # Examples:
# # #
# # #   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
# # #   Mayor.create(name: 'Emanuel', city: cities.first)
# #
# #
User.destroy_all
User.create!(email: 'guest@docflix.tech', password: 'testing', fname: 'Guest', lname: 'Smith')
#
Serie.destroy_all
Episode.destroy_all
#
Genre.destroy_all
nature =        Genre.create!(name: 'Nature')
social =        Genre.create!(name: 'Social & Cultural')
historical =    Genre.create!(name: 'Historical')
travel =        Genre.create!(name: 'Travel')
sports =        Genre.create!(name: 'Sports')
# #
# #
SeriesGenre.destroy_all
#
########################################
############  PLANET EARTH  ############
########################################

planet_earth = Serie.create!(
  name: 'Planet Earth',
  year: 2006,
  author: 'BBC',
  mpaa_rating: 'PG',
  description: 'This landmark series transports nature lovers from the Himalayan Mountains to the depths of the ocean and everywhere in between.',
  thumbnail: File.open("../docflix-media/series/planet-earth/logo.png")
)
SeriesGenre.create!(series_id: planet_earth.id, genre_id: nature.id)

### Episodes
Episode.create!(
  name: 'From Pole to Pole',
  description: 'Take a journey around the globe and see the effect of gradual climatic change and seasonal transitions en route.',
  runtime: 2,
  episode_num: 1,
  series_id: planet_earth.id,
  thumbnail: File.open('../docflix-media/series/planet-earth/episodes/01pole-to-pole.png'),
  video: File.open('../docflix-media/series/planet-earth/episodes/01pole-to-pole.mp4')
)
Episode.create!(
  name: 'Mountains',
  description: 'The Andes have the most volatile weather and guanacos are shown enduring a flash blizzard, along with an exceptional group sighting of the normally solitary puma. The Alpine summits are always snow-covered, apart from that of the Matterhorn, which is too sheer to allow it to settle.',
  runtime: 1,
  episode_num: 2,
  series_id: planet_earth.id,
  thumbnail: File.open('../docflix-media/series/planet-earth/episodes/02mountains.png'),
  video: File.open('../docflix-media/series/planet-earth/episodes/02mountains.mp4')
)
Episode.create!(
  name: 'Islands',
  description: 'Remote islands offer sanctuary for some of the planet\'s strangest and rarest creatures. ',
  runtime: 2,
  episode_num: 3,
  series_id: planet_earth.id,
  thumbnail: File.open('../docflix-media/series/planet-earth/episodes/03islands.png'),
  video: File.open('../docflix-media/series/planet-earth/episodes/03islands.mp4')
)
Episode.create!(
  name: 'Birds',
  description: 'In the Gulf on the coast of Bahrain, 100,000 Socotra cormorants are settling down to nest. In the intense heat, the only nutrition to be had comes from the wind blowing in from the ocean, making the barren wasteland a fertile place to raise their young.',
  runtime: 1,
  episode_num: 4,
  series_id: planet_earth.id,
  thumbnail: File.open('../docflix-media/series/planet-earth/episodes/04birds.png'),
  video: File.open('../docflix-media/series/planet-earth/episodes/04birds.mp4')
)
Episode.create!(
  name: 'Ice Worlds',
  description: 'Antarctica contains 90% of the world\'s ice, and stays largely deserted until the spring, when visitors arrive to harvest its waters. Snow petrels take their place on nunataks and begin to court, but are preyed on by south polar skuas.',
  runtime: 2,
  episode_num: 5,
  series_id: planet_earth.id,
  thumbnail: File.open('../docflix-media/series/planet-earth/episodes/05arctic.png'),
  video: File.open('../docflix-media/series/planet-earth/episodes/05arctic.mp4')
)
Episode.create!(
  name: 'Deserts',
  description: 'Camels, lions, kangaroos, and a host of other animals live in the harsh environment that covers one-third of the land on Earth: the deserts. ',
  runtime: 2,
  episode_num: 6,
  series_id: planet_earth.id,
  thumbnail: File.open('../docflix-media/series/planet-earth/episodes/06deserts.png'),
  video: File.open('../docflix-media/series/planet-earth/episodes/06deserts.mp4')
)
Episode.create!(
  name: 'Eagles',
  description: ' In the harsh Alpine winter, Golden eagles must fight to gain access to food.',
  runtime: 2,
  episode_num: 7,
  series_id: planet_earth.id,
  thumbnail: File.open('../docflix-media/series/planet-earth/episodes/07eagles.png'),
  video: File.open('../docflix-media/series/planet-earth/episodes/07eagles.mp4')
)
Episode.create!(
  name: 'Iguanas',
  description: 'In order to survive, Iguanas have adapted to tackle the rough seas in this harsh but wildlife rich environment.',
  runtime: 1,
  episode_num: 8,
  series_id: planet_earth.id,
  thumbnail: File.open('../docflix-media/series/planet-earth/episodes/08iguanas.png'),
  video: File.open('../docflix-media/series/planet-earth/episodes/08iguanas.mp4')
)
Episode.create!(
  name: 'Snakes',
  description: 'For racer snakes, the emergence of marine iguana hatchlings is a feeding bonanza.',
  runtime: 2,
  episode_num: 9,
  series_id: planet_earth.id,
  thumbnail: File.open('../docflix-media/series/planet-earth/episodes/09snakes.png'),
  video: File.open('../docflix-media/series/planet-earth/episodes/09snakes.mp4')
)


########################################
############  LATIN AMERICA  ############
########################################
latin_america = Serie.create!(
  name: 'Wildest Latin America',
  year: 2013,
  author: 'Discovery Channel',
  mpaa_rating: 'PG',
  description: 'Discovery Channel embarks on a thrilling exploration of the breath-taking South American continent. Witness the extraordinary stories of animals and people in this land of extremes',
  thumbnail: File.open("../docflix-media/series/latin-america/logo.png")
)
SeriesGenre.create!(series_id: latin_america.id, genre_id: nature.id)
Episode.create!(
  name: latin_america.name,
  description: latin_america.description,
  runtime: 1,
  episode_num: 1,
  series_id: latin_america.id,
  thumbnail: File.open('../docflix-media/series/latin-america/ep-logo.png'),
  video: File.open('../docflix-media/series/latin-america/video.mp4')
)

########################################
############  DEATH VALLEY  ############
########################################
death_valley = Serie.create!(
  name: 'Death Valley National Park',
  year: 2016,
  author: '4K Relaxation Channel',
  mpaa_rating: 'G',
  description: 'Enjoy this truly remarkable National Park that attracts millions of tourists. Take delight in a unique phenomenon, when Death Valley is transformed and when it comes to life, when thousands of plants color the intermountain basin.',
  thumbnail: File.open("../docflix-media/series/death-valley/logo.png")
)
SeriesGenre.create!(series_id: death_valley.id, genre_id: nature.id)
Episode.create!(
  name: death_valley.name,
  description: death_valley.description,
  runtime: 2,
  episode_num: 1,
  series_id: death_valley.id,
  thumbnail: File.open('../docflix-media/series/death-valley/ep-logo.png'),
  video: File.open('../docflix-media/series/death-valley/video.mp4')
)


########################################
############  FROZEN PLANET  ############
########################################
frozen_planet = Serie.create!(
  name: 'Frozen Planet',
  year: 2012,
  author: 'BBC',
  mpaa_rating: 'PG',
  description: 'The Arctic and Antarctic remain the greatest wildernesses on Earth. The scale and beauty of the scenery and the sheer power of the elements are unmatched anywhere else on our planet. And these vast, frigid landscapes are surprising rich with life. ',
  thumbnail: File.open("../docflix-media/series/frozen-planet/logo.png")
)
SeriesGenre.create!(series_id: frozen_planet.id, genre_id: nature.id)
Episode.create!(
  name: frozen_planet.name,
  description: frozen_planet.description,
  runtime: 2,
  episode_num: 1,
  series_id: frozen_planet.id,
  thumbnail: File.open('../docflix-media/series/frozen-planet/ep-logo.png'),
  video: File.open('../docflix-media/series/frozen-planet/video.mp4')
)



########################################
########  AMAZING ANIMAL HOMES  ########
########################################
amazing_homes = Serie.create!(
  name: 'Amazing Animal Homes',
  year: 2016,
  author: 'BBC',
  mpaa_rating: 'G',
  description: 'We begin with a museum collection of nests and branch out to scenes in the wild all over the world, where birds arrive at diverse nesting grounds to collect, compete for, reject, steal and begin to build with carefully selected materials, crafting homes for the all-important task of protecting their eggs and raising their young.',
  thumbnail: File.open("../docflix-media/series/amazing-homes/logo.png")
)
SeriesGenre.create!(series_id: amazing_homes.id, genre_id: nature.id)
Episode.create!(
  name: amazing_homes.name,
  description: amazing_homes.description,
  runtime: 1,
  episode_num: 1,
  series_id: amazing_homes.id,
  thumbnail: File.open('../docflix-media/series/amazing-homes/ep-logo.png'),
  video: File.open('../docflix-media/series/amazing-homes/video.mp4')
)


########################################
########  WILD CHINA  ########
########################################
wild_china = Serie.create!(
  name: 'Wild China',
  year: 2011,
  author: 'BBC',
  mpaa_rating: 'PG',
  description: 'The capital of Tibet is Lhasa, but the country is better known for the mountain range on it\'s southern border: The Himalayas.',
  thumbnail: File.open("../docflix-media/series/wild-china/logo.png")
)
SeriesGenre.create!(series_id: wild_china.id, genre_id: nature.id)
Episode.create!(
  name: wild_china.name,
  description: wild_china.description,
  runtime: 3,
  episode_num: 1,
  series_id: wild_china.id,
  thumbnail: File.open('../docflix-media/series/wild-china/ep-logo.png'),
  video: File.open('../docflix-media/series/wild-china/video.mp4')
)

########################################
########  OCEAN GIANTS  ########
########################################
ocean_giants = Serie.create!(
  name: 'Ocean Giants 3D',
  year: 2012,
  author: '3D Media',
  mpaa_rating: 'PG',
  description: 'Whales and dolphins remain a constant source of fascination to us. But how much do we really know about them? Whales and dolphins, known as cetaceans, may appear to be totally alien to us -- but with their mental ability, group communication and the recent discovery that dolphins have individual names, they are closer to us than we ever imagined. ',
  thumbnail: File.open("../docflix-media/series/ocean-giants/logo.png")
)
SeriesGenre.create!(series_id: ocean_giants.id, genre_id: nature.id)
Episode.create!(
  name: ocean_giants.name,
  description: ocean_giants.description,
  runtime: 1,
  episode_num: 1,
  series_id: ocean_giants.id,
  thumbnail: File.open('../docflix-media/series/ocean-giants/ep-logo.png'),
  video: File.open('../docflix-media/series/ocean-giants/video.mp4')
)

########################################
############  TERRA  #############
########################################
terra = Serie.create!(
  name: 'Terra',
  year: 2012,
  author: 'OMEGA',
  mpaa_rating: 'PG',
  description: 'Animals are the refugees we often forget. This documentary examines the human relationship with other species on Earth. With a global population of 7 billion people, let’s have the courage to change the way we share our planet. ',
  thumbnail: File.open("../docflix-media/series/terra/logo.png")
)
SeriesGenre.create!(series_id: terra.id, genre_id: nature.id)
Episode.create!(
  name: terra.name,
  description: terra.description,
  runtime: 2,
  episode_num: 1,
  series_id: terra.id,
  thumbnail: File.open('../docflix-media/series/terra/ep-logo.png'),
  video: File.open('../docflix-media/series/terra/video.mp4')
)


########################################################################


########################################
############  VICE  ############
########################################

vice = Serie.create!(
  name: 'Vice',
  year: 2016,
  author: 'VICE News',
  mpaa_rating: 'MA',
  description: 'VICE News is an international vnews channel created by and for a connected generation. Our documentaries and original news series bring you an unvarnished look at some of the most important events of our time, and shine a light on underreported stories around the globe.',
  thumbnail: File.open("../docflix-media/series/vice/logo.png")
)
SeriesGenre.create!(series_id: vice.id, genre_id: social.id)

### Episodes
Episode.create!(
  name: 'Fighting ISIS',
  description: 'In 2014, Islamic State militants swept into Western Iraq\'s Anbar Province, overrunning Iraqi security forces, enslaving minorities, and causing thousands to flee for their lives. ',
  runtime: 2,
  episode_num: 1,
  series_id: vice.id,
  thumbnail: File.open('../docflix-media/series/vice/episodes/01.png'),
  video: File.open('../docflix-media/series/vice/episodes/01.mp4')
)
Episode.create!(
  name: 'Fixing the System',
  description: 'In July 2015, Barack Obama became the first sitting president to visit a federal prison. He invited VICE along to film the historic event for part of a documentary, Fixing the System, which investigated America\'s broken criminal justice system.',
  runtime: 2,
  episode_num: 1,
  series_id: vice.id,
  thumbnail: File.open('../docflix-media/series/vice/episodes/02.png'),
  video: File.open('../docflix-media/series/vice/episodes/02.mp4')
)
Episode.create!(
  name: 'A House Divided',
  description: 'In the first post-election look at the political climate that gave rise to Donald Trump, President Obama speaks to VICE founder Shane Smith about the fierce partisan fighting that dominated his presidency and divided the country.',
  runtime: 1,
  episode_num: 1,
  series_id: vice.id,
  thumbnail: File.open('../docflix-media/series/vice/episodes/03.png'),
  video: File.open('../docflix-media/series/vice/episodes/03.mp4')
)
Episode.create!(
  name: 'Killing Cancer',
  description: 'Vice goes inside the world’s most cutting-edge cancer research labs to follow the pioneering doctors and researchers who are changing the face of modern-day medicine and meet some of the cancer survivors who have already been saved by this revolutionary medical breakthrough. ',
  runtime: 1,
  episode_num: 1,
  series_id: vice.id,
  thumbnail: File.open('../docflix-media/series/vice/episodes/04.png'),
  video: File.open('../docflix-media/series/vice/episodes/04.mp4')
)

########################################
############  FOOD, INC  ############
########################################

food_inc = Serie.create!(
  name: 'Food, Inc.',
  year: 2011,
  author: 'Robert Kenner',
  mpaa_rating: 'PG',
  description: 'Director Robert Kenner\'s provocative, Oscar-nominated documentary looks at the food industry\'s harmful effects on human health and the environment',
  thumbnail: File.open("../docflix-media/series/food-inc/logo.png")
)
SeriesGenre.create!(series_id: food_inc.id, genre_id: social.id)
Episode.create!(
  name: food_inc.name,
  description: food_inc.description,
  runtime: 3,
  episode_num: 1,
  series_id: food_inc.id,
  thumbnail: File.open('../docflix-media/series/food-inc/ep-logo.png'),
  video: File.open('../docflix-media/series/food-inc/video.mp4')
)

########################################
############ HUNGRY FOR CHANGE ############
########################################

hungry_change = Serie.create!(
  name: 'Hungry for Change',
  year: 2012,
  author: 'Permacology Productions',
  mpaa_rating: 'PG',
  description: 'Filmmakers James Colquhoun, Laurentine Ten Bosch and Carlo Ledesma expose the diet industry\'s deceptive strategies designed to keep people from losing and keeping off weight.',
  thumbnail: File.open("../docflix-media/series/hungry-change/logo.png")
)
SeriesGenre.create!(series_id: hungry_change.id, genre_id: social.id)
Episode.create!(
  name: hungry_change.name,
  description: hungry_change.description,
  runtime: 1,
  episode_num: 1,
  series_id: hungry_change.id,
  thumbnail: File.open('../docflix-media/series/hungry-change/ep-logo.png'),
  video: File.open('../docflix-media/series/hungry-change/video.mp4')
)


########################################
############ PLANTPURE NATION ############
########################################

plantpure = Serie.create!(
  name: 'PlantPure Nation',
  year: 2015,
  author: 'Nelson Campbell',
  mpaa_rating: 'PG',
  description: 'Three people try to start a pilot program to document the health benefits of a plant-based diet.',
  thumbnail: File.open("../docflix-media/series/plantpure/logo.png")
)
SeriesGenre.create!(series_id: plantpure.id, genre_id: social.id)
Episode.create!(
  name: plantpure.name,
  description: plantpure.description,
  runtime: 3,
  episode_num: 1,
  series_id: plantpure.id,
  thumbnail: File.open('../docflix-media/series/plantpure/ep-logo.png'),
  video: File.open('../docflix-media/series/plantpure/video.mp4')
)


########################################
############ HAPPY ############
########################################

happy = Serie.create!(
  name: 'PlantPure Nation',
  year: 2015,
  author: 'Nelson Campbell',
  mpaa_rating: 'PG',
  description: 'Three people try to start a pilot program to document the health benefits of a plant-based diet.',
  thumbnail: File.open("../docflix-media/series/happy/logo.png")
)
SeriesGenre.create!(series_id: happy.id, genre_id: social.id)
Episode.create!(
  name: happy.name,
  description: happy.description,
  runtime: 3,
  episode_num: 1,
  series_id: happy.id,
  thumbnail: File.open('../docflix-media/series/happy/ep-logo.png'),
  video: File.open('../docflix-media/series/happy/video.mp4')
)



########################################
############ UNTOLD HISTORY ############
########################################

untold_history = Serie.create!(
  name: 'Oliver Stone\'s Untold History of the United States',
  year: 2013,
  author: 'Oliver Stone',
  mpaa_rating: 'PG',
  description: 'This documentary offers an alternative take on modern American history, focusing on underreported events that shaped the nation\'s character.',
  thumbnail: File.open("../docflix-media/series/untold-history/logo.png")
)
SeriesGenre.create!(series_id: untold_history.id, genre_id: historical.id)
Episode.create!(
  name: untold_history.name,
  description: untold_history.description,
  runtime: 3,
  episode_num: 1,
  series_id: untold_history.id,
  thumbnail: File.open('../docflix-media/series/untold-history/ep-logo.png'),
  video: File.open('../docflix-media/series/untold-history/video.mp4')
)


########################################
############ THE SIXTIES ############
########################################

the_sixties = Serie.create!(
  name: 'The Sixties',
  year: 2014,
  author: 'CNN',
  mpaa_rating: 'PG',
  description: 'With the Vietnam War, the British Invasion, Woodstock, the Civil Rights Movement, and JFK\'s assassination, the 1960s represent, perhaps, the most consequential decade in U.S. history. It was a period of monumental social and political change, altering virtually every aspect of American life for future generations',
  thumbnail: File.open("../docflix-media/series/the-sixties/logo.png")
)
SeriesGenre.create!(series_id: the_sixties.id, genre_id: social.id)
SeriesGenre.create!(series_id: the_sixties.id, genre_id: historical.id)
Episode.create!(
  name: the_sixties.name,
  description: the_sixties.description,
  runtime: 1,
  episode_num: 1,
  series_id: the_sixties.id,
  thumbnail: File.open('../docflix-media/series/the-sixties/ep-logo.png'),
  video: File.open('../docflix-media/series/the-sixties/video.mp4')
)

########################################
############ TITANIC ############
########################################

titanic_final = Serie.create!(
  name: 'Titanic\'s Final Mystery',
  year: 2012,
  author: 'CNN',
  mpaa_rating: 'PG',
  description: 'A century ago, the "unsinkable" Titanic plunged to the bottom of the North Atlantic Ocean. With each passing year, the myth surrounding the ship has grown, as have arguments over why and how she met her demise. However, a recent study blows all other theories out of the water. Follow Titanic detective Tim Maltin as he shares the results of his 20-year investigation.',
  thumbnail: File.open("../docflix-media/series/titanic-final/logo.png")
)
SeriesGenre.create!(series_id: titanic_final.id, genre_id: historical.id)
Episode.create!(
  name: titanic_final.name,
  description: titanic_final.description,
  runtime: 2,
  episode_num: 1,
  series_id: titanic_final.id,
  thumbnail: File.open('../docflix-media/series/titanic-final/ep-logo.png'),
  video: File.open('../docflix-media/series/titanic-final/video.mp4')
)

########################################
############ HINDENBURG ############
########################################

hindenburg_untold = Serie.create!(
  name: 'Hindenburg: The Untold Story',
  year: 2010,
  author: 'John Shrapnel',
  mpaa_rating: 'PG',
  description: 'Who or what brought history\'s most famous airship burning to the ground? Relive the tragedy that shocked the world and sent one man on a tireless mission to answer that question. Through detailed reconstruction of the events, eyewitness testimony, the memories of living survivors, and the interpretation of modern day experts, we recount this disaster and the investigation that followed.',
  thumbnail: File.open("../docflix-media/series/hindenburg-untold/logo.png")
)
SeriesGenre.create!(series_id: hindenburg_untold.id, genre_id: historical.id)
Episode.create!(
  name: hindenburg_untold.name,
  description: hindenburg_untold.description,
  runtime: 2,
  episode_num: 1,
  series_id: hindenburg_untold.id,
  thumbnail: File.open('../docflix-media/series/hindenburg-untold/ep-logo.png'),
  video: File.open('../docflix-media/series/hindenburg-untold/video.mp4')
)


########################################
############ Greenwich ############
########################################

greenwich_village = Serie.create!(
  name: 'Greenwich Village: Music that Defined a Generation',
  year: 2012,
  author: 'CNN',
  mpaa_rating: 'PG',
  description: 'Interviews with Pete Seeger, Kris Kristofferson, Judy Collins, Arlo Guthrie and others show how the music coming out of New York\'s Greenwich Village challenged the status quo and promoted social change during the 1960s and \'70s',
  thumbnail: File.open("../docflix-media/series/greenwich-village/logo.png")
)
SeriesGenre.create!(series_id: greenwich_village.id, genre_id: social.id)
SeriesGenre.create!(series_id: greenwich_village.id, genre_id: historical.id)
Episode.create!(
  name: greenwich_village.name,
  description: greenwich_village.description,
  runtime: 2,
  episode_num: 1,
  series_id: greenwich_village.id,
  thumbnail: File.open('../docflix-media/series/greenwich-village/ep-logo.png'),
  video: File.open('../docflix-media/series/greenwich-village/video.mp4')
)
########################################
############ Golden Raft ############
########################################

secrets_golden = Serie.create!(
  name: 'Secrets: Golden Raft of El Dorado',
  year: 2013,
  author: 'Smithsonian',
  mpaa_rating: 'PG',
  description: 'A ten-inch golden statue discovered in a cave near Bogota may be the key to the greatest treasure never found: El Dorado. For centuries, rumors of a "Lost City of Gold" attracted explorers and fortune hunters to the Colombian Andes in search of riches. Now, after 500 years of futility and bloodshed, investigators try to finish the job, using the found statue, a beautiful model of a golden raft, as their guide.',
  thumbnail: File.open("../docflix-media/series/secrets-golden/logo.png")
)
SeriesGenre.create!(series_id: secrets_golden.id, genre_id: social.id)
SeriesGenre.create!(series_id: secrets_golden.id, genre_id: historical.id)
Episode.create!(
  name: secrets_golden.name,
  description: secrets_golden.description,
  runtime: 3,
  episode_num: 1,
  series_id: secrets_golden.id,
  thumbnail: File.open('../docflix-media/series/secrets-golden/ep-logo.png'),
  video: File.open('../docflix-media/series/secrets-golden/video.mp4')
)

########################################
############ Unbranded ############
########################################

unbranded_doc = Serie.create!(
  name: 'Unbranded',
  year: 2015,
  author: ' ',
  mpaa_rating: 'PG13',
  description: 'Four young Texans hatch an outrageous plot to adopt, train, and ride wild mustangs 3,000 miles from the Mexican border to Canada through the wildest terrain of the American West.',
  thumbnail: File.open("../docflix-media/series/unbranded-doc/logo.png")
)
SeriesGenre.create!(series_id: unbranded_doc.id, genre_id: social.id)
SeriesGenre.create!(series_id: unbranded_doc.id, genre_id: travel.id)
Episode.create!(
  name: unbranded_doc.name,
  description: unbranded_doc.description,
  runtime: 3,
  episode_num: 1,
  series_id: unbranded_doc.id,
  thumbnail: File.open('../docflix-media/series/unbranded-doc/ep-logo.png'),
  video: File.open('../docflix-media/series/unbranded-doc/video.mp4')
)


########################################
############ Touhing Void ############
########################################

touching_void = Serie.create!(
  name: 'Touching the Void',
  year: 2003,
  author: ' ',
  mpaa_rating: 'MA',
  description: 'Touching the Void is a 2003 docudrama survival film about Joe Simpson\'s and Simon Yates\' disastrous and near-fatal climb of Siula Grande in the Cordillera Huayhuash in the Peruvian Andes in 1985. It is based on Simpson\'s 1988 book of the same name.',
  thumbnail: File.open("../docflix-media/series/touching-void/logo.png")
)
SeriesGenre.create!(series_id: touching_void.id, genre_id: historical.id)
SeriesGenre.create!(series_id: touching_void.id, genre_id: travel.id)
Episode.create!(
  name: touching_void.name,
  description: touching_void.description,
  runtime: 3,
  episode_num: 1,
  series_id: touching_void.id,
  thumbnail: File.open('../docflix-media/series/touching-void/ep-logo.png'),
  video: File.open('../docflix-media/series/touching-void/video.mp4')
)

########################################
############ Myanmar ############
########################################

call_myanmar = Serie.create!(
  name: 'They Call It Myanmar: Lifting the Curtain',
  year: 2012,
  author: ' ',
  mpaa_rating: 'PG',
  description: 'Shot clandestinely over a 2-year period by best-selling novelist and filmmaker, Robert H. Lieberman, this film provides a rare look at the second-most isolated country on the planet. It lifts the curtain to expose the everyday life in a country that has been held in the iron grip of a brutal military regime for 48 years.',
  thumbnail: File.open("../docflix-media/series/call-myanmar/logo.png")
)
SeriesGenre.create!(series_id: call_myanmar.id, genre_id: social.id)
SeriesGenre.create!(series_id: call_myanmar.id, genre_id: travel.id)
Episode.create!(
  name: call_myanmar.name,
  description: call_myanmar.description,
  runtime: 3,
  episode_num: 1,
  series_id: call_myanmar.id,
  thumbnail: File.open('../docflix-media/series/call-myanmar/ep-logo.png'),
  video: File.open('../docflix-media/series/call-myanmar/video.mp4')
)


###NB: Seed for first Heroku push
########################################
############ Myanmar ############
########################################

call_myanmar = Serie.create!(
  name: 'They Call It Myanmar: Lifting the Curtain',
  year: 2012,
  author: ' ',
  mpaa_rating: 'PG',
  description: 'Shot clandestinely over a 2-year period by best-selling novelist and filmmaker, Robert H. Lieberman, this film provides a rare look at the second-most isolated country on the planet. It lifts the curtain to expose the everyday life in a country that has been held in the iron grip of a brutal military regime for 48 years.',
  thumbnail: ("https://s3.amazonaws.com/docflix-public/logo.png")
)
SeriesGenre.create!(series_id: call_myanmar.id, genre_id: social.id)
SeriesGenre.create!(series_id: call_myanmar.id, genre_id: travel.id)
Episode.create!(
  name: call_myanmar.name,
  description: call_myanmar.description,
  runtime: 3,
  episode_num: 1,
  series_id: call_myanmar.id,
  thumbnail: ('https://s3.amazonaws.com/docflix-public/ep-logo.png'),
  video: ('https://s3.amazonaws.com/docflix-public/video.mp4')
)

########################################
############ K2 Siren ############
########################################

k2_siren = Serie.create!(
  name: 'K2: Siren of the Himalayas',
  year: 2013,
  author: ' ',
  mpaa_rating: 'PG',
  description: 'Shot in Pakistan in the summer of 2009, the documentary follows world-class alpinists Fabrizio Zangrilli and Gerlinde Kaltenbrunner with veteran climbers Jake Meyer and Chris Szymiec in a breathtaking glimpse into the world of high altitude mountaineering.',
  thumbnail: File.open("../docflix-media/series/k2-siren/logo.png")
)
SeriesGenre.create!(series_id: k2_siren.id, genre_id: travel.id)
Episode.create!(
  name: k2_siren.name,
  description: k2_siren.description,
  runtime: 2,
  episode_num: 1,
  series_id: k2_siren.id,
  thumbnail: File.open('../docflix-media/series/k2-siren/ep-logo.png'),
  video: File.open('../docflix-media/series/k2-siren/video.mp4')
)


########################################
############ Endless Summer ############
########################################

endless_summer = Serie.create!(
  name: 'The Endless Summer',
  year: 2013,
  author: ' ',
  mpaa_rating: 'PG',
  description: 'The Endless Summer is a seminal 1966 surf movie. Filmmaker/narrator Bruce Brown follows two surfers, Mike Hynson and Robert August, on a surfing trip around the world',
  thumbnail: File.open("../docflix-media/series/endless-summer/logo.png")
)
SeriesGenre.create!(series_id: endless_summer.id, genre_id: travel.id)
SeriesGenre.create!(series_id: endless_summer.id, genre_id: sports.id)
Episode.create!(
  name: endless_summer.name,
  description: endless_summer.description,
  runtime: 2,
  episode_num: 1,
  series_id: endless_summer.id,
  thumbnail: File.open('../docflix-media/series/endless-summer/ep-logo.png'),
  video: File.open('../docflix-media/series/endless-summer/video.mp4')
)

########################################
############ Chasing Ice ############
########################################

chasing_ice = Serie.create!(
  name: 'Chasing Ice',
  year: 2013,
  author: ' ',
  mpaa_rating: 'PG',
  description: 'Acclaimed photographer James Balog was once a skeptic about climate change. But through his Extreme Ice Survey, he discovers undeniable evidence of our changing planet. In Chasing Ice, Balog deploys revolutionary time-lapse cameras to capture a multi-year record of the world\'s changing glaciers. His hauntingly beautiful videos compress years into seconds and capture ancient mountains of ice in motion as they disappear at a breathtaking rate.',
  thumbnail: File.open("../docflix-media/series/chasing-ice/logo.png")
)
SeriesGenre.create!(series_id: chasing_ice.id, genre_id: travel.id)
SeriesGenre.create!(series_id: chasing_ice.id, genre_id: nature.id)
Episode.create!(
  name: chasing_ice.name,
  description: chasing_ice.description,
  runtime: 2,
  episode_num: 1,
  series_id: chasing_ice.id,
  thumbnail: File.open('../docflix-media/series/chasing-ice/ep-logo.png'),
  video: File.open('../docflix-media/series/chasing-ice/video.mp4')
)

########################################
############ Fair Chase ############
########################################

fair_chase = Serie.create!(
  name: 'Fair Chase',
  year: 2015,
  author: ' ',
  mpaa_rating: 'PG',
  description: 'Inspired by the book Born to Run, ten distance runners from around the world attempt to chase down the fastest animal in North America and prove that running was the first human weapon and the key to our survival. This is their film.',
  thumbnail: File.open("../docflix-media/series/fair-chase/logo.png")
)
SeriesGenre.create!(series_id: fair_chase.id, genre_id: travel.id)
SeriesGenre.create!(series_id: fair_chase.id, genre_id: sports.id)
Episode.create!(
  name: fair_chase.name,
  description: fair_chase.description,
  runtime: 2,
  episode_num: 1,
  series_id: fair_chase.id,
  thumbnail: File.open('../docflix-media/series/fair-chase/ep-logo.png'),
  video: File.open('../docflix-media/series/fair-chase/video.mp4')
)

########################################
############ Isolated ############
########################################

isolated_doc = Serie.create!(
  name: 'Isolated',
  year: 2013,
  author: ' ',
  mpaa_rating: 'PG',
  description: 'Five world class surfers travel to New Guinea in search of undiscovered waves, but end up discovering so much more.',
  thumbnail: File.open("../docflix-media/series/isolated-doc/logo.png")
)
SeriesGenre.create!(series_id: isolated_doc.id, genre_id: travel.id)
SeriesGenre.create!(series_id: isolated_doc.id, genre_id: social.id)
Episode.create!(
  name: isolated_doc.name,
  description: isolated_doc.description,
  runtime: 2,
  episode_num: 1,
  series_id: isolated_doc.id,
  thumbnail: File.open('../docflix-media/series/isolated-doc/ep-logo.png'),
  video: File.open('../docflix-media/series/isolated-doc/video.mp4')
)
########################################
############ Perfect Shot ############
########################################

perfect_shot = Serie.create!(
  name: 'Nowitzki: The Perfect Shot',
  year: 2015,
  author: ' ',
  mpaa_rating: 'PG',
  description: 'Under the tutelage of coach and mentor Holger Geschwindner, 7-foot German basketball player Dirk Nowitzki develops an extraordinary jump shot, helping to lead the Dallas Mavericks to an NBA championship.',
  thumbnail: File.open("../docflix-media/series/perfect-shot/logo.png")
)
SeriesGenre.create!(series_id: perfect_shot.id, genre_id: sports.id)
Episode.create!(
  name: perfect_shot.name,
  description: perfect_shot.description,
  runtime: 2,
  episode_num: 1,
  series_id: perfect_shot.id,
  thumbnail: File.open('../docflix-media/series/perfect-shot/ep-logo.png'),
  video: File.open('../docflix-media/series/perfect-shot/video.mp4')
)

########################################
############ Nash  ############
########################################

nash_doc = Serie.create!(
  name: 'Nash',
  year: 2013,
  author: ' ',
  mpaa_rating: 'PG',
  description: 'This coming of age documentary chronicles the life of NBA All Star Steve Nash as he tries to navigate his way through the somewhat toils of professional sports while trying to leave a lasting legacy on and off the court.',
  thumbnail: File.open("../docflix-media/series/nash-doc/logo.png")
)
SeriesGenre.create!(series_id: nash_doc.id, genre_id: sports.id)
Episode.create!(
  name: nash_doc.name,
  description: nash_doc.description,
  runtime: 2,
  episode_num: 1,
  series_id: nash_doc.id,
  thumbnail: File.open('../docflix-media/series/nash-doc/ep-logo.png'),
  video: File.open('../docflix-media/series/nash-doc/video.mp4')
)


########################################
############ Stop at nothing  ############
########################################

stop_nothing = Serie.create!(
  name: 'Stop at Nothing: The Lance Armstrong Story',
  year: 2014,
  author: ' ',
  mpaa_rating: 'PG',
  description: 'Filmmaker Alex Holmes creates an explosive portrait of disgraced cyclist Lance Armstrong by talking to the athlete\'s former friends, whose lives and careers he was said to have destroyed.',
  thumbnail: File.open("../docflix-media/series/stop-nothing/logo.png")
)
SeriesGenre.create!(series_id: stop_nothing.id, genre_id: sports.id)
SeriesGenre.create!(series_id: stop_nothing.id, genre_id: social.id)
Episode.create!(
  name: stop_nothing.name,
  description: stop_nothing.description,
  runtime: 2,
  episode_num: 1,
  series_id: stop_nothing.id,
  thumbnail: File.open('../docflix-media/series/stop-nothing/ep-logo.png'),
  video: File.open('../docflix-media/series/stop-nothing/video.mp4')
)

########################################
############ ali ############
########################################

am_ali = Serie.create!(
  name: 'I Am Ali',
  year: 2014,
  author: ' ',
  mpaa_rating: 'PG',
  description: 'Unprecedented access to Muhammad Ali\'s personal archive of "audio journals" as well as interviews and testimonials from his inner circle of family and friends are used to tell the legend\'s life story.',
  thumbnail: File.open("../docflix-media/series/am-ali/logo.png")
)
SeriesGenre.create!(series_id: am_ali.id, genre_id: sports.id)
Episode.create!(
  name: am_ali.name,
  description: am_ali.description,
  runtime: 2,
  episode_num: 1,
  series_id: am_ali.id,
  thumbnail: File.open('../docflix-media/series/am-ali/ep-logo.png'),
  video: File.open('../docflix-media/series/am-ali/video.mp4')
)


########################################
############ ct fletcher ############
########################################

ct_fletcher = Serie.create!(
  name: 'CT Fletcher: My Magnificent Obsession',
  year: 2016,
  author: ' ',
  mpaa_rating: 'PG',
  description: 'The untold story of six-time world champion power lifter, CT Fletcher. Deemed one of the most influential and motivated fitness trainers, CT FLETCHER: MY MAGNIFICENT OBSESSION explores the pain, struggle, and hardships that he has endured throughout his life. Leaving an abusive childhood home, the film dives further into Fletcher’s personal and professional life - demonstrating the power motivation can have on the human spirit. Featuring appearances from Stone Cold Steve Austin, Bill Goldberg, and Kevin “Da Hulk” Washington, Fletcher’s life shows us how to push through our obstacles to achieve dreams of greatness.',
  thumbnail: File.open("../docflix-media/series/ct-fletcher/logo.png")
)
SeriesGenre.create!(series_id: ct_fletcher.id, genre_id: sports.id)
Episode.create!(
  name: ct_fletcher.name,
  description: ct_fletcher.description,
  runtime: 3,
  episode_num: 1,
  series_id: ct_fletcher.id,
  thumbnail: File.open('../docflix-media/series/ct-fletcher/ep-logo.png'),
  video: File.open('../docflix-media/series/ct-fletcher/video.mp4')
)
########################################
############ battered bastards ############
########################################

battered_doc = Serie.create!(
  name: 'The Battered Bastards of Baseball',
  year: 2014,
  author: ' ',
  mpaa_rating: 'PG',
  description: 'In 1973, baseball lover and actor Bing Russell, father of Kurt Russell, starts an independent, single-A team composed of players that no one else wanted.',
  thumbnail: File.open("../docflix-media/series/battered-doc/logo.png")
)
SeriesGenre.create!(series_id: battered_doc.id, genre_id: sports.id)
SeriesGenre.create!(series_id: battered_doc.id, genre_id: historical.id)
Episode.create!(
  name: battered_doc.name,
  description: battered_doc.description,
  runtime: 3,
  episode_num: 1,
  series_id: battered_doc.id,
  thumbnail: File.open('../docflix-media/series/battered-doc/ep-logo.png'),
  video: File.open('../docflix-media/series/battered-doc/video.mp4')
)







#
# Fake users
17.times do |i|
  User.create!(
    email: "guest#{i}@docflix.tech",
    password: 'testing',
    fname: "Guest #{i}",
    lname: "Smith"
  )
end

Review.destroy_all

# Fake comments
comments = [
  'I love this series so much!',
  'It was really interesting to watch',
  'One of my favorite directors',
  'I feel like this documentary really made an impact on me',
  'I\'m speechless after watching this one.'
]

# Fake Reviews
Serie.all.each do |serie|
  User.all.each do |user|
    Review.create!(
      stars: ( serie.name[0] == 'P' || serie.name[0] == 'D' ? (4 + rand(1)) : (1 + rand(4)) ),
      comment: comments.sample,
      user_id: user.id,
      series_id: serie.id
    )
  end
end
