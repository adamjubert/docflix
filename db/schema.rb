# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170224031355) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "pg_trgm"

  create_table "episodes", force: :cascade do |t|
    t.string   "name",                   null: false
    t.text     "description",            null: false
    t.integer  "runtime",                null: false
    t.integer  "episode_num"
    t.integer  "series_id",              null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "video_file_name"
    t.string   "video_content_type"
    t.integer  "video_file_size"
    t.datetime "video_updated_at"
    t.string   "thumbnail_file_name"
    t.string   "thumbnail_content_type"
    t.integer  "thumbnail_file_size"
    t.datetime "thumbnail_updated_at"
  end

  add_index "episodes", ["name"], name: "index_episodes_on_name", using: :btree
  add_index "episodes", ["series_id"], name: "index_episodes_on_series_id", using: :btree

  create_table "genres", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "genres", ["name"], name: "index_genres_on_name", using: :btree

  create_table "likes", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "serie_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "likes", ["serie_id"], name: "index_likes_on_serie_id", using: :btree
  add_index "likes", ["user_id"], name: "index_likes_on_user_id", using: :btree

  create_table "reviews", force: :cascade do |t|
    t.integer  "stars",      null: false
    t.text     "comment",    null: false
    t.integer  "user_id",    null: false
    t.integer  "series_id",  null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "reviews", ["series_id"], name: "index_reviews_on_series_id", using: :btree
  add_index "reviews", ["user_id"], name: "index_reviews_on_user_id", using: :btree

  create_table "series", force: :cascade do |t|
    t.string   "name",                               null: false
    t.integer  "year",                               null: false
    t.string   "mpaa_rating",                        null: false
    t.text     "description",                        null: false
    t.integer  "avg_review",             default: 0
    t.string   "author"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "thumbnail_file_name"
    t.string   "thumbnail_content_type"
    t.integer  "thumbnail_file_size"
    t.datetime "thumbnail_updated_at"
  end

  add_index "series", ["name"], name: "index_series_on_name", using: :btree

  create_table "series_genres", force: :cascade do |t|
    t.integer  "series_id",  null: false
    t.integer  "genre_id",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "series_genres", ["genre_id"], name: "index_series_genres_on_genre_id", using: :btree
  add_index "series_genres", ["series_id"], name: "index_series_genres_on_series_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",               null: false
    t.string   "fname",               null: false
    t.string   "lname",               null: false
    t.string   "password_digest",     null: false
    t.string   "session_token",       null: false
    t.string   "profile_pic"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree

end
