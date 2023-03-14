let prebtn = document.querySelector(".prebtn");
let playbtn = document.querySelector(".playbtn");
let forbtn = document.querySelector(".forbtn");
let pausebtn = document.querySelector(".pausebtn")
let runbar = document.querySelector("input")
let imgsource = document.querySelector('.image1');
let songsource = document.querySelector('audio');
let songname = document.querySelector('marquee');
let artistname = document.querySelector('.artistname');
let tonearm = document.querySelector("#tonearm");
let volumebar = document.querySelector(".volume")



const music = [
    {
        id: 1,
        songname: 'sachin sachin.mp3',
        artist: 'Sid Sriram',
        path: './songs/Sachin-Sachin.mp3',
        album: './images/sachin.jpeg',
    },
    {
        id: 2,
        songname: 'Ennadi-Maayavi-Nee.mp3',
        artist: 'Sid Sriram',
        path: './songs/Ennadi-Maayavi-Nee.mp3',
        album: './images/vada chennai.jpeg',

    },
    {
        id: 3,
        songname: 'June ponal.mp3',
        artist: 'Krish & Arun ',
        path: './songs/June-Pona.mp3',
        album: './images/unnale unnale.jpeg'
    },
    {
        id: 4,
        songname: 'kutty puli koottam.mp3',
        artist: 'Hariharan, Tippu ',
        path: './songs/Kutti-Puli-Kootam.mp3',
        album: './images/thuppakki.jpeg'
    },
    {
        id: 5,
        songname: 'Manjal veyil.mp3',
        artist: 'Hariharan',
        path: './songs/Manjal-Veiyil.mp3',
        album: './images/manjal veyil.jpeg'
    },
    {
        id: 6,
        songname: 'Varaayo vaarayo.mp3',
        artist: 'Harris Jayaraj',
        path: './songs/Vaarayo-Vaarayo.mp3',
        album: './images/adhavan.jpeg'
    },
    {
        id: 7,
        songname: 'partha muthal.mp3',
        artist: 'Harris Jayaraj',
        path: './songs/Partha-Muthal.mp3',
        album: './images/vettayadu vilayadu.jpeg'
    }
];


songsource.onloadeddata = () => {
    runbar.max = songsource.duration;
}

let i = 0;

songname.innerText = music[i].songname
imgsource.src = music[i].album
artistname.innerText = music[i].artist
songsource.src = music[i].path

forbtn.addEventListener('click', () => {
    i++
    if (i == music.length) {
        i = 0
    }
    songname.innerText = music[i].songname
    imgsource.src = music[i].album
    artistname.innerText = music[i].artist
    songsource.src = music[i].path

    if (playbtn.style.display == "none") {
        songsource.play()
        tonearm.classList.add("play")
    }
    else {
        songsource.pause()
    }

})

prebtn.addEventListener("click", () => {
    i--
    if (i == -1) {
        i = music.length - 1
    }
    songname.innerText = music[i].songname
    imgsource.src = music[i].album
    artistname.innerText = music[i].artist
    songsource.src = music[i].path

    if (playbtn.style.display == "none") {
        songsource.play()
        tonearm.classList.add("play")
    }
    else {
        songsource.pause()
    }

})



playbtn.addEventListener("click", () => {
    playbtn.style.display = "none"
    pausebtn.style.display = "block"
    songsource.play()
    tonearm.classList.add("play")
    runbar.value = songsource.currentTime
    imgsource.classList.add('img1')

    setInterval(() => {
        runbar.value = songsource.currentTime
        add()
    }, 500)
})


pausebtn.addEventListener("click", () => {
    playbtn.style.display = "block"
    pausebtn.style.display = "none"
    songsource.pause()
    tonearm.classList.remove("play")

    imgsource.classList.remove('img1')

})

let starttime = document.querySelector(".Ssec")
let endtime = document.querySelector(".Esec")


runbar.addEventListener("input", () => {

    add()
    songsource.currentTime = runbar.value
    if (playbtn.style.display == 'none') {

        songsource.play()
        tonearm.classList.add("play")

    }
    else if (pausebtn.style.display != 'none') {

        songsource.pause()

    }


})

function add() {
    currentMinutes = Math.floor(songsource.currentTime / 60)
    currentSeconds = Math.floor(songsource.currentTime - (currentMinutes * 60))

    durationMinutes = Math.floor(songsource.duration / 60)
    durationSeconds = Math.floor(songsource.duration - (durationMinutes * 60))

    if (currentSeconds < 10) {
        currentMinutes = "0" + currentMinutes
        currentSeconds = "0" + currentSeconds
    }
    if (currentSeconds > 9) {
        currentMinutes = "0" + currentMinutes

    }
    if (durationSeconds < 10) {
        durationSeconds = "0" + durationSeconds
    }

    starttime.innerText = `${currentMinutes}:${currentSeconds}`;
    endtime.innerText = `${durationMinutes}:${durationSeconds}`;

    
}

volumebar.addEventListener("input", () => {
    songsource.volume = volumebar.value
})




