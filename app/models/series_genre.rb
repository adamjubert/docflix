class SeriesGenre < ActiveRecord::Base
  validates :series_id, :genre_id, presence: true
  belongs_to :serie
  belongs_to :genre
end
