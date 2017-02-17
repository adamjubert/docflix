# Schema Information

### users
column name | data type | details
------------ | ------------- | -------------
id | integer | not null, primary key
email | string | not null, indexed, unique
password_digest | string | not null
session_token | string | not null, indexed, unique
image_url | string |


### series
column name | data type | details
------------ | ------------- | -------------
id | integer | not null, primary key
name | string | not null
year | integer | not null
author | string | 
mpaa_rating | string | not null
description | text | not null
avg_review | integer | default: 0



### episodes
column name | data type | details
------------ | ------------- | -------------
id | integer | not null, primary key
series_id | integer | not null, indexed
name | string | not null
description | text | not null
runtime | integer | not null
view_url | string | added later w/ paperclip
ep_thumbnail | string | added later w/ paperclip



### reviews
column name | data type | details
------------ | ------------- | -------------
id | integer | not null, primary key
user_id | integer | not null, indexed
series_id | integer | not null, indexed
rating | integer | not null, default: 0
body | text | not null

### genres
column name | data type | details
------------ | ------------- | -------------
id | integer | not null, primary key
name | string | not null, indexed

### series_genres
column name | data type | details
------------ | ------------- | -------------
id | integer | not null, primary key
series_id | integer | not null, foreign key (series), indexed
genre_id | integer | not null, foreign key (genres), indexed
