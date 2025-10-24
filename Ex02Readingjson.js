const data = require('./movies.json');
for(const movie of data){
    console.log(`${movie.movie_name} directed by ${movie.director}`)
}