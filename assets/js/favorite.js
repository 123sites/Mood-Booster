// Read into localStorage and get all the jokes.
var likeStore = JSON.parse(localStorage.getItem("likeStore")) || [];

if (likeStore) {
  var jokesFromLS = likeStore
    .filter(function (item) {
      if (item.type == "joke") {
        return item;
      }
    })
    .map(function (item) {
      return item.source;
    });
  console.log(jokesFromLS);

  var displayJokeStorage = document.querySelector("#displayJokeStorage");
  for (i = 0; i < jokesFromLS.length; i++) {
    var jokeP = document.createElement("p");
    jokeP.textContent = jokesFromLS[i];
    displayJokeStorage.append(jokeP);
  }

  var memesFromLS = likeStore
    .filter(function (item) {
      if (item.type == "meme") {
        return item;
      }
    })
    .map(function (item) {
      return item.source;
    });
  console.log(memesFromLS);

  // Read into localStorage and get all the memes.

  var displayMemeStorage = document.querySelector("#displayMemeStorage");
  for (i = 0; i < memesFromLS.length; i++) {
    var memeDisplay = document.createElement("img");
    memeDisplay.src = memesFromLS[i];
    displayMemeStorage.append(memeDisplay);
  }
}
