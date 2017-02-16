class SeriesGenre < ActiveRecord::Base
  validates :series_id, :genre_id, presence: true
  belongs_to :serie,
    foreign_key: :series_id
  belongs_to :genre
end
