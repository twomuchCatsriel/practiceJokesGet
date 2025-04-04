const oneJoke = document.getElementById("oneJoke");
const inOrder = document.getElementById("inOrder");
const allJokes = document.getElementById("twoJokes");
const jokeText = document.getElementById("jokeText");
const addText = document.getElementById("addText");

let jsonFile = null; // JSON
let length = 0; // Amount of entries within the JSON

function getJokes(){ // Get JSON with a Fetch Request
    fetch("https://terjetheteacher.github.io/some-jokes/justJokes.json")
    .then((response) => response.json()) // turn the response into a json 
    .then((json) => { // use the json
        length = Object.keys(json).length; // Get the amount of keys in the json Object
        jsonFile = json; // Save the json to a Global variable 

        createList()
    })
}

function createList(){
    for(let i = 1; i < length; i++){ // Write the list of all the jokes
        const newP = document.createElement("p");
        newP.innerHTML = jsonFile[i]
        console.log(":D")
        addText.appendChild(newP)
    }
}

function stateOfJokes(state){
    if (state == true){ // Hide or show the jokeText div
        jokeText.style.display = "inline"
        addText.style.display = "none"
    } else {
        jokeText.style.display = "none"
        addText.style.display = "inline"
    }
}

function randomizeJoke(){
    let random = Math.floor(Math.random() * (length)) + 1 // Get a random number between 1 and 11
    let joke = jsonFile[random] // set the joke
    return joke
}

document.addEventListener("DOMContentLoaded", () => {
    getJokes();
    addText.style.display = "none"
})

oneJoke.addEventListener("click", () => {
    jokeText.innerHTML = randomizeJoke()
    stateOfJokes(true)
})

allJokes.addEventListener("click", () => {
    stateOfJokes(false)


})

let clicked = 0;
inOrder.addEventListener("click", () => { 
    stateOfJokes(true)

    if(clicked == length){ // Loop through the object
        clicked = 1
    } 
    else{ 
        clicked += 1;
    }

    jokeText.innerHTML = jsonFile[clicked]

})