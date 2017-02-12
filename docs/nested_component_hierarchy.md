# Nested Component Hierarchy
*Sample use only* 

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
* Browse
  * GenreItems
    * Series
      * SeriesIndex
      * SeriesIndexItems
        * Overview
          * Rating
          * AddToMyList
          * WatchEpisode
        * Episodes
          * EpisodeIndexItems
          * WatchEpisode
        * Details
          * ReadReviews
            * StarRating
            * Description
          * Reviews
            * StarRating
            * Description
          * MakeReview

## Bonus

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
"/browse" | "BrowseContainer"
"/watch/:episodeId" | "WatchEpisodeContainer"
"/browse/genre/:genreId" | "GenreContainer"
"/search" | "SearchContainer"
