class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :stars, null: false
      t.text :comment, null: false
      t.integer :user_id, null: false
      t.integer :series_id, null: false

      t.timestamps
    end

    add_index :reviews, :user_id
    add_index :reviews, :series_id
  end
end
