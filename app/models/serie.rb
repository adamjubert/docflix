class Serie < ActiveRecord::Base
  validates :name, :year, :mpaa_rating, :description, presence: true
  has_many :series_genres
  has_many :genres,
    through: :series_genres,
    source: :genre
end
