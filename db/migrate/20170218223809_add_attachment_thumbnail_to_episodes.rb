class AddAttachmentThumbnailToEpisodes < ActiveRecord::Migration
  def self.up
    change_table :episodes do |t|
      t.attachment :thumbnail
    end
  end

  def self.down
    remove_attachment :episodes, :thumbnail
  end
end
