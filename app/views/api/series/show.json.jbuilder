

json.partial! '/api/series/serie', serie: @serie
json.episodes do
  json.array! @serie.episodes do |episode|
    json.extract! episode, :id, :name, :description, :runtime
  end
end
