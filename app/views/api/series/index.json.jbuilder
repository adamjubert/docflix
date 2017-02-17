@series.each do |serie|
  json.set! serie.id do
    json.extract! serie, :id, :name
    json.thumbnail_url asset_path(serie.thumbnail.url)
  end
end
