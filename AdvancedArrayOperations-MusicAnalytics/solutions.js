import {listeningData} from './data.js';

const task1answer = document.getElementById("task1Answer");

const totalStreams = listeningData.reduce((acc, songs) => {
    
    if (songs.artist in acc) {
        acc[songs.artist] = acc[songs.artist] + songs.streams;
    } else {
        acc[songs.artist] = songs.streams;
    }
    return acc;


},{})

const artistarray = Object.entries(totalStreams);
console.log(artistarray); 

const streamRankings = artistarray.map(([artist, streams]) => {
    let tier;

    if(streams>= 10000000){
        tier = 'Platinum';
    }
    else if (streams >= 5000000){
        tier = 'Gold';
    }
    else {
        tier = 'Silver';
    }
    return {
        artist: artist,
        totalStreams: streams,
        tier: tier
    };
});
console.log(streamRankings);
let streamRankingsString = JSON.stringify(streamRankings, null, 2);
task1answer.innerHTML = `<p>${streamRankingsString}</p>`;

//////TASK 2
const task2Answer = document.getElementById('task2Answer');


const genMetrics = listeningData.reduce((acc, songs) => {
    // calc tstreams, trating, tsongCount
    if (!acc[songs.genre]){
        acc[songs.genre] = {
            totalStreams: 0,
            totalRating: 0,
            songCount: 0
        };
    }

    acc[songs.genre].totalStreams += songs.streams;
    acc[songs.genre].totalRating += songs.rating;
    acc[songs.genre].songCount += 1;

    return acc;

}, {})
// const genMetricsArray = Object.entries(genMetrics);
// console.log(genMetricsArray);

const finalgenMetrics = Object.keys(genMetrics).reduce((result, genre) => {
    
    const data = genMetrics[genre];

    const avgStreams = data.totalStreams / data.songCount;
    const avgRatings = data.totalRating / data.songCount;

    const engagementScore = Number (
        ((avgStreams / 1000000) * avgRatings).toFixed(2)
    );

    result[genre] = {
        avgStreams,
        avgRatings,
        songCount: data.songCount,
        engagementScore
    };

    return result;
},{} )

const finalgenMetricsArray = Object.entries(finalgenMetrics);
console.log(finalgenMetricsArray);

let finalgenMetricsString = JSON.stringify(finalgenMetrics, null, 2);
task2Answer.innerHTML = `<p>${finalgenMetricsString}</p>`

/////// TASK 3
const task3Answer = document.getElementById('task3Answer');

let maxScore = 0 // best practice would be use use -Infinity but we know the values are all positive in this instance so we use 0
let bestWindow = null

for (let i = 0; i<= listeningData.length - 4; i++){
    let windowScore = 0;
    let windowSongs = [];

    for(let j=0; j < 4; j++){
        const song = listeningData[i+j];

        const songScore = (song.streams / 1000) + (song.rating * 500);

        windowScore += songScore;
        windowSongs.push(song.title);
    }

    if (windowScore > maxScore){
        maxScore = windowScore;

        bestWindow = {
            startIndex: i,
            endIndex: i+3,
            songs: windowSongs,
            totalScore: windowScore
        }
    }
    
}

console.log(bestWindow);
let bestWindowString = JSON.stringify(bestWindow, null, 2);
task3Answer.innerHTML = `<p>${bestWindowString}</p>`;

///////// TASK 4 

const task4Answer = document.getElementById('task4Answer');
const artistData = listeningData.reduce((acc, song) => {
    if (!acc[song.artist]){
        acc[song.artist] = {};
    }

    if (!acc[song.artist][song.genre]){
        acc[song.artist][song.genre] = {
            totalStreams: 0,
            count: 0
        };
    }

    acc[song.artist][song.genre].totalStreams += song.streams;
    acc[song.artist][song.genre].count += 1;

    return acc;

},{});

const result = Object.keys(artistData)
    .map(artist => {

    const genres = Object.keys(artistData[artist]);
    const genreCount = genres.length;

    if (genreCount < 3) return null;

    let bestGenre = null;
    let bestAvg = -Infinity;

    genres.forEach(genre => {
        const data = artistData[artist][genre];
        const avg = data.totalStreams / data.count;

        if (avg > bestAvg) {
        bestAvg = avg;
        bestGenre = genre;
        }
    });

    return {
        artist,
        genres,
        genreCount,
        bestGenre,
        bestGenreAvgStreams: bestAvg
    };

    })
    .filter(item => item !== null);

console.log(result);
let resultString = JSON.stringify(result, null, 2);
task4Answer.innerHTML = `<p>${resultString}</p>`;


////////// TASK 5

const task5Answer = document.getElementById('task5Answer');

const optPlaylist = listeningData
    .filter(song =>
        song.rating >= 4.3 &&
        song.streams >= 2000000 &&
        song.duration >= 180 &&
        song.duration <= 240
    )
    .map(song => {
    const qualityScore =
        (song.rating * 2) + (song.streams / 500000);

    return {
        title: song.title,
        artist: song.artist,
        qualityScore
    };
    })
    .sort((a, b) => b.qualityScore - a.qualityScore)
    .slice(0, 10);


console.log(optPlaylist);
let optPlaylistString = JSON.stringify(optPlaylist, null, 2);
task5Answer.innerHTML = `<p>${optPlaylistString}</p>`;