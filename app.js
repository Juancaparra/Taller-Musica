let currentSong = 0;

const audio = document.getElementById('audio');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const forward = document.getElementById('forward');
const rewind = document.getElementById('rewind');
const stop = document.getElementById('stop');
const skipPrevious = document.getElementById('skip-previous');
const skipNext = document.getElementById('skip-next');
const imgArtist = document.getElementById('imgArtist');
const nameArtist = document.getElementById('nameArtist');
const nameSong = document.getElementById('nameSong');

const playList = [
  {
    title: 'God is a Woman',
    artist: 'Ariana Grande',
    img: 'assets/img/godisawomanpsd_1024x1024.webp',
    song: 'assets/audio/Ariana Grande - God is a Woman (Ariana Grande At The BBC).mp3'
  },
  {
    title: 'Baby I',
    artist: 'Ariana Grande',
    img: 'assets/img/ariana-grande-baby-i-video-party.jpg',
    song: 'assets/audio/Ariana Grande - Baby I (Official Video)_bJuWlMFToNo.mp3'
  },
  {
    title: 'Breathin',
    artist: 'Ariana Grande',
    img: 'assets/img/breathin.jpg',
    song: 'assets/audio/Ariana Grande - breathin.mp3'
  },
  {
    title: 'Be my Baby',
    artist: 'Ariana Grande',
    img: 'assets/img/be my baby.png',
    song: 'assets/audio/Be My Baby_mbxaGzjCXP8.mp3'
  },
  {
    title: 'pov',
    artist: 'Ariana Grande',
    img: 'assets/img/pov.jpg',
    song: 'assets/audio/Ariana Grande - pov (official audio)_nQJEp-k-ogs.mp3'
  },
];

function loadSong(songIndex) {
  const song = playList[songIndex];
  audio.src = song.song;
  nameSong.textContent = song.title;
  nameArtist.textContent = song.artist;
  imgArtist.src = song.img;
  audio.play();
}
play.addEventListener('click', () => audio.play());
pause.addEventListener('click', () => audio.pause());
rewind.addEventListener('click', () => audio.currentTime -= 10);
forward.addEventListener('click', () => audio.currentTime += 10);

stop.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
});

skipNext.addEventListener('click', () => {
  currentSong = (currentSong + 1) % playList.length;
  loadSong(currentSong);
});

skipPrevious.addEventListener('click', () => {
  currentSong = (currentSong - 1 + playList.length) % playList.length;
  loadSong(currentSong);
});

loadSong(currentSong);
