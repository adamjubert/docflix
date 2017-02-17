# == Schema Information
#
# Table name: episodes
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :text             not null
#  runtime     :integer          not null
#  episode_num :integer
#  series_id   :integer          not null
#  created_at  :datetime
#  updated_at  :datetime
#

class Episode < ActiveRecord::Base
  validates :name, :description, :runtime, :series_id, presence: true
  belongs_to :serie,
    foreign_key: :series_id

end
