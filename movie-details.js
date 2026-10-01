const movieDetail = document.querySelector("#movie-detail")
const params = new URLSearchParams(location.search)
const imdbid = params.get("id");

if (imdbid) {
    searchMovie(imdbid.trim())
}




async function searchMovie(movieName) {

    let response = await fetch(`https://www.omdbapi.com/?apikey=1aab1d54&i=${encodeURIComponent(movieName)}`);
    // s means search karna chathe hai
    let data = await response.json()
    console.log(data);
    displayMovie(data)

}

function displayMovie(data) {
    movieDetail.innerHTML = `   <div>
            <img src=${data.Poster}>
        </div>
        <div>
            <h2>${data.Title}</h2>
            <section>
                <p>${data.Released}</p>
                <p>${data.Rated}</p>
                <p>${data.Runtime}</p>
                <p>${data.Genre}</p>
                <p>${data.imdbRating}/10</p>
            </section>
            <div>
                <p>Plot Overview</p>
                <p>${data.Plot}</p>
            </div>

            <div>
                <section>
                    <p>Director</p>
                    <p>${data.Director}</p>
                </section>
                <section>
                    <p>Writer</p>
                    <p>${data.Writer}</p>
                </section>

                <div>
                    <p>Actors</p>
                    <p>${data.Actors}</p>
                </div>

                 <section>
                    <p>Language</p>
                    <p>${data.Language}</p>
                </section>
                <section>
                    <p>Country</p>
                    <p>${data.Country}</p>
                </section>

            </div>
            <button>
    <a href=https://www.imdb.com/title/${data.imdbID}  target="_blank">View on IMDb</a>
</button>
        </div>`

}
