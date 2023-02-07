// KEEP BELOW, LINES 1-40 WORKS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// Joke & meme buttons
var jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", jokeChoice);

var memeBtn = document.getElementById("memeBtn");
memeBtn.addEventListener("click", memeChoice);

function jokeChoice() {
  // let joke = `https://sv443.net/jokeapi/v2/?ref=apilist.fun#safe-mode`;

  let joke = `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`;
  fetch(joke, {
    params: {
      exclude:
        "nsfw, insults, jewish, religious, dark, racist, sexual, sexist,",
    },
  })
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let h2=document.createElement("h2");
      h2.textContent=data.joke;
      console.log(data.joke);
      document.querySelector("#display").innerHTML=data.joke;
      // document.querySelector("#display").innerHTML="";
      // document.querySelector("#display").append(h2);
      document.querySelector(".getChoice").classList.add("hide");
      document.querySelector("#results").classList.remove("hide");
    });
}

function memeChoice (){
  let meme = `https://reddit-meme.p.rapidapi.com/memes/top`;
  fetch(meme, {
    headers: {
      "x-rapidAPI-key": "e4424d5624mshff482b6755fbc8ep172344jsn21cfbb7115c2",
      "x-rapidAPI-host": "reddit-meme.p.rapidapi.com",
    },
  })
    .then(function (response) {
      console.log(response);
      return response.json();
    })
  }
