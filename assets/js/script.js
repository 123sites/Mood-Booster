var jokeBtn = document.getElementById('jokeBtn').addEventListener("click", choice);
var memeBtn = document.getElementById('memeBtn').addEventListener("click", choice);
var choice =

function(choice){
  //  API Links:
  jokeApiKey = "";
  memeApiKey = "IcgIu9A1Tg9S";
  //   https://jokes.one/api/joke/  
  var joke = 'API KEYhttps//api......q=${}....{jokeApiKey}';
  let joke = '';
  //  (has memes and jokes)  https://api-docs.pgamerx.com/
  var meme = 'https//api......q=${}....{memeApiKey}';
  let meme = '';
}


// fetch(choice);{
//   // When click on choice = funny meme or joke.
//   $(choice).on("click", function () {
//     // If choice = joke:
//     if (joke) {
//       // retrieves the text onclick
//       var joke = $(this).text();
//       .then(function (joke) {
//         console.log(function (joke));
      
function get_joke_of_the_day() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
 if (this.readyState == 4 && this.status == 200) {
     // Access the result here
     alert(this.responseText);
 }
  };
  xhttp.open("GET", "https://api.jokes.one/jod/categories", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.setRequestHeader("X-JokesOne-Api-Secret", "YOUR API HERE");
  xhttp.send();
}

get_joke_of_the_day()


        // $("#joke").empty();
        // for (let i = 1; i < ?.list.length; i++) {
        //     if (futureResponse.list[i].dt_txt.includes("12:00:00")) {
        //         var cityInfo = {
        //             date: futureResponse.list[i].dt,
        //             icon: futureResponse.list[i].weather[0].icon,
        //             temp: futureResponse.list[i].main.temp,
        //             wind: futureResponse.list[i].wind.speed,
        //             humidity: futureResponse.list[i].main.humidity
        //         };
      // .then(function (response) {
    // return response.json(jokeApiKey);
    // .then(function (likeDis) {
    //     console.log(likeDis);
    //   })
    })
  
  // If choice = funny meme:
// } else(meme){
//   .then(function (response) {
//   return response.json(meme);
//   .then(function (likeDis) {
//     console.log(meme);
//     // .then(function (meme) {
//     //   console.log(function meme);
//     //   $("#meme").empty();
//     //   for (let i = 1; i < futureResponse.list.length; i++) {
//     //       if (futureResponse.list[i].dt_txt.includes("12:00:00")) {
//     //           var cityInfo = {
//     //               date: futureResponse.list[i].dt,
//     //               icon: futureResponse.list[i].weather[0].icon,
//     //               temp: futureResponse.list[i].main.temp,
//     //               wind: futureResponse.list[i].wind.speed,
//     //               humidity: futureResponse.list[i].main.humidity   
//   })
// }
// },

// $().append(choice);

// // LIKE/DISLIKE

// // likeDis click event & localStorage
// $("#likeDis").on("click", function (event) {
//   event.preventDefault();
//   var like = JSON.parse(localStorage.getItem("likeDis")) || [var dislike =]

//   // Below stores the choice in localStorage
//   localStorage.setItem("choice", JSON.stringify(likeDis));
//   console.log("choice", JSON.stringify(likeDis));

// var likeBtn = document.getElementById('likeBtn')
// var disBtn = document.getElementById('disBtn')
// var getChoice = document.getElementById("?").addEventListener("click", choice);


// // When the user clicks like or dislike:
// $(document).ready(function () {
//   // Retrieves the like/dislike data and stores it into localStorage:
//   var likeDisArr = JSON.parse(localStorage.getItem("getChoice"));
//   // ldArr = like/dislike array
//   if (likeDisArr !== null) {
//     console.log(`likeDisArr localStorage`);
//   }
// });
// })})}

// button.addEventListener('click', getChoice);







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
    // }
// });

