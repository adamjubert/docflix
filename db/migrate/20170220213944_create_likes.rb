class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.integer :user_id
      t.integer :serie_id

      t.timestamps
    end

    add_index :likes, :user_id
    add_index :likes, :serie_id 
  end
end
