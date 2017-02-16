class Genre < ActiveRecord::Base
  validates :name, presence: true
  has_many :series_genres
  has_many :series,
    through: :series_genre,
    source: :serie

end
