```
{  
  session: {  
    currentUser: {  
      id: 321,  
      email: "test@gmail.com",  
      fname: 'John',
      lname: 'Tester',
      profile_pic: 'john.jpg',
      reviews: [34, 99, 12, 54],  
      favorites: [5, 7, 8]  
    }  
  },  

  forms: {  
    signUp: {errors: []},  
    logIn: {errors: []},  
  },  

  series: {  
    1: {  
      id: 5  
      name: "Planet Earth",  
      year: 2015,  
      mpaaRating: "TV-G",  
      description: "This landmark series transports nature lovers from the  
      Himalayan Mountains to the depths of the ocean and everywhere inbetween.",  
      genre: [1, 2],  
      episodes: [12, 19, 32, 55]  
      reviews: [34, 25, 98, 65, 11],  
      reviewAvg: 4.8  
    }  
  }  

  episodes: {  
    1: {  
      id: 12,  
      seriesId: 5  
      name: 'From Pole to Pole',  
      description: 'This episode looks at our planet as a whole and considers  
      the key factors that have shaped its natural history.',  
      runtime: '1m',  
      videoURL: 'youtube.com/12345667',  
    }  
  }  

  reviews: {  
    1: {  
      id: 34,  
      seriesId: 5,  
      userId: 3,
      stars: 5,  
      comment: 'I loved this documentary so much! It was amazing.'  
    },  
    2: {  
      id: 22,  
      seriesId: 5,  
      userId: 4,
      stars: 3,  
      comment: 'It was pretty good.'  
    }  
  }  

  genres: {  
    1: {  
      name: 'Nature',  
      series: [5, 7, 8]  
    },  
    2: {  
      name: 'Science',  
      series: [5, 9, 10]  
    }  
  }  

}  
```
