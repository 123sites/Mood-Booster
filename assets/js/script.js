var jokeBtn = document.getElementById('jokeBtn').addEventListener("click", choice);
var memeBtn = document.getElementById('memeBtn').addEventListener("click", choice);

function (choice) {
  //  API Links:
  jokeApiKey = "";
  memeApiKey = "";
  //   https://jokes.one/api/joke/  
  var joke = 'https//api......q=${}....{jokeApiKey}';
  let joke = '';
  //  (has memes and jokes)  https://api-docs.pgamerx.com/
  var meme = 'https//api......q=${}....{memeApiKey}';
  let meme = '';
}

fetch(choice){
  // When click on choice = funny meme or joke.
  $(choice).on("click", function () {
    // If choice = joke:
    if (joke) {
      // retrieves the text onclick
      var joke = $(this).text();
      console.log(joke);
      // .then(function (response) {
    // return response.json(jokeApiKey);
    .then(function (likeDis) {
        console.log(likeDis);
      })
    })
  
  // If choice = funny meme:
} else (meme){
  .then(function (response) {
  return response.json(meme);
  .then(function (likeDis) {
    console.log(meme);
  })
}
}

$().append(choice);

// likeDis click event & localStorage
$("#likeDis").on("click", function (event) {
  event.preventDefault();
  var like = JSON.parse(localStorage.getItem("likeDis")) || [var dislike =]


  // Below stores the choice in localStorage
  localStorage.setItem("choice, JSON.stringify(likeDis));
  console.log("choice, JSON.stringify(likeDis));
});

var likeBtn = document.getElementById('likeBtn')
var disBtn = document.getElementById('disBtn')
var btnChoice = document.getElementById("btnChoice").addEventListener("click", choice);


// When the user clicks like or dislike:
$(document).ready(function () {
  // Retrieves the like/dislike data and stores it into localStorage:
  var likeDisArr = JSON.parse(localStorage.getItem("btnChoice"));
  // ldArr = like/dislike array
  if (likeDisArr !== null) {
    console.log(`likeDisArr localStorage`);
  }
});

// Below is for getting to the site and accessing jokes/memes in localStorage.
// function loadUp() {
// JSON.parse(localStorage.getItem("joke")) || []

//       $("#searchHistory").append(searchedCity);
//     }
//   }
// }
// loadUp();

// // Get the input field
// var input = document.getElementById("enterCity");
// // Execute a function when the user presses a key on the keyboard
// input.addEventListener("keypress", function (event) {
//   // If the user presses the "Enter" key on the keyboard
//   if (event.key === "Enter") {
//     // Cancel the default action, if needed
//     event.preventDefault();
//     // Trigger the button element with a click
//     document.getElementById("searchBtn").click();
//   }
// });

