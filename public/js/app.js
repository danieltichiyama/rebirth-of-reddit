"use strict";

const requests = requestsModule();

let fontsAPI = "https://www.reddit.com/r/fonts.json";
let rickAndMortyAPI = "https://www.reddit.com/r/rickandmorty.json";
let foodPornAPI = "https://www.reddit.com/r/foodporn.json";
let stdAPIurl = "https://www.reddit.com/r/";
let APIarr = [
  "Design",
  "typography",
  "logodesign",
  "CrappyDesign",
  "EarthPorn"
];

let container = document.getElementById("container");

requests.requestAPI(fontsAPI);

const fonts = document.getElementById("fonts");
const rickAndMorty = document.getElementById("rickAndMorty");
const foodPorn = document.getElementById("foodPorn");
const random = document.getElementById("random");

fonts.addEventListener("click", function() {
  container.innerHTML = "";
  requests.requestAPI(fontsAPI);
});
rickAndMorty.addEventListener("click", function() {
  container.innerHTML = "";
  requests.requestAPI(rickAndMortyAPI);
});

foodPorn.addEventListener("click", function() {
  container.innerHTML = "";
  requests.requestAPI(foodPornAPI);
});

random.addEventListener("click", function() {
  let randomNumber = Math.floor(Math.random() * APIarr.length);
  container.innerHTML = "";
  requests.requestAPI(stdAPIurl + APIarr[randomNumber] + ".json");
});

window.addEventListener("scroll", function() {
  if (this.scrollY >= document.body.clientHeight - this.innerHeight) {
    requests.loadNext();
  }
});

//add func to open a card in the website, new div, animated
//add func to search for a subreddit
//add a loading screen for when the user reaches the bottom of the page
//add a `top` button for quick navigation
//add a save card feature to save a card to a list
