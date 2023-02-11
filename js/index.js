let container = document.querySelector(`.albums`);
for (let i = 0; i < album.length; i++){
container.innerHTML += `
            <div class="col">
                <a href="album.html?i=${i}">
                    <div class="card">
                        <img src="${album[i].img}" class="card-img-top" alt=""> 
                        <div class="card-body">
                            <p class="card-text">${album[i].title}</p>
                        </div>
                    </div>
                </a>
            </div>
`
}