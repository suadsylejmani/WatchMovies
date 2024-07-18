export function getMovie(id){
    const api = `https://api.themoviedb.org/3/movie/${id}?api_key=3e52e2f5350ae60de5e2fc58e818d2a0`;

    return fetch(api)
    .then(res => res.json())
    .then(data => data)
}
