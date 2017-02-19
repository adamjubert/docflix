# == Schema Information
#
# Table name: episodes
#
#  id                     :integer          not null, primary key
#  name                   :string           not null
#  description            :text             not null
#  runtime                :integer          not null
#  episode_num            :integer
#  series_id              :integer          not null
#  created_at             :datetime
#  updated_at             :datetime
#  video_file_name        :string
#  video_content_type     :string
#  video_file_size        :integer
#  video_updated_at       :datetime
#  thumbnail_file_name    :string
#  thumbnail_content_type :string
#  thumbnail_file_size    :integer
#  thumbnail_updated_at   :datetime
#

class Episode < ActiveRecord::Base
  validates :name, :description, :runtime, :series_id, presence: true
  belongs_to :serie,
    foreign_key: :series_id

  has_attached_file :thumbnail, default_url: "../../../docflix-media/episodes/thumbnails/default.png"
  # has_attached_file :thumbnail, default_url: "old_netflix_logo.png"
  ### NB: if you do the above, must change json.jbuilder to asset_path()
  validates_attachment_content_type :thumbnail, content_type: /\Aimage\/.*\Z/

  has_attached_file :video, processors: [:transcoder]
  validates_attachment_content_type :video, content_type: ["video/mp4"]

  def self.destroy_nonseeds
    destroy_these_ids = []
    destroy_these_videos = Episode.select(:id).where(seeded: false)

    destroy_these_videos.each do |video|
      destroy_these_ids << video.id
    end

    Episode.destroy(destroy_these_ids)
  end

end
