// console.log('hello world')

const message = document.querySelector("#message")

const addMovie = (event) => {
    event.preventDefault();
    const inputField = document.querySelector("#input")
    const movie = document.createElement('li');
    const movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie)

    movie.appendChild (movieTitle);
    const deleteBin = document.createElement('button');
    deleteBin.textContent = 'x';
    
    deleteBin.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBin);
    
    document.querySelector('ul').appendChild(movie);
    inputField.value = "" ;
};

document.querySelector('form').addEventListener('submit', addMovie)

const deleteMovie = (event) => {
     event.target.parentNode.remove()
     message.textContent = "Movie don gone. It's beenabsolutely Yeeted out and good luck findin it again.";
}


const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')


}