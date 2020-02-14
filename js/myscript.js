var movies = data;

var likeCounter = [];

movies.forEach( function(){
    likeCounter.push(Math.floor(Math.random()* Math.floor(15)));
    }
)


// functions
const addLike = function(index) {
    var like = $(`#likes${index}`).html();
    like++;
    $(`#likes${index}`).html(like);
}

// functions end

for (var i = 0; i < movies.length; i++) {
	var card =
	`<div id="container" class="col-lg-5 media bg-dark text-white p-4 mb-3">
    <img class="media-left pr-4" alt="Image" src="${movies[i].image}">
    <div class="media-body">
        <h4 class="card-title">${movies[i].name}</h4>
        <p class="card-text">${movies[i].desc}</p>
        <div class="alignButton"><button onclick="addLike(${i})" id="likeButton" type="button" class="btn bg-dark text-success btn-sm pb-2">Like <i class="fas fa-thumbs-up"></i> </button>
            <span id="likes${i}" class="likes">${likeCounter[i]}</span>
        </div>
    </div>
</div>`;

document.getElementById('row').innerHTML += card;
};
