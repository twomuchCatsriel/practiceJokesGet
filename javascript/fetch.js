const oneJoke = document.getElementById("oneJoke");
const inOrder = document.getElementById("inOrder");
const allJokes = document.getElementById("twoJokes");
const jokeText = document.getElementById("jokeText");
const addText = document.getElementById("addText");

let jsonFile = null; // JSON
let length = 0; // Amount of entries within the JSON

function getJokes(){ // Get JSON with a Fetch Request
    fetch("https://terjetheteacher.github.io/some-jokes/jokes.json")
    .then((response) => response.json()) // turn the response into a json 
    .then((json) => { // use the json
        length = Object.keys(json.jokes).length; // Get the amount of keys in the json Object
        jsonFile = json; // Save the json to a Global variable 

        createList()
    })
}

function createList(){
    for(let i = 0; i < length; i++){ // Write the list of all the jokes
        const newP = document.createElement("p");
        newP.innerHTML = jsonFile.jokes[i].joke
        console.log(":D")
        addText.appendChild(newP)
    }
}

function stateOfJokes(state){
    if (state == true){ // Hide or show the jokeText div and addText div
        jokeText.style.display = "inline"
        addText.style.display = "none"
    } else {
        jokeText.style.display = "none"
        addText.style.display = "inline"
    }
}

function randomizeJoke(){
    let random = Math.floor(Math.random() * (length) + 1) // Get a random number between 1 and 11
    let joke = jsonFile.jokes[random].joke // set the joke
    return joke
}

document.addEventListener("DOMContentLoaded", () => { // Get the jokes when the document is loaded 
    getJokes(); 
    addText.style.display = "none" // hide addText by default 
})

oneJoke.addEventListener("click", () => {
    jokeText.innerHTML = randomizeJoke() // Set the joke to a random joke
    stateOfJokes(true)
})

allJokes.addEventListener("click", () => {
    stateOfJokes(false) // Show addText, hide Jokes
})

let clicked = 0;
inOrder.addEventListener("click", () => { //
    stateOfJokes(true)

    if(clicked == length){ // Loop through the different keys, starting on 1 and resetting on 11.
        clicked = 1
    } 
    else{ 
        clicked += 1;
    }

    jokeText.innerHTML = jsonFile.jokes[clicked].joke

})