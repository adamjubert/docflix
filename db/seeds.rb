# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Serie.destroy_all

Serie.create!(name: 'Planet Earth', year: 2014, author: 'Discovery Channel', mpaa_rating: 'PG', description: 'A wonderful nature series about our planet')
Serie.create!(name: 'Vice on HBO', year: 2015, author: 'Vice', mpaa_rating: 'MA', description: 'Travel around the globe and watch interesting stories')
Serie.create!(name: 'The Barkley Marathons', year: 2014, author: 'Barkley Movie', mpaa_rating: 'PG', description: 'The documentary follows the story of unlikely athletes pushing themselves to their limits.')
Serie.create!(name: 'Russias Secret Rainforest', year: 201409, author: 'National Geographic', mpaa_rating: 'PG', description: 'Exploring a rainforest in Russia')
