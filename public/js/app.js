"use strict";

const requests = requestsModule();

let fontsAPI = "https://www.reddit.com/r/fonts.json";
let rickAndMortyAPI = "https://www.reddit.com/r/rickandmorty.json";
let foodPornAPI = "https://www.reddit.com/r/foodporn.json";

let container = document.getElementById("container");

requests.requestAPI(fontsAPI);

const fonts = document.getElementById("fonts");
const rickAndMorty = document.getElementById("rickAndMorty");
const foodPorn = document.getElementById("foodPorn");

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

let scrolling = false;

window.addEventListener("scroll", function() {
  if (this.scrollY >= document.body.clientHeight - this.innerHeight - 100) {
    scrolling = true;

    setInterval(function() {
      if (scrolling) {
        scrolling = false;
        requests.loadNext();
      }
    }, 1000);
  }
});
