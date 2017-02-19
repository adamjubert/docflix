class AddAttachmentVideoToEpisodes < ActiveRecord::Migration
  def self.up
    change_table :episodes do |t|
      t.attachment :video
    end
  end

  def self.down
    remove_attachment :episodes, :video
  end
end
