console.log("hi")

var playBtn = document.getElementById("play-btn");
var audioPlayer = document.getElementById("audio")
var pauseBtn = document.getElementById("pause-btn")
var musicName = document.getElementById("music-name");
var musicArtist = document.getElementById("music-artist");
var forwardBtn = document.getElementById("forward-btn");
var backwardBtn = document.getElementById("backward-btn");
var image = document.getElementById("img")
var audio = document.getElementById("audio")

var songs = [{

        id: "1",
        track: "Without You",
        artist: "Avicii",
        albumCover: "https://m.media-amazon.com/images/I/81mNRm3F6KL._SS500_.jpg",
        file: "https://edyoda.s3.ap-south-1.amazonaws.com/public/musicfiles/without-you.mp3"
    },
    {
        id: "2",
        track: "Youngblood",
        artist: "5 Seconds of Summer",
        albumCover: "https://pm1.narvii.com/6806/3e2b13347653f657cefb76e8da003cf49e17adeav2_hq.jpg",
        file: "https://edyoda.s3.ap-south-1.amazonaws.com/public/musicfiles/5+Seconds+Of+Summer+-+Youngblood+(+).mp3"
    },
    {
        id: "3",
        track: "I'm a Mess",
        artist: "Bebe Rexha",
        albumCover: "https://images.genius.com/bdb01bd972ae95534994ea013e7a3e2e.1000x1000x1.jpg",
        file: "https://edyoda.s3.ap-south-1.amazonaws.com/public/musicfiles/Bebe+Rexha+-+I+m+A+Mess.mp3"
    },
    {
        id: "4",
        track: "Where we started",
        artist: "Lost Sky",
        albumCover: "https://i.kfs.io/album/global/36258062,0v1/fit/500x500.jpg",
        file: "https://edyoda.s3.ap-south-1.amazonaws.com/public/musicfiles/Lost+Sky+-+Where+We+Started+feat.+Jex.mp3"
    },
    {
        id: "5",
        track: "Ignite",
        artist: "Alan Walker & K-391",
        albumCover: "https://cdns-images.dzcdn.net/images/cover/326d976522e03136299c17cbd06bcfd4/264x264.jpg",
        file: "https://edyoda.s3.ap-south-1.amazonaws.com/public/musicfiles/Alan+Walker+%26+K-391+-+Ignite+ft.+Julie+Bergan+%26+Seungri.mp3"
    },
    {
        id: "6",
        track: "Everybody Wants to Rule the World",
        artist: "Lorde",
        albumCover: "https://i1.sndcdn.com/artworks-000112266462-33e808-t500x500.jpg",
        file: "https://edyoda.s3.ap-south-1.amazonaws.com/public/musicfiles/Lorde+-+Everybody+Wants+To+Rule+The+World.mp3"
    },
    {

        id: "7",
        track: "Superhero",
        artist: "Unknown Brain",
        albumCover: "https://is4-ssl.mzstatic.com/image/thumb/Music71/v4/59/09/96/59099665-fd91-ac78-04c1-a6675907926d/source/1200x1200bb.jpg",
        file: "https://edyoda.s3.ap-south-1.amazonaws.com/public/musicfiles/Unknown+Brain+-+Superhero+(feat.+Chris+Linton)+%5BNCS+Release%5D.mp3"
    }
]

var isPlaying = false;

var playMusic = () => {
    isPlaying = true;
    audioPlayer.play();
    playBtn.classList.replace("fa-play-circle", "fa-pause-circle");
}

var pauseMusic = () => {
    isPlaying = false;
    audioPlayer.pause();
    playBtn.classList.replace("fa-pause-circle", "fa-play-circle");
}
playBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
})

var loadSongs = (songs) => {
    musicName.textContent = songs.track;
    musicArtist.textContent = songs.artist;
    audio.src = songs.file;
    image.src = songs.albumCover;
}
songIndex = 0;
// loadSongs(songs[0]);

var nextSong = () => {
    songIndex = (songIndex + 2) % songs.length;



    loadSongs(songs[songIndex]);
    playMusic();

}
var prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;

    loadSongs(songs[songIndex]);
    playMusic();

}

forwardBtn.addEventListener('click', nextSong);
backwardBtn.addEventListener('click', prevSong)