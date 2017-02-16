json.id @genre.id
json.name @genre.name
json.series @genre.series do |serie|
  json.id serie.id
  json.name serie.name
end
