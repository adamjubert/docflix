# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  stars      :integer          not null
#  comment    :text             not null
#  user_id    :integer          not null
#  series_id  :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class Review < ActiveRecord::Base
  validates :stars, :comment, presence: true
  validates :stars, numericality: { greater_than: 0, less_than: 6 }
  validates_uniqueness_of :user_id, scope: [:series_id]
  belongs_to :user
  belongs_to :serie,
    foreign_key: :series_id

end
