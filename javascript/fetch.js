let oneJoke = document.getElementById("oneJoke");
let allJokes = document.getElementById("twoJokes");

function getOneJoke(){ // Hent JSON
    fetch("https://terjetheteacher.github.io/some-jokes/justJokes.json")
    .then((response) => response.json())
    .then((json) => { 
        console.log(json[1])
    })
}

oneJoke.addEventListener("click", () => {
    getOneJoke()
})

allJokes.addEventListener("click", () => {

})