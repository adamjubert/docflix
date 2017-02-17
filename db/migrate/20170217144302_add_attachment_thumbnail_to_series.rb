class AddAttachmentThumbnailToSeries < ActiveRecord::Migration
  def self.up
    change_table :series do |t|
      t.attachment :thumbnail
    end
  end

  def self.down
    remove_attachment :series, :thumbnail
  end
end
