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
  year: 2014,
  author: 'Discovery Channel',
  mpaa_rating: 'PG',
  description: Faker::Hipster.sentence(22),
  thumbnail: File.open("../docflix-media/thumbnails/planet-earth.png")
  )
natures_great = Serie.create!(
  name: 'Nature\'s Great Events',
  year: 2014,
  author: 'Discovery Channel',
  mpaa_rating: 'PG',
  description: Faker::Hipster.sentence(18),
  thumbnail: File.open("../docflix-media/thumbnails/natures-great-events.png")
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
pe1 = Episode.create!(
  name: 'Gifts from the Earth',
  description: 'By examining the earth\'s mineral and energy sources, scientists analyze how the theory of plate tectonics hasrevolutionized the search for earth\'s treasures that lie hidden in locations such as the Red Sea and Antarctic ice cap.',
  runtime: 5,
  episode_num: 1,
  series_id: planet_earth.id
)
pe2 = Episode.create!(
  name: 'Forest',
  description: 'Flora and fauna thrive in diverse forests.',
  runtime: 2,
  episode_num: 2,
  series_id: planet_earth.id
)
pe3 = Episode.create!(
  name: 'Mountains',
  description: 'Examining forces that shaped the land and its mountain chains.',
  runtime: 1,
  episode_num: 3,
  series_id: planet_earth.id
)
pe4 = Episode.create!(
  name: 'Seasonal Forests',
  description: 'The trees of the Taiga forest; giant sequoia, the largest living thing on the planet.',
  runtime: 1,
  episode_num: 3,
  series_id: planet_earth.id
)


Genre.destroy_all
my_list = Genre.create!(name: 'My List')
nature = Genre.create!(name: 'Nature')
social = Genre.create!(name: 'Social & Cultural')

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


mike = User.create!(email: 'test1@gmail.com', password: 'testing', fname: 'Mike', lname: 'Smith')
john = User.create!(email: 'test2@gmail.com', password: 'testing', fname: 'John', lname: 'Smith')
suzie = User.create!(email: 'test3@gmail.com', password: 'testing', fname: 'Suzie', lname: 'Smith')

Review.destroy_all
Review.create!(stars: 5, comment: Faker::Hacker.say_something_smart, user_id: mike.id, series_id: planet_earth.id )
Review.create!(stars: 2, comment: Faker::Hacker.say_something_smart, user_id: mike.id, series_id: planet_earth.id )
Review.create!(stars: 3, comment: Faker::Hacker.say_something_smart, user_id: mike.id, series_id: planet_earth.id )
Review.create!(stars: 1, comment: Faker::Hacker.say_something_smart, user_id: mike.id, series_id: planet_earth.id )
Review.create!(stars: 5, comment: Faker::Hacker.say_something_smart, user_id: mike.id, series_id: planet_earth.id )
Review.create!(stars: 4, comment: Faker::Hacker.say_something_smart, user_id: mike.id, series_id: planet_earth.id )
