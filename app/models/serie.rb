class Serie < ActiveRecord::Base
  validates :name, :year, :mpaa_rating, :description, presence: true 

end
