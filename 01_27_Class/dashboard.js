// Sample dataset
let movies = [
    { title: "Action Blast", genre: "action", rating: 8, watchTime: 120 },
    { title: "Laugh Riot", genre: "comedy", rating: 6, watchTime: 90 },
    { title: "Horror Night", genre: "horror", rating: 9, watchTime: 150 },
    { title: "Family Fun", genre: "comedy", rating: 7, watchTime: 80 },
    { title: "Speed Run", genre: "action", rating: 10, watchTime: 200 }
];


// Business Requirement: We want to display a mini “dashboard” on a webpage that shows:
// Titles of top-rated movies (rating ≥ 7).
// Average watch time of those movies.
// Optionally, a category breakdown by genre.


//function to Filter top-rated movies
let topRatedMovies = movies.filter( function (movie) {
    if (movie.rating >=7){
        return true;
    }
    else{
        return false;
    }
})
//use map to list them [This list one by one instead of as a whole object]
topRatedMovies.map(function (movie){
    let titles = movie.title;

    console.log("top Rated Movie: ", titles)
})
//OR....
let te = moviesSorted = movies.filter(r => r.rating>= 7);

console.log(te);


//Average watch time of those movies

let totalWatchtime = topRatedMovies.reduce(function (total,movie){
    total = total + movie.watchTime;
    return total;
}, 0);

//Calculate Average

let AverageWatchtime = totalWatchtime/ topRatedMovies.length;



//Categories breakdown by genre. (grouping movies by genre)

//Goal : {action: [...], comedy [...], horror[...], }

let movieByGenre = movies.reduce(function (groups, movie){
    if(groups[movie.genre] === undefined)
    {
        groups[movie.genre] = [];
    }
    groups[movie.genre].push(movie);

    return groups;
}, {});

console.log('Movie by genre: ', movieByGenre);


function topPopulateMedia(logs,k){

    let totaltimeMap = {};

    logs.forEach(function (log){
        let title = log.title;
        let duration = log.duration;

        if(totaltimeMap[title]) {
            totaltimeMap[title] += duration;
        }else{
            totaltimeMap[title] = duration;
        }
    });

    let entries = Object.entries(totaltimeMap);

    entries.sort(function(a,b){
        let timeDiff = b[1] -a[1];
        if (timeDiff !==0){
            return timeDiff
        }else{
            return a[0].localeCompare(b[0]); //alphabetical compare
        }
    })

    let topk = entries.slice(0,k).map(function (entry){
        return entry[0];
    });
    return topk;
}