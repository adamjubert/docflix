@genres.each do |genre|
  json.set! genre.id do
    json.id genre.id
    json.name genre.name
    json.series genre.series do |serie|
      json.id serie.id
      json.name serie.name
      json.thumbnail_url asset_path(serie.thumbnail.url)
    end

  end
end
