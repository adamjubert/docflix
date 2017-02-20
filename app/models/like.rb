# == Schema Information
#
# Table name: likes
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  serie_id   :integer
#  created_at :datetime
#  updated_at :datetime
#


class Like < ActiveRecord::Base
  validates :user_id, :serie_id, presence: true
  belongs_to :user
  belongs_to :serie,
    class_name: 'Serie',
    foreign_key: :serie_id

end
