class Review < ActiveRecord::Base
  validates :stars, :comment, presence: true
  validates_uniqueness_of :user_id, scope: [:series_id]
  belongs_to :user
  belongs_to :serie,
    foreign_key: :series_id

end
