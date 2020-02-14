var movies = JSON.parse(movies).movies;
for (var i = 0; i < movie.length; i++) {
	var card =
	`<div class="col-lg-5 media bg-dark text-white p-4 mb-3">
    <img class="media-left pr-4" alt="Image" src="${movies[i].image}">
    <div class="media-body">
        <h4 class="card-title">${movies[i].name}</h4>
        <p class="card-text">${movies[i].desc}</p>
        <div class="alignButton"><button type="button" class="btn bg-dark text-success btn-sm">Like <i class="fas fa-thumbs-up"></i> </button>
            <span class="likes">8</span>
        </div>
    </div>
</div>`;

document.getElementById('row').innerHTML += card;
};