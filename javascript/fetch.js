const oneJoke = document.getElementById("oneJoke");
const inOrder = document.getElementById("inOrder");
const allJokes = document.getElementById("twoJokes");
const jokeText = document.getElementById("jokeText")

let jsonFile = null; // JSON
let length = 0; // Amount of entries within the JSON

function getJokes(){ // Get JSON with a Fetch Request
    fetch("https://terjetheteacher.github.io/some-jokes/justJokes.json")
    .then((response) => response.json()) // turn the response into a json 
    .then((json) => { // use the json
        length = Object.keys(json).length; // Get the amount of keys in the json Object
        jsonFile = json; // Save the json to a Global variable 
    })
}

function randomizeJoke(){
    let random = Math.floor(Math.random() * (length)) + 1 // Get a random number between 1 and 11
    let joke = jsonFile[random] // set the joke
    return joke
}

document.addEventListener("DOMContentLoaded", () => {
    getJokes();
})

oneJoke.addEventListener("click", () => {
    jokeText.innerHTML = randomizeJoke()
})

allJokes.addEventListener("click", () => {
    
})

let clicked = 1;
inOrder.addEventListener("click", () => {
    if(clicked == length){
        clicked = 1
    } 
    else{ 
        clicked += 1;
    }

})