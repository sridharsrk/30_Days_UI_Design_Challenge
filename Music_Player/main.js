const data = [
    {
        id: 1,
        songName: "Sapper's Tree",
        artist: 'Hans Zimmer',
        songLink: './source/songs/song1.mp3',
        songImageLink: './source/images/image1.jpg',
        songTime: "1:36"
    },
    {
        id: 2,
        songName: 'Someone Lived This',
        artist: 'Hans zimmer',
        songLink: './source/songs/song2.mp3',
        songImageLink: './source/images/image2.jpg',
        songTime: "3:02"
    },
    {
        id: 3,
        songName: "Say You Won't Let Go",
        artist: 'James Arthur',
        songLink: './source/songs/song3.mp3',
        songImageLink: './source/images/image3.jpg',
        songTime: "3:36"
    },
    {
        id: 4,
        songName: 'Unstoppable',
        artist: 'Jesse',
        songLink: './source/songs/song4.mp3',
        songImageLink: './source/images/image4.jpg',
        songTime: "3:38"
    },
]

const numberOfSongs = data.length;


// body related stuff
const body = document.querySelector('body');
body.classList.add('flex', 'items-center', 'justify-center');


// selecting the main div
const main = document.querySelector('.main');
main.classList.add('flex', 'flex-col', 'p-8');

// createing basic elements for ui
const playerHeader = document.createElement('div');
playerHeader.className = 'player-header';
playerHeader.classList.add('flex', 'justify-between','items-center');

const playerImage = document.createElement('div');
playerImage.className = 'player-image';
playerImage.classList.add('flex', 'self-center');

const playerControls = document.createElement('div');
playerControls.className = 'player-controls';
playerControls.classList.add('flex', 'justify-center', 'items-center', 'flex-col');

const otherSongs = document.createElement('div');
otherSongs.className = 'other-songs';


// appending the elements to the main div
main.appendChild(playerHeader);
main.appendChild(playerImage);
main.appendChild(playerControls);
main.appendChild(otherSongs);

// this code for player header
// creating the menu svg
var menu = document.createElementNS("http://www.w3.org/2000/svg", "svg");
menu.setAttribute('width', '30px');
menu.setAttribute('height', '30px');
menu.setAttribute('viewBox', '0 0 24 24');
menu.setAttribute('fill', 'none');
menu.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
menu.setAttribute('class', 'menu');

var g1 = document.createElementNS("http://www.w3.org/2000/svg", "g");
g1.setAttribute('id', 'SVGRepo_bgCarrier');
g1.setAttribute('stroke-width', '0');
menu.appendChild(g1);

var g2 = document.createElementNS("http://www.w3.org/2000/svg", "g");
g2.setAttribute('id', 'SVGRepo_tracerCarrier');
g2.setAttribute('stroke-linecap', 'round');
g2.setAttribute('stroke-linejoin', 'round');
menu.appendChild(g2);

var g3 = document.createElementNS("http://www.w3.org/2000/svg", "g");
g3.setAttribute('id', 'SVGRepo_iconCarrier');
menu.appendChild(g3);

var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
path.setAttribute('d', 'M4 6H20M4 12H20M4 18H20');
path.setAttribute('stroke', '#000000');
path.setAttribute('stroke-width', '2');
path.setAttribute('stroke-linecap', 'round');
path.setAttribute('stroke-linejoin', 'round');
g3.appendChild(path);
playerHeader.appendChild(menu);

// creating the title
const title = document.createElement('div');

title.className = 'title';

// lesaning the controls and mak it status
const playerStatus = document.createElement('p');
playerStatus.className = 'player-status';
playerStatus.innerHTML = 'NOT PLAYING';

// add the title of the song
const songTitle = document.createElement('h1');
songTitle.className = 'song-title';

// add the artist name
const artistName = document.createElement('p');
artistName.className = 'artist-name';

title.appendChild(playerStatus);
title.appendChild(songTitle);
title.appendChild(artistName);
playerHeader.appendChild(title);

// creating the playelist svg
var playlist = document.createElementNS("http://www.w3.org/2000/svg", "svg");
playlist.setAttribute('fill', '#000000');
playlist.setAttribute('height', '30px');
playlist.setAttribute('width', '30px');
playlist.setAttribute('version', '1.1');
playlist.setAttribute('id', 'Layer_1');
playlist.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
playlist.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
playlist.setAttribute('viewBox', '0 0 512 512');
playlist.setAttribute('enable-background', 'new 0 0 512 512');
playlist.setAttribute('xml:space', 'preserve');

var g1 = document.createElementNS("http://www.w3.org/2000/svg", "g");
g1.setAttribute('id', 'SVGRepo_bgCarrier');
g1.setAttribute('stroke-width', '0');
playlist.appendChild(g1);

var g2 = document.createElementNS("http://www.w3.org/2000/svg", "g");
g2.setAttribute('id', 'SVGRepo_tracerCarrier');
g2.setAttribute('stroke-linecap', 'round');
g2.setAttribute('stroke-linejoin', 'round');
playlist.appendChild(g2);

var g3 = document.createElementNS("http://www.w3.org/2000/svg", "g");
g3.setAttribute('id', 'SVGRepo_iconCarrier');
playlist.appendChild(g3);

var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
path.setAttribute('d', 'M93.1,325.8V139.6H46.5C20.9,139.6,0,160.5,0,186.2v279.3C0,491.1,20.9,512,46.5,512h279.3c25.7,0,46.5-20.9,46.5-46.5v-46.5H186.2C134.8,418.9,93.1,377.2,93.1,325.8z M465.5,0H186.2c-25.7,0-46.5,20.9-46.5,46.5v279.3c0,25.7,20.9,46.5,46.5,46.5h279.3c25.7,0,46.5-20.9,46.5-46.5V46.5C512,20.9,491.1,0,465.5,0z M442.2,209.5h-93.1v93.1h-46.5v-93.1h-93.1v-46.5h93.1V69.8h46.5v93.1h93.1V209.5z');
g3.appendChild(path);
playerHeader.appendChild(playlist);

// this code for player progress
// creating the progress bar
const progress = document.createElement('audio');
progress.className = 'audio';
progress.classList.add('hidden');
progress.setAttribute('controls', '');
progress.setAttribute('src', '');
playerControls.appendChild(progress);

// createing the progress bar
const playerProgress = document.createElement('div');
playerProgress.className = 'player-progress';
playerControls.appendChild(playerProgress);
playerProgress.classList.add('flex', "flex-col");

// progress bar
const progressBar = document.createElement('div');
progressBar.className = 'progress-bar';
progressBar.classList.add('flex');
playerProgress.appendChild(progressBar);

// completed progress
const completedProgress = document.createElement('div');
completedProgress.className = 'completed-progress';
completedProgress.classList.add('flex');
progressBar.appendChild(completedProgress);

// timer container
const timerContainer = document.createElement('div');
timerContainer.className = 'timer-container';
timerContainer.classList.add('flex', 'items-center', 'justify-between');
playerProgress.appendChild(timerContainer);

// time start
const timeStart = document.createElement('p');
timeStart.className = 'time-start';
timeStart.innerHTML = '0:00';
timerContainer.appendChild(timeStart);
// time end
const timeEnd = document.createElement('p');
timeEnd.className = 'time-end';
timeEnd.innerHTML = '0:00';
timerContainer.appendChild(timeEnd);

// this code for player controls
const playerControl = document.createElement('div');
playerControl.className = 'player-control';
playerControl.classList.add('flex', 'justify-between', 'items-center');
playerControls.appendChild(playerControl);

// creating the previous button
const previous = document.createElement('button');
previous.className = 'previous';
previous.classList.add('flex', 'items-center');
playerControl.appendChild(previous);

// creating the previous button svg
var previousSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
previousSvg.setAttribute('fill', '#718087');
previousSvg.setAttribute('height', '20px');
previousSvg.setAttribute('width', '20px');
previousSvg.setAttribute('version', '1.1');
previousSvg.setAttribute('id', 'XMLID_54_');
previousSvg.setAttribute('viewBox', '0 0 24 24');
previousSvg.setAttribute('xml:space', 'preserve');

var g1 = document.createElementNS("http://www.w3.org/2000/svg", "g");
g1.setAttribute('id', 'SVGRepo_bgCarrier');
g1.setAttribute('stroke-width', '0');
previousSvg.appendChild(g1);

var g2 = document.createElementNS("http://www.w3.org/2000/svg", "g");
g2.setAttribute('id', 'SVGRepo_tracerCarrier');
g2.setAttribute('stroke-linecap', 'round');
g2.setAttribute('stroke-linejoin', 'round');
previousSvg.appendChild(g2);

var g3 = document.createElementNS("http://www.w3.org/2000/svg", "g");
g3.setAttribute('id', 'SVGRepo_iconCarrier');
previousSvg.appendChild(g3);

var polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
polygon.setAttribute('points', '17.2,23.7 5.4,12 17.2,0.3 18.5,1.7 8.4,12 18.5,22.3');
g3.appendChild(polygon);
previous.appendChild(previousSvg);

// creating the play button
const play = document.createElement('button');
play.className = 'play';
play.classList.add('flex', 'items-center');
playerControl.appendChild(play);

// creating the play button svg
var playSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
playSvg.setAttribute('fill', '#718087');
playSvg.setAttribute('height', '40px');
playSvg.setAttribute('width', '40px');
playSvg.setAttribute('version', '1.1');
playSvg.setAttribute('id', 'Layer_1');
playSvg.setAttribute('viewBox', '0 0 64 64');
playSvg.setAttribute('enable-background', 'new 0 0 64 64');
playSvg.setAttribute('xml:space', 'preserve');

var g1 = document.createElementNS("http://www.w3.org/2000/svg", "g");
g1.setAttribute('id', 'SVGRepo_bgCarrier');
g1.setAttribute('stroke-width', '0');
playSvg.appendChild(g1);

var g2 = document.createElementNS("http://www.w3.org/2000/svg", "g");
g2.setAttribute('id', 'SVGRepo_tracerCarrier');
g2.setAttribute('stroke-linecap', 'round');
g2.setAttribute('stroke-linejoin', 'round');
playSvg.appendChild(g2);

var g3 = document.createElementNS("http://www.w3.org/2000/svg", "g");
g3.setAttribute('id', 'SVGRepo_iconCarrier');
playSvg.appendChild(g3);

var polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
polygon.setAttribute('fill', '#718087');
polygon.setAttribute('stroke', '#000000');
polygon.setAttribute('stroke-width', '2');
polygon.setAttribute('stroke-linejoin', 'bevel');
polygon.setAttribute('stroke-miterlimit', '10');
polygon.setAttribute('points', '27,21 41,32 27,43');
g3.appendChild(polygon);

var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
path.setAttribute('fill', 'none');
path.setAttribute('stroke', '#000000');
path.setAttribute('stroke-width', '2');
path.setAttribute('stroke-miterlimit', '10');
path.setAttribute('d', 'M53.92,10.081 c12.107,12.105,12.107,31.732,0,43.838c-12.106,12.108-31.734,12.108-43.839,0c-12.107-12.105-12.107-31.732,0-43.838 C22.186-2.027,41.813-2.027,53.92,10.081z');
g3.appendChild(path);
play.appendChild(playSvg);

// creating the next button
const next = document.createElement('button');
next.className = 'next';
next.classList.add('flex', 'items-center');
playerControl.appendChild(next);

// creating the next button svg
var nextSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
nextSvg.setAttribute('fill', '#718087');
nextSvg.setAttribute('height', '20px');
nextSvg.setAttribute('width', '20px');
nextSvg.setAttribute('version', '1.1');
nextSvg.setAttribute('id', 'XMLID_287_');
nextSvg.setAttribute('viewBox', '0 0 24 24');
nextSvg.setAttribute('xml:space', 'preserve');

var g1 = document.createElementNS("http://www.w3.org/2000/svg", "g");
g1.setAttribute('id', 'SVGRepo_bgCarrier');
g1.setAttribute('stroke-width', '0');
nextSvg.appendChild(g1);

var g2 = document.createElementNS("http://www.w3.org/2000/svg", "g");
g2.setAttribute('id', 'SVGRepo_tracerCarrier');
g2.setAttribute('stroke-linecap', 'round');
g2.setAttribute('stroke-linejoin', 'round');
nextSvg.appendChild(g2);

var g3 = document.createElementNS("http://www.w3.org/2000/svg", "g");
g3.setAttribute('id', 'SVGRepo_iconCarrier');
nextSvg.appendChild(g3);

var polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
polygon.setAttribute('points', '6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12');
g3.appendChild(polygon);
next.appendChild(nextSvg);


// this code for collections of songs
// creating the song list
const songList = document.createElement('ul');
songList.className = 'song-names';
otherSongs.appendChild(songList);
songList.classList.add('flex', 'flex-col');

// creating the song list items
data.forEach((song, index) => {
    const songItem = document.createElement('li');
    songItem.className = `song-item song-item-${index + 1}`;
    songItem.classList.add('flex', 'items-center', 'justify-between');
    songList.appendChild(songItem);

    const songNameContainer = document.createElement('div');
    songNameContainer.className = `song-name-container song-name-container-${index + 1}`;
    songNameContainer.classList.add('flex', 'items-center');
    songItem.appendChild(songNameContainer);
    const mark = document.createElement('div');
    mark.className = `mark mark-${index + 1}`;
    songNameContainer.appendChild(mark);
    const songName = document.createElement('p');
    songName.className = 'song-name';
    songName.innerHTML = song.songName;
    songNameContainer.appendChild(songName);

    const songTime = document.createElement('p');
    songTime.className = 'song-time';
    songTime.innerHTML = song.songTime;
    songItem.appendChild(songTime);
});
songTitle.classList.add('padding-4');


// this code for interactivity
for (let i = 1; i <= numberOfSongs; i++) {
    const song = document.querySelector(`.song-item-${i}`);
    song.addEventListener('click', playTheSong(i));
}


// this code for whent the clicked the song
const currentSong = [0];

function playTheSong(index) {
    return function () {
        if (index > numberOfSongs) {
            index = 1;
        }
        if (currentSong[0] !== 0) {
            const currentMarking = document.querySelector(`.mark-${currentSong[0]}`)
            currentMarking.classList.remove('flex');
            currentMarking.classList.add('none');
        }
        currentSong[0] = index;
        songTitle.innerHTML = data[index - 1].songName;
        artistName.innerHTML = data[index - 1].artist;
        playerStatus.innerHTML = 'PLAYING NOW';

        progress.src = data[index - 1].songLink;
        progress.play();

        playerImage.setAttribute('style', `background-image: url(${data[index - 1].songImageLink})`);

        marking = document.querySelector(`.mark-${index}`)
        marking.classList.add('flex');


        // add end timeing
        const duration = progress.duration;
        const currentTime = progress.currentTime;
        const progressPercentage = (currentTime / duration) * 100;
        completedProgress.style.width = `${progressPercentage}%`;
        dateObjForEnd = new Date(duration * 1000);
        minutesForEnd = dateObjForEnd.getUTCMinutes();
        secondsForEnd = dateObjForEnd.getSeconds();
        if (secondsForEnd < 10) {
            timeEnd.innerHTML = `${minutesForEnd}:${secondsForEnd}`;
        }

        songVisualizer();
    }
}

// this code for controlling the songs
const playButton = document.querySelector('.play');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');

playButton.addEventListener('click', stopandPlayThesong());

function stopandPlayThesong() {
    return function () {
        if (progress.paused) {
            progress.play();
            playerStatus.innerHTML = 'PLAYING NOW';
        } else {
            progress.pause();
            playerStatus.innerHTML = 'PAUSED';
        }
    }
}

nextButton.addEventListener('click', nextSong());

function nextSong() {
    return function () {
        const value = currentSong[0]+1
        playTheSong(value)();
    }
}

previousButton.addEventListener('click', previousSong());

function previousSong() {
    return function () {
        let value = currentSong[0]-1
        if (value === 0){
            value = numberOfSongs;
        }
        playTheSong(value)();
    }
}

function songVisualizer() {
    progress.addEventListener('timeupdate', function () {
        const duration = progress.duration;
        const currentTime = progress.currentTime;
        const progressPercentage = (currentTime / duration) * 100;
        completedProgress.style.width = `${progressPercentage}%`;
        dateObjForEnd = new Date(duration * 1000);
        minutesForEnd = dateObjForEnd.getUTCMinutes();
        secondsForEnd = dateObjForEnd.getSeconds();
        timeEnd.innerHTML = `${minutesForEnd}:${secondsForEnd}`;

        dateObjForStart = new Date(currentTime * 1000);
        minutesForStart = dateObjForStart.getUTCMinutes();
        secondsForStart = dateObjForStart.getSeconds();
        timeStart.innerHTML = `${minutesForStart}:${secondsForStart}`;

        if (progressPercentage === 100) {
            const value = currentSong[0]+1
            playTheSong(value)();
        }
    });
}