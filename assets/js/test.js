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
// ABOVE IS DONE!!!!!!!!!!!!!!!!!!!!!




// var displayFavorites = document.getElementById("displayFavorites");
// console.log("var displayFavorites");

// displayFavorites.addEventListener("click", "favoritesBtn");
// console.log("click", "favoritesBtn");



  //  = JSON.parse(localStorage.getItem(like)));
  // document.getItemById("display").like JSON.stringify(likeDisArray));




// var works!
// var favoritesBtn = document.getElementById("favoritesBtn");
// console.log("var favoritesBtn");
// favoritesBtn.addEventListener("click", "likeStore");
// console.log("click", "likeStore");



// function displayFavorites(){
//   if(localStorage.getItem(like) != null){
//   }







// JSON.parse(localStorage.getItem("favorites"));
//     // If there's likes stored in favorites, display it on the screen. 
//     if(localStorage.getItem("likeStore") != null){
//       document.getElementById("").innerHTML = JSON.parse(localStorage.getItem("likeStore")) || [];
//       document.getElementById("").src = JSON.parse(localStorage.getItem("likeStore")) || [];
//     }
//   }
// }


// function favoritesBtn(){
// let favorites = JSON.parse(localStorage.getItem(likeStore));
// console.log(localStorage.setItem);
// favoritesBtn.addEventListener("click", favorites);
// document.querySelector(onclick).classList.add("hide");
// document.querySelector(onload).classList.remove("hide");
// }














// favorites.push(storage);
// localStorage.setItem("favorites", JSON.stringify(likeStore));

// favoritesBtn.addEventListener("click", "display");
// console.log("favoritesBtn.addEventListener");

// function favoritesBtn(){
// window.localStorage.getItem("#favoritesBtn", "display");
// console.log("getItem #favoritesBtn");
// }

// Error
// var favoritesBtn = favoritesBtn.addEventListener("click", localStorage);
// console.log("favoritesBtn.addEventListener")

  // let favoritesBtn = localStorage.getItem(storage);
//   var favoritesBtn = localStorage.getItem("likeStore", JSON.stringify(localStorage));
//   // let getFavorites = JSON.parse(window.localStorage.getItem(storage));
//   // document.getElementById("favoritesBtn").innerHTML = x;

// // Favorites button show upon upload, show top-left, hide after clicked. Show again upon upload.
// // var favoritesBtn = document.getElementById("favoritesBtn");
// // favoritesBtn.addEventListener("click", likeDisArray);
// console.log("var favorites");

// var favoritesBtn = document.getElementById("favoritesBtn");

// favoritesBtn.addEventListener("click", localStorage);

// Get push, from storage
// function favoritesBtn() {
//   document.querySelector(onclick).add("hide");
//   document.querySelector(window.location.reload()).remove("hide");

  // var getFavorites = localStorage.getItem(storage);
  // localStorage.getItem("likeStore", JSON.stringify(storage));
  // let getFavorites = JSON.parse(window.localStorage.getItem(storage));
  // document.getElementById("demo").innerHTML = x;










// Return button shows only after favorites is clicked, show top-left same as favorites.
// Hide button after click return.
// var returnBtn = document.getElementById("returnBtn");
// returnBtn.addEventListener("click", returnBtn);

// function returnBtn() {
//   document.querySelector(onload).classList.remove("hide");
//   document.querySelector(onclick).classList.add("hide");
//   window.location.reload();
//   console.log(returnBtn);
// }
