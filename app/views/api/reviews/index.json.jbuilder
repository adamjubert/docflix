# json.set! @reviews, :id, :stars, :user_id, :series_id

@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :stars, :comment, :user_id, :series_id
  end
end
