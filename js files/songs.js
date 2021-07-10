const audio = document.querySelector('.song');
const img = document.querySelector("img");
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const name = document.getElementById("name");
const forw = document.getElementById("forw");
const back = document.getElementById("back");



const songs = [
    {
        title: "matkar",
        name: "matkar maya ko ahankar",
        artist: "kabir cafe'",
    },
    {
        title: "badal",
        name: "kabhi jo badal barse",
        artist: "arijit singh"
    },
    {
        title: "hawayein",
        name: "hawayein",
        artist: "arijit singh",
    },
    {
        title: "man_mera",
        name: "mann mera",
        artist: "gajendra verma",
    },
   


];



let isPlaying = false;
// play
const playMusic = () => {
    isPlaying = true;
    audio.play();
    play.classList.replace("fa-play", "fa-pause");
     img.classList.add('animation');
};


// pause
const pauseMusic = () => {
    isPlaying = false;
    audio.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove('animation');
};




// on.addEventListener("click", playMusic );

play.addEventListener("click", () => {

    isPlaying ? pauseMusic() : playMusic();
});

const loadsong = (songs) => {
    name.textContent = songs.name;
    artist.textContent = songs.artist;
    audio.src = "../music/" + songs.title + ".mp3";
    img.src = "../images/" + songs.title + ".jpg";
};

let songIndex = 0;

const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadsong(songs[songIndex]);s
    playMusic();
};
const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadsong(songs[songIndex]);
    playMusic();
};


forw.addEventListener("click", nextSong);
back.addEventListener("click", prevSong);

// keys function
const key = (e) => {
    const press = e.keyCode;
    //  console.log("keycode is " + press);
     if (press == 37) {
        prevSong();
    }
 if (press == 39) {
        nextSong();
    }
    
    if (press == 32) {
        if (isPlaying == true) {
            pauseMusic();
        }
        else if(isPlaying == false){
            playMusic();
        }
  
    }
}
document.addEventListener('keydown', key);





