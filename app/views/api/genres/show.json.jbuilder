json.id @genre.id
json.name @genre.name
json.series @genre.series do |serie|
  json.extract! serie, :id, :name, :description, :year, :mpaa_rating, :avg_review, :author
  json.episodes do
    json.array! serie.episodes do |episode|
      json.extract! episode, :id, :name, :description, :runtime
      json.thumbnail_url episode.thumbnail.url
      json.video_url episode.video.url
    end
  end
  json.reviews do
    json.array! serie.reviews do |review|
      json.extract! review, :id, :stars, :comment
    end
  end
end
