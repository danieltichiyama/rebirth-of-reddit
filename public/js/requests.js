const requestsModule = function() {
  let fixURL = function(str) {
    let fixedURL = str.replace(/&amp;/g, "&");
    return fixedURL;
  };

  const container = document.getElementById("container");

  let requestFonts = function() {
    let oReq = new XMLHttpRequest();

    let oReqFunction = function() {
      let obj = JSON.parse(this.responseText);

      let card = document.createElement("div");
      card.className = "card";

      let imageDiv = document.createElement("div");
      imageDiv.style.backgroundImage =
        "url('" +
        fixURL(obj.data.children[1].data.preview.images[0].source.url) +
        "');";

      card.appendChild(imageDiv);
      container.appendChild(card);

      console.log(obj);
      console.log(obj.data.children[1].data.title);
      console.log(
        fixURL(obj.data.children[1].data.preview.images[0].source.url)
      );
      console.log(obj.data.children[1].data.author);
      console.log(moment.unix(obj.data.children[1].data.created).fromNow());
      console.log(obj.data.children[1].data.ups);
      console.log(obj.data.children[5].data.selftext);
    };

    oReq.addEventListener("load", oReqFunction);

    oReq.open("GET", "https://www.reddit.com/r/fonts.json");
    oReq.send();
  };

  return {
    requestFonts: requestFonts
  };
};
