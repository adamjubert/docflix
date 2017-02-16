class CreateSeriesGenres < ActiveRecord::Migration
  def change
    create_table :series_genres do |t|
      t.integer :series_id, null: false
      t.integer :genre_id, null: false

      t.timestamps
    end

    add_index :series_genres, :series_id
    add_index :series_genres, :genre_id
  end
end
