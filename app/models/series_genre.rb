# == Schema Information
#
# Table name: series_genres
#
#  id         :integer          not null, primary key
#  series_id  :integer          not null
#  genre_id   :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class SeriesGenre < ActiveRecord::Base
  validates :series_id, :genre_id, presence: true
  belongs_to :serie,
    foreign_key: :series_id
  belongs_to :genre
end
