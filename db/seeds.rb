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
planet_earth = Serie.create!(
  name: 'Planet Earth',
  year: 2006,
  author: 'Discovery Channel',
  mpaa_rating: 'PG',
  description: 'This landmark series transports nature lovers from the Himalayan Mountains to the depths of the ocean and everywhere in between.',
  thumbnail: File.open("../docflix-media/series/planet-earth/logo.png")
)

death_valley = Serie.create!(
  name: 'Death Valley National Park',
  year: 2016,
  author: '4K Relaxation Channel',
  mpaa_rating: 'G',
  description: 'Enjoy this truly remarkable National Park that attracts millions of tourists. Take delight in a unique phenomenon, when Death Valley is transformed and when it comes to life, when thousands of plants color the intermountain basin.',
  thumbnail: File.open("../docflix-media/series/death-valley/logo.png")
)


### FAKE SEEDS BELOW ###
natures_great = Serie.create!(
  name: 'Nature\'s Great Events',
  year: 2014,
  author: 'Discovery Channel',
  mpaa_rating: 'PG',
  description: Faker::Hipster.sentence(18),
  thumbnail: File.open("../docflix-media/default_series_thumb.png")
)
vice = Serie.create!(
  name: 'Vice on HBO',
  year: 2015,
  author: 'Vice',
  mpaa_rating: 'MA',
  description: Faker::Hipster.sentence(8))
barkley_marathons = Serie.create!(
  name: 'The Barkley Marathons',
  year: 2014,
  author: 'Barkley Movie',
  mpaa_rating: 'PG',
  description: Faker::Hipster.sentence(18))
russias_rain = Serie.create!(
  name: 'Russias Secret Rainforest',
  year: 2009,
  author: 'National Geographic',
  mpaa_rating: 'PG',
  description: Faker::Hipster.sentence(18))
ants_secret = Serie.create!(
  name: 'Ants: The Secret Power of Nature',
  year: 2011,
  author: 'Discovery Channel',
    mpaa_rating: 'G',
  description:Faker::Hipster.sentence(18))
animal_homes = Serie.create!(name: 'Animal Homes', year: 2013,
  author: 'BBC', mpaa_rating: 'G',
  description:Faker::Hipster.sentence(18))
hungry_for = Serie.create!(name: 'Hungry for Change', year: 2013,
  author: 'BBC', mpaa_rating: 'G',
  description:Faker::Hipster.sentence(18))
killer_legends = Serie.create!(name: 'Killer Legends', year: 2013,
  author: 'BBC', mpaa_rating: 'G',
  description:Faker::Hipster.sentence(18))
africa = Serie.create!(name: 'Africa', year: 2014,
  author: 'Discovery Channel', mpaa_rating: 'PG',
  description: Faker::Hipster.sentence(18))
asia = Serie.create!(name: 'Asia', year: 2014,
  author: 'Discovery Channel', mpaa_rating: 'PG',
  description: Faker::Hipster.sentence(18))
birds = Serie.create!(name: 'Birds of Paradise', year: 2014,
  author: 'Discovery Channel', mpaa_rating: 'PG',
  description: Faker::Hipster.sentence(18))

Episode.destroy_all
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
Episode.create!(
  name: death_valley.name,
  description: death_valley.description,
  runtime: 2,
  episode_num: 1,
  series_id: death_valley.id,
  thumbnail: File.open('../docflix-media/series/death-valley/ep-logo.png'),
  video: File.open('../docflix-media/series/death-valley/video.mp4')
)


Genre.destroy_all
Genre.create!(name: 'My List')
nature = Genre.create!(name: 'Nature')
social = Genre.create!(name: 'Social & Cultural')
#
SeriesGenre.destroy_all
SeriesGenre.create!(series_id: planet_earth.id, genre_id: nature.id)
SeriesGenre.create!(series_id: birds.id, genre_id: nature.id)
SeriesGenre.create!(series_id: asia.id, genre_id: nature.id)
SeriesGenre.create!(series_id: africa.id, genre_id: nature.id)
SeriesGenre.create!(series_id: natures_great.id, genre_id: nature.id)
SeriesGenre.create!(series_id: vice.id, genre_id: social.id)
SeriesGenre.create!(series_id: hungry_for.id, genre_id: social.id)
SeriesGenre.create!(series_id: barkley_marathons.id, genre_id: social.id)
SeriesGenre.create!(series_id: russias_rain.id, genre_id: nature.id)
SeriesGenre.create!(series_id: ants_secret.id, genre_id: nature.id)
SeriesGenre.create!(series_id: animal_homes.id, genre_id: nature.id)
SeriesGenre.create!(series_id: animal_homes.id, genre_id: social.id)
SeriesGenre.create!(series_id: killer_legends.id, genre_id: social.id)
SeriesGenre.create!(series_id: death_valley.id, genre_id: nature.id)



# Fake users
20.times do |i|
  User.create!(
    email: Faker::Internet.email,
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
      stars: ( serie.name[0] == 'P' || serie.name[0] == 'A' ? (4 + rand(5)) : (1 + rand(5)) ),
      comment: Faker::Hipster.sentence(15, false, 20),
      user_id: user.id,
      series_id: serie.id
    )
  end
end
