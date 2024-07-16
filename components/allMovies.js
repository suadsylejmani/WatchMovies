export const getMovies = ({page}) => {
    const api = `https://api.themoviedb.org/3/discover/movie?api_key=3e52e2f5350ae60de5e2fc58e818d2a0${(page == undefined) ? '' : `&page=${page}`}`
    
    return fetch(api)
    //We take a response from the api than we convert that data to JSON or we can say that we parse it to JSON.
    .then(response => response.json())
    .then(data => data) // Here we take the results that we take from the API, we can check through  console.log to see if the API is called correctly.
}


export const showMovies = (movies, limit) => {
    
    //Slice(take the number we want) movies to a number we decide. So in homepage 0 to 4(or more) it will  display that number of movies.
    const latest_movies = movies.slice(0, limit)
    
    //Style the div
    let html = `<div class="row">`

    for(let movie of latest_movies){
        const img = (movie.backdrop_path == null) ? './assets/img/noImage.png' : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`

        html += 
        `<div class="col-3">
            <div class="card mb-4">
                <img src="${img}" class="card-img-top" alt="${movie.original_title}">
                <div class="card-body">
                    <h5 class="card-title">${movie.original_title}</h5>
                    <div class="d-flex justify-content-between align-items-center">
                    <p class="card-text"><i class="bi bi-fire"></i> ${movie.popularity}
                        </br>
                        <i class="bi bi-bar-chart"s></i> ${movie.vote_average}
                    </p>
                    <a href="movie.html?id=${movie.id}" class="btn btn-sm btn-outline-secondary"><i class="bi bi-eye"></i></a>
                    </div>
                </div>
            </div>
        </div>`
    }

    html += `</div>` //Close the div

    return html;
}