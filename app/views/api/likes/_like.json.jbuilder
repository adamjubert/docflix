json.extract! like, :id, :user_id, :serie_id
json.serie do
  json.extract! like.serie, :id, :name
  json.thumbnail_url asset_path(like.serie.thumbnail.url)
end 
