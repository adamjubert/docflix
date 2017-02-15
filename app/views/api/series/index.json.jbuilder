@series.each do |serie|
  json.set! serie.id do
    json.extract! serie, :id, :name
  end
end
