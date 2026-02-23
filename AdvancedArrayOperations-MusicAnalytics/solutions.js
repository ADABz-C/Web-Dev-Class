import {listeningData} from './data.js';

const task1answer = document.getElementById(task1Answer);

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

task1answer = 