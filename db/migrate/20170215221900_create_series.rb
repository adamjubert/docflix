class CreateSeries < ActiveRecord::Migration
  def change
    create_table :series do |t|
      t.string :name, null: false
      t.integer :year, null: false
      t.string :mpaa_rating, null: false
      t.text :description, null: false
      t.integer :avg_review, default: 0
      t.string :author

      t.timestamps
    end

    add_index :series, :name
  end
end
