// Scenario: Streaming Platform – Event Attendance & Engagement Analytics
// Business Requirement: The platform wants to track user interactions over time for live events, calculate metrics per genre, and highlight high-engagement content.
// Tasks:
// Group media/events by genre.
// Compute frequency maps for engagement per genre.
// Rank and sort top events/movies.
// Apply a sliding window for weekly or session-based engagement.


let engagementData = [
// Action
{ title: "Action Blast", genre: "action", rating: 8, watchTime: 120, attendees: 100 },
{ title: "Speed Run", genre: "action", rating: 10, watchTime: 200, attendees: 180 },
{ title: "Final Chase", genre: "action", rating: 7, watchTime: 140, attendees: 130 },
{ title: "Urban Warfare", genre: "action", rating: 9, watchTime: 190, attendees: 160 },
// Comedy
{ title: "Laugh Riot", genre: "comedy", rating: 6, watchTime: 90, attendees: 80 },
{ title: "Family Fun", genre: "comedy", rating: 7, watchTime: 80, attendees: 150 },
{ title: "Standup Special", genre: "comedy", rating: 8, watchTime: 110, attendees: 140 },
{ title: "Comedy Nights", genre: "comedy", rating: 9, watchTime: 130, attendees: 170 },
// Horror
{ title: "Horror Night", genre: "horror", rating: 9, watchTime: 150, attendees: 90 },
{ title: "Spooky Tales", genre: "horror", rating: 8, watchTime: 130, attendees: 110 },
{ title: "Dark Mansion", genre: "horror", rating: 7, watchTime: 140, attendees: 95 },
{ title: "Midnight Screams", genre: "horror", rating: 10, watchTime: 180, attendees: 160 },
// Drama
{ title: "Life Stories", genre: "drama", rating: 8, watchTime: 160, attendees: 120 },
{ title: "Broken Paths", genre: "drama", rating: 9, watchTime: 190, attendees: 140 },
{ title: "City Lights", genre: "drama", rating: 7, watchTime: 150, attendees: 100 },
{ title: "Final Letter", genre: "drama", rating: 10, watchTime: 210, attendees: 180 },
// Sci-Fi
{ title: "Future World", genre: "sci-fi", rating: 9, watchTime: 200, attendees: 170 },
{ title: "Space Colony", genre: "sci-fi", rating: 8, watchTime: 180, attendees: 150 },
{ title: "Time Loop", genre: "sci-fi", rating: 10, watchTime: 220, attendees: 200 },
{ title: "Galactic Wars", genre: "sci-fi", rating: 7, watchTime: 160, attendees: 130 },
// Documentary
{ title: "Nature Watch", genre: "documentary", rating: 8, watchTime: 140, attendees: 90 },
{ title: "Tech Evolution", genre: "documentary", rating: 9, watchTime: 170, attendees: 110 },
{ title: "History Revisited", genre: "documentary", rating: 7, watchTime: 130, attendees: 85 },
{ title: "Inside the Ocean", genre: "documentary", rating: 10, watchTime: 190, attendees: 120 }
];


//Events by genre

let eventsByGenre = engagementData.reduce((acc, event)=>{
    acc[event.genre] = acc[event.genre] || [];
    acc[event.genre].push(event);

    return acc;
}, {});

document.getElementById("task1Answer").textContent = JSON.stringify(eventsByGenre,null,2);

// Count high-attendance events

let highAttendanceEvent = engagementData.filter(event => event.attendees> 100);

let highAttendanceCount = highAttendanceEvent.reduce((acc, event) => {
    acc[event.genre] = (acc[event.genre] || 0)+1;
    return acc;
}, {});

document.getElementById("task2Answer").textContent = JSON.stringify(highAttendanceCount,null,2);

//Ranking events by watch time

let eventcopy = engagementData.map(event => ({...event}));

let rankedEventWatchTime = eventcopy.sort((a,b) => b.watchTime - a.watchTime);

document.getElementById("task3Answer").textContent = JSON.stringify(rankedEventWatchTime,null,2);


// Sliding window average of attendees

let windowSize  = 3;

let slindingWindowAvg = engagementData.map((_, i, arr) => {

    if(i+windowSize <= arr.length){
        let sum = arr.slice(i, i+windowSize).map(e => e.attendees).reduce((a,b) => a+b, 0);

        return{windowindex : i, averageAttendes: sum/windowSize};
    }
})
.filter(e=>e);
document.getElementById("task4Answer").textContent = JSON.stringify(slindingWindowAvg,null,2);