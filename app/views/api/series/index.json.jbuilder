# used for MyList

json.array! @series do |serie|
  json.extract! serie, :id, :name
  json.thumbnail_url asset_path(serie.thumbnail.url)
end
