// KEEP BELOW, LINES 1-40 WORKS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// Joke & meme buttons
var jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", jokeChoice);

var memeBtn = document.getElementById("memeBtn");
memeBtn.addEventListener("click", memeChoice);

// If choose joke:
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
      let h2 = document.createElement("h2");
      h2.textContent = data.joke;
      console.log(data.joke);
      document.querySelector("#display").innerHTML = data.joke;
      // document.querySelector("#display").innerHTML="";
      // document.querySelector("#display").append(h2);
      document.querySelector(".getChoice").classList.add("hide");
      document.querySelector("#results").classList.remove("hide");
    });
}

// If choose meme:
function memeChoice() {
  let meme = `https://programming-memes-images.p.rapidapi.com/v1/memes`;
  fetch(meme, {
    headers: {
      'X-RapidAPI-Key': '52449e7faemsh20985c2307930f2p15b4a7jsn86daa9a9788f',
      'X-RapidAPI-Host': 'programming-memes-images.p.rapidapi.com'
    },
  })
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let img = document.createElement("img");
      
      img.src=data[Math.floor(Math.random() * data.length)].image
      console.log(img.meme);
      document.querySelector("#display").appendChild(img);
      document.querySelector(".getChoice").classList.add("hide");
      document.querySelector("#results").classList.remove("hide");
    });
}

// like/dislike localStorage
//     /* Access image by id and change
//     the display property to block*/
//     document.getElementById('image')
//             .style.display = "block";

//     document.getElementById('memeBtn')
//             .style.display = "none";
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// like/dislike Btns clickEvents
$("#likeDis").on("click", function (event) {
  event.preventDefault();
  var like = JSON.parse(localStorage.getItem("likeDis")) || [var dislike =];

  // Below stores the choice in localStorage
  localStorage.setItem("choice", JSON.stringify(likeDis));
  console.log("choice", JSON.stringify(likeDis));
}

var likeBtn = document.getElementById("likeBtn");
likeBtn.addEventListener("click", likeChoice);

var disBtn = document.getElementById("disBtn");
disBtn.addEventListener("click", disChoice);

var getChoice = document.getElementById("#getChoice").addEventListener("click", choice);

// When the user clicks like or dislike:
$(document).ready(function () {
  // Retrieves the like/dislike data and stores it into localStorage:
  var likeDisArr = JSON.parse(localStorage.getItem("getChoice"));
  // likeDisArr = like/dislike array
  if (likeDisArr !== null) {
    console.log(`likeDisArr localStorage`);
  }
});
