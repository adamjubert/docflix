class Review < ActiveRecord::Base
  validates :stars, :comment, presence: true
  belongs_to :user
  belongs_to :serie,
    foreign_key: :series_id

end
