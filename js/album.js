let container = document.querySelector(`.album`);
let playlist = document.querySelector(`.playlist`);
let search = new URLSearchParams(window.location.search);
let albums = album[search.get(`i`)];
let tracks = albums.tracks;

container.innerHTML = `
                <div class="row">
                    <div class="col-md-4">
                        <img src="${albums.img}" alt="" class="img-fluid rounded-start">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${albums.title}</h5>
                            <p class="card-text">${albums.description}</p>
                            <p class="card-text"><small class="text-muted">Выпущен в ${albums.year} году</small></p>
                        </div>
                    </div>
                </div>
`




for (let j = 0; j < tracks.length;j++){
    let track = tracks[j];

    playlist.innerHTML += `
                <li class="track list-group-item d-flex align-items-center">
                    <img src="assets/play.png" alt="" height="35px" class="img-playing me-3">
                    <img src="assets/listen.png" alt="" height="35px" class="img-pause d-none me-3">
                    <div>
                        <div>${track.title}</div>
                        <div class="text-secondary">${track.author}</div>  
                    </div>
                    <div class="ms-auto time">${track.time}</div>
                    <audio class="audio" src="${track.src}"></audio>
                </li>

    `

let isPlaying = false;
function setupAudio() {
    // Найди коллекцию с треками
    let trackNodes = document.querySelectorAll(`.track`); 
    for (let i = 0; i < trackNodes.length; i++) { 
        // Один элемент
        let node = trackNodes[i];   
        // Тег аудио внутри этого элемента
        let audio = node.querySelector(`.audio`);
        let timeNode = node.querySelector(`.time`); 
        // продолжи самостоятельно
        let track = albums.tracks[i];
        node.addEventListener(`click`, function () {
        // Если трек сейчас играет...
        if (track.isPlaying) {
            track.isPlaying = false;
            audio.pause();// Поставить на паузу
            let imgPlay = node.querySelector(`.img-playing`);
            let imgPause = node.querySelector(`.img-pause`);
            imgPlay.classList.remove(`d-none`);
            imgPause.classList.add(`d-none`);
            // Если трек сейчас не играет...
        } else {
            track.isPlaying = true;
            audio.play();// Включить проигрывание
            let imgPlay = node.querySelector(`.img-playing`);
            let imgPause = node.querySelector(`.img-pause`);
            imgPlay.classList.add(`d-none`);
            imgPause.classList.remove(`d-none`);
            updateProgress();
        }
        });
        function updateProgress() {
            let time = getTime(audio.currentTime);
            // Нарисовать актуальное время
            if (time != timeNode.innerHTML){
                timeNode.innerHTML = time;
            }
            // Нужно ли вызвать её ещё раз?
            if (track.isPlaying) {
                requestAnimationFrame(updateProgress);
            }
        }
      
        }

    }
    setupAudio()
    function getTime(time) {
        let currentSeconds = Math.floor(time);
        let minutes = Math.floor(currentSeconds / 60);
        let seconds = Math.floor(currentSeconds % 60);
        if (minutes < 10){
            minutes = `0` + minutes;
        }
        if (seconds < 10){
            seconds = `0` + seconds;
        }
        return `${minutes}:${seconds}`
    }
}







