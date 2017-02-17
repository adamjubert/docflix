class CreateEpisodes < ActiveRecord::Migration
  def change
    create_table :episodes do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.integer :runtime, null: false
      t.integer :episode_num
      t.integer :series_id, null: false

      t.timestamps
    end

    add_index :episodes, :series_id
    add_index :episodes, :name 
  end
end
