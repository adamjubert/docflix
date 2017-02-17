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
planet_earth = Serie.create!(name: 'Planet Earth', year: 2014,
  author: 'Discovery Channel', mpaa_rating: 'PG',
  description: Faker::Hipster.sentence(22))
natures_great = Serie.create!(name: 'Nature\'s Great Events', year: 2014,
  author: 'Discovery Channel', mpaa_rating: 'PG',
  description: Faker::Hipster.sentence(18))
vice = Serie.create!(name: 'Vice on HBO', year: 2015,
  author: 'Vice', mpaa_rating: 'MA',
  description: Faker::Hipster.sentence(8))
barkley_marathons = Serie.create!(name: 'The Barkley Marathons', year: 2014,
  author: 'Barkley Movie', mpaa_rating: 'PG',
  description: Faker::Hipster.sentence(18))
russias_rain = Serie.create!(name: 'Russias Secret Rainforest', year: 2009,
  author: 'National Geographic', mpaa_rating: 'PG',
  description: Faker::Hipster.sentence(18))
ants_secret = Serie.create!(name: 'Ants: The Secret Power of Nature', year: 2011,
  author: 'Discovery Channel', mpaa_rating: 'G',
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
