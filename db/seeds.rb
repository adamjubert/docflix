# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.destroy_all
User.create!(email: 'guest@docflix.tech', password: 'testing', fname: 'Guest', lname: 'Smith')

Serie.destroy_all
Episode.destroy_all

Genre.destroy_all
Genre.create!(name: 'My List')
nature = Genre.create!(name: 'Nature')
social = Genre.create!(name: 'Social & Cultural')

SeriesGenre.destroy_all

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



# Fake users
20.times do |i|
  User.create!(
    email: "guest#{i}@docflix.tech",
    password: 'testing',
    fname: "Guest #{i}",
    lname: "Smith"
  )
end

Review.destroy_all

# Fake Reviews
Serie.all.each do |serie|
  User.all.each do |user|
    Review.create!(
      stars: ( serie.name[0] == 'P' || serie.name[0] == 'D' ? (4 + rand(5)) : (1 + rand(5)) ),
      comment: Faker::Hipster.sentence(15, false, 20),
      user_id: user.id,
      series_id: serie.id
    )
  end
end
