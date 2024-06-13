// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((element) => {
        return element.director;
    })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter((element) => {
        return element.director === 'Steven Spielberg' && element.genre.includes('Drama');
    }).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) { return 0 } else {
        return parseFloat((moviesArray.reduce((total, current) => {
            if (current.score) {
                return (total + current.score)
            } else {
                return (total + 0)
            }
        }, 0) / moviesArray.length).toFixed(2))
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter((element) => {
        return element.genre.includes('Drama');
    })
    return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newArray = [...moviesArray]
    return newArray.sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title)
        } else {
            return a.year - b.year
        }
    })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let newArray = [...moviesArray];
    return newArray.map((a) => { return a.title }).sort().slice(0, 20)

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let newArray = [...moviesArray];

    return newArray.map((movie) => {

        if (movie.duration) {
            if (movie.duration.includes('h') && movie.duration.includes('min')) {
                let time = movie.duration.split(' ');
                movie.duration = parseInt(time[0]) * 60 + parseInt(time[1]);
            } else if (movie.duration.includes('h')) {
                movie.duration = parseInt(movie.duration) * 60;
            } else {
                movie.duration = parseInt(movie.duration);
            }
        } else { movie.duration = 0 }

        return movie;
    });


}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { 
    
    moviesArray.sort((a,b)=>{return a.year - b.year})

    if (moviesArray[0]){

    let bestScore = 0;
    let bestYear = 0

    moviesArray.forEach((currentMovie)=>{

        let currentScore = scoresAverage(moviesArray.filter((movie)=>{return currentMovie.year === movie.year }) );
        
        if (currentScore>bestScore) {
            bestScore = currentScore;
            bestYear = currentMovie.year;
        } 
        
    })
    
    return `The best year was ${bestYear} with an average score of ${bestScore}`

     }else { return null}
    }


