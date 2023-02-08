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
// // like/dislike Btns clickEvents
JSON.stringify(likeDisArray);
{
  var likeBtn = document.getElementById("likeBtn");
  likeBtn.addEventListener("click", like);

  var disBtn = document.getElementById("disBtn");
  disBtn.addEventListener("click", dis);

  function like() {
    // Get like array from local storage joke/meme (*data attributes, then push, div ID display textContent/img)
    localStorage.setItem("likeStore");
    console.log(`likeStore`);
  }

  function dis() {
    localStorage.setItem("disStore");
    console.log(`disStore`);
  }
}

// Dis/likeArray: When the user clicks like or dislike,
// it's put into localStorage:
$(document).ready(function () {
  // Retrieves the like/dislike data and stores it into localStorage:
  var likeDisArr = JSON.parse(localStorage.setItem("like"));
  // likeDisArr = like/dislike array
  if (likeDisArr !== null) {
    Storage: var likeDisArr = JSON.parse(localStorage.setItem("dis"));
    console.log(`likeDisArr localStorage`);
  }
});
// window.location.reload()

//   // Below stores the choice in localStorage
//   localStorage.setItem("choice", JSON.stringify(like));
//   console.log("choice", JSON.stringify(dis));
// }

// like/dislike localStorage
//     /* Access image by id and change
//     the display property to block*/
//     document.getElementById('image')
//             .style.display = "block";

//     document.getElementById('memeBtn')
//             .style.display = "none";
// }
