class Addingsearch < ActiveRecord::Migration
  def change
    execute "create extension pg_trgm;"
  end
end
