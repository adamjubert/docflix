class Serie < ActiveRecord::Base
  validates :name, :year, :mpaa_rating, :description, presence: true
  has_many :series_genres
  has_many :genres,
    through: :series_genres,
    source: :genre

  has_attached_file :thumbnail, default_url: "old_netflix_logo.png"
  validates_attachment_content_type :thumbnail, content_type: /\Aimage\/.*\z/

end
