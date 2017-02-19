

json.partial! '/api/series/serie', serie: @serie
json.episodes do
  json.array! @serie.episodes do |episode|
    json.extract! episode, :id, :name, :description, :runtime
    json.thumbnail_url episode.thumbnail.url
    json.video_url episode.video.url
  end
end
json.reviews do
  json.array! @serie.reviews do |review|
    json.extract! review, :id, :stars, :comment
  end
end
