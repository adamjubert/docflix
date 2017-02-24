# == Schema Information
#
# Table name: series
#
#  id                     :integer          not null, primary key
#  name                   :string           not null
#  year                   :integer          not null
#  mpaa_rating            :string           not null
#  description            :text             not null
#  avg_review             :integer          default("0")
#  author                 :string
#  created_at             :datetime
#  updated_at             :datetime
#  thumbnail_file_name    :string
#  thumbnail_content_type :string
#  thumbnail_file_size    :integer
#  thumbnail_updated_at   :datetime
#

class Serie < ActiveRecord::Base
  validates :name, :year, :mpaa_rating, :description, presence: true
  has_many :series_genres
  has_many :genres,
    through: :series_genres,
    source: :genre
  has_many :episodes,
    class_name: 'Episode',
    foreign_key: :series_id
  has_many :reviews,
    class_name: 'Review',
    foreign_key: :series_id
  has_many :likes,
    class_name: 'Like',
    foreign_key: :serie_id

  include PgSearch

  pg_search_scope :search_by_name, :against => [:name],
    :using => {
      :tsearch => {:prefix => true }
    }

  has_attached_file :thumbnail, default_url: "old_netflix_logo.png"
  validates_attachment_content_type :thumbnail, content_type: /\Aimage\/.*\z/

end
