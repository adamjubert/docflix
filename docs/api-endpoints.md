# API Endpoints

## HTML API

### Root
* ```GET /``` - loads React web app

## JSON API

### Users
* POST /api/users - create user

### Session
* POST /api/session
* DELETE /api/session

### Series 
* GET /api/series/:id

### Episodes
* GET /api/series/:series_id/episodes
  * Episodes index
* GET /api/episodes/:id
  * Watch episode

### Reviews
* GET /api/series/:series_id/reviews
  * Reviews index for a series
* POST /api/series/:series_id/reviews
  * Write a review for the series
* PATCH /api/reviews/:review_id
  * Edit an existing review (only if author)
* DELETE /api/reviews/:review_id
  * Delete an existing review (only if author)
