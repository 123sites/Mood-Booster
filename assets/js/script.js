// Joke & meme buttons
var jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", jokeChoice);

var memeBtn = document.getElementById("memeBtn");
memeBtn.addEventListener("click", memeChoice);

// If choose joke:
function jokeChoice() {
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
      let h2 = document.createElement("h2");
      h2.textContent = data.joke;
      console.log(data.joke);
      document.querySelector("#display").innerHTML = data.joke;
      document.querySelector(".getChoice").classList.add("hide");
      document.querySelector("#results").classList.remove("hide");
    });
}

// If choose meme:
function memeChoice() {
  let meme = `https://programming-memes-images.p.rapidapi.com/v1/memes`;
  fetch(meme, {
    headers: {
      "X-RapidAPI-Key": "52449e7faemsh20985c2307930f2p15b4a7jsn86daa9a9788f",
      "X-RapidAPI-Host": "programming-memes-images.p.rapidapi.com",
    },
  })
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let img = document.createElement("img");

      img.src = data[Math.floor(Math.random() * data.length)].image;
      console.log(img.meme);
      document.querySelector("#display").appendChild(img);
      document.querySelector(".getChoice").classList.add("hide");
      document.querySelector("#results").classList.remove("hide");
    });
}
// like/dislike Btns clickEvents
var likeDisArray = JSON.parse(localStorage.getItem("likeStore")) || [];

var likeBtn = document.getElementById("likeBtn");
likeBtn.addEventListener("click", like);

var disBtn = document.getElementById("disBtn");
disBtn.addEventListener("click", dis);

// Local storage
function like() {
  var storage = {
    type: "",
    source: "",
  };
  console.log(document.getElementById("display").textContent);
  console.log(document.getElementById("display").children);
  if (document.getElementById("display").children.length) {
    storage.source = document.getElementById("display").children[0].src;
    storage.type = "meme";
    console.log(storage);
  } else {
    storage.source = document.getElementById("display").textContent;
    storage.type = "joke";
    console.log(storage);
  }
  // Get push, from storage
  likeDisArray.push(storage);
  localStorage.setItem("likeStore", JSON.stringify(likeDisArray));
  setTimeout(function (){
    window.location.reload();
  },500);
}
function dis() {
  console.log(`disStore`);
  window.location.reload();
}
