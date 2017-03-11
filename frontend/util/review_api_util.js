export const fetchReviews = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/series/${id}/reviews`
  })
);

export const fetchReview = id=> (
  $.ajax({
    url: `api/reviews/${id}`,
    method: 'POST',
  })
);

export const createReview = review => (
  $.ajax({
    url: 'api/reviews',
    method: 'POST',
    data: { review }
  })
);

export const updateReview = review => (
  $.ajax({
    url: `api/reviews/${review.id}`,
    method: 'PATCH',
    data: { review }
  })
);

export const deleteReview = review => (
  $.ajax({
    url: `api/reviews/${review.id}`,
    method: 'DELETE'
  })
);
