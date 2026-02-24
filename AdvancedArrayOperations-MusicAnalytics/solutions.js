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