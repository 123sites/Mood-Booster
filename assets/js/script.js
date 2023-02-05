var jokeBtn = document.getElementById("jokeBtn");
  document.addEventListener("click", choice);

var memeBtn = document.getElementById("memeBtn")
  document.addEventListener("click", choice);

function myFunction() {
  document.createElement("BUTTON");
  document.createTextNode("Click me");
  // x.appendChild(t);
  // document.body.appendChild(x);
}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function choice() {
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


  // FIXES 429 ERROR???
//   function handleErrors(response) {
//     if (!response.ok) {
//         throw Error(response.statusText);
//     }
//     return response;
// }
// fetch("http://httpstat.us/500")
//     .then(handleErrors)
//     .then(response => console.log("ok") )
//     .catch(error => console.log(error) );



  // fetch("http://httpstat.us/500")
  //   .then(function(response) {
  //       if (!response.ok) {
  //           throw Error(response.statusText);
  //       }
  //   })



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  let joke = `https://humor-jokes-and-memes.p.rapidapi.com/jokes/search?exclude-tags=nsfw&keywords=rocket&min-rating=7&include-tags=one_liner&number=3&max-length=200`;
  fetch(joke, {
    params: {exclude: "nsfw, insults, jewish, religious, dark, racist, sexual, sexist,"},
    headers: {
      'X-RapidAPI-Key': '9caa14e070msh757ef190f56b5f8p137339jsn29e91c3f8df1',
      'X-RapidAPI-Host': 'humor-jokes-and-memes.p.rapidapi.com'
    },
  }).then(function (response) {
    console.log(response);
    return response.json()
  }).then(function(data){
    console.log(data);
  },)

let meme = `https://reddit-meme.p.rapidapi.com/memes/top`;
fetch(meme, {
      headers: {
        "x-rapidAPI-key": "e4424d5624mshff482b6755fbc8ep172344jsn21cfbb7115c2",
        "x-rapidAPI-host": "reddit-meme.p.rapidapi.com",

      },
  }).then(function (response) {
    console.log(response);
    return response.json()
  }).then(function(data){
    console.log(data);
  },)
}

  localStorage.clear();

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


choice()


// KEEP & MODIFY OR DELETE??????????????
// var badRequestUrl = 'https://api.github.com/unicorns';
// var redirectUrl = './404.html';

// fetch(badRequestUrl).then(function (response) {
//   // Check the response value is equal to 404.
//   if (response.status === 404) {
//     // If the page is not on the 404 page, redirect to it.
//     setTimeout(() => {
//       document.location.replace(redirectUrl);
//     }, 2000);
//   } else {
//     return response.json();
//   }
// });


// fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5', {
//   // The browser fetches the resource from the remote server without first looking in the cache.
//   // The browser will then update the cache with the downloaded resource.
//   cache: 'reload',
// })









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














  // jokeApiKey = "IcgIu9A1Tg9S";
  // https://jokes.one/api/joke/
  // let joke = `https//api......q=${}....${jokeApiKey}`;

  //  (has memes and jokes)    url: 'https://random-stuff-api.p.rapidapi.com/joke',
  // let joke = `https://random-stuff-api.p.rapidapi.com/joke/random`;

  // fetch(joke, {
  //   params: {exclude: "dirty, men, black, sex, sarcasm, insults, blonde, christian, easter, animal, rude, attitude, life,"},
  //   headers: {
  //     Authorization: "IcgIu9A1Tg9S",
  //     "x-rapidapi-host": "random-stuff-api.p.rapidapi.com",
  //     "x-rapidapi-key": "52449e7faemsh20985c2307930f2p15b4a7jsn86daa9a9788f",
  //   },
  // }).then(function (response) {
  //   console.log(response);
  //   return response.json()
  // }).then(function(data){
  //   console.log(data);
  // },)

  // let joke = `https://random-stuff-api.p.rapidapi.com/joke/random`;
  // fetch(url, options)
// 	.then(res => res.json())
// 	.then(json => console.log(json))
// 	.catch(err => console.error('error:' + err));
// }
// }
//   let meme = `https://programming-memes-images.p.rapidapi.com/v1/memes`;
//   fetch(meme, {
//     params: {}
//   let options = {
// 	headers: {
// 		'X-RapidAPI-Key': '52449e7faemsh20985c2307930f2p15b4a7jsn86daa9a9788f',
// 		'X-RapidAPI-Host': 'programming-memes-images.p.rapidapi.com'
// 	}
// };

// fetch('https://programming-memes-images.p.rapidapi.com/v1/memes', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://programming-memes-images.p.rapidapi.com/v1/memes",
// 	"method": "GET",
// 	"headers": {
// 		"X-RapidAPI-Key": "52449e7faemsh20985c2307930f2p15b4a7jsn86daa9a9788f",
// 		"X-RapidAPI-Host": "programming-memes-images.p.rapidapi.com"
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// }); 


// let meme = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '52449e7faemsh20985c2307930f2p15b4a7jsn86daa9a9788f',
// 		'X-RapidAPI-Host': 'reddit-meme.p.rapidapi.com'
// 	}
// };

// fetch('https://reddit-meme.p.rapidapi.com/memes/trending', meme)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


// },

// fetch(choice);{
//   // When click on choice = funny meme or joke.
//   $(choice).on("click", function () {
//     // If choice = joke:
//     if (joke) {
//       // retrieves the text onclick
//       var joke = $(this).text();
//       .then(function (joke) {
//         console.log(function (joke));

// function get_joke_of_the_day() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       // Access the result here
//       alert(this.responseText);
//     }
//   };
//   xhttp.open("GET", "https://api.jokes.one/jod/categories", true);
//   xhttp.setRequestHeader("Content-type", "application/json");
//   xhttp.setRequestHeader("X-JokesOne-Api-Secret", "YOUR API HERE");
//   xhttp.send();
// }

// get_joke_of_the_day();