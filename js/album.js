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
                <li class="list-group-item d-flex align-items-center">
                    <img src="assets/play.png" alt="" height="35px" class="me-3">
                    <div>
                        <div>${track.title}</div>
                        <div class="text-secondary">${track.author}</div>  
                    </div>
                    <div class="ms-auto">${track.time}</div>
                </li>

    `
}