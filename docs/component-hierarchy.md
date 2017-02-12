# Component Hierarchy

#### AuthFormContainer
* SignUpForm
  * SignUpErrors
* LoginForm
  * LoginErrors

#### NavbarContainer
* Navbar
  * BrowseDropdown
    * Browse
    * *MyList (bonus)*
  * *Search (bonus)*
  * SignOut

#### DashboardContainer
* FeaturedEpisode
* Genres

#### BrowseContainer
* GenreItems
  * Series

#### SeriesContainer
* SeriesIndex
* SeriesIndexItems
  * Overview
  * Episodes
  * Details

#### WatchEpisodeContainer
  * WatchEpisode

#### OverviewContainer
* Rating
* AddToMyList
* WatchEpisode

#### EpisodesContainer
* EpisodeIndexItems
  * WatchEpisode

#### DetailsContainer
* ReadReviews
* Reviews
* MakeReview

#### ReviewsIndex
* StarRating
* Description

#BONUS

#### GenreContainer
* GenreItems
  * Series

#### SearchContainer 
* SearchResults
  * Series




# Routes
Path | Component
------------ | -------------
"/signup" | "AuthFormContainer
"/signin" | "AuthFormContainer
"browse" | "BrowseContainer"
"/search" | "SearchContainer"
"/browse/genre/:genreId" | "Genre"
"/watch/:episodeId" | "WatchEpisodeContainer"
