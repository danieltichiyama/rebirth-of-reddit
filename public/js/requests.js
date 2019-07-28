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

      console.log(obj);

      let card = document.createElement("div");
      card.className = "card";

      let imageDiv = document.createElement("div");
      imageDiv.style.backgroundImage =
        "url('" +
        fixURL(obj.data.children[1].data.preview.images[0].source.url) +
        "')";

      card.appendChild(imageDiv);

      let h3 = document.createElement("h3");
      h3.innerHTML = obj.data.children[1].data.title;
      card.appendChild(h3);

      let additionalInfo = document.createElement("p");
      additionalInfo.innerHTML =
        "by " +
        obj.data.children[1].data.author +
        " &middot; " +
        moment.unix(obj.data.children[1].data.created).fromNow() +
        " &middot; " +
        +obj.data.children[1].data.ups +
        " Upvotes";
      card.appendChild(additionalInfo);

      let postContent = document.createElement("p");
      postContent.className = "postContent";
      postContent.innerHTML = obj.data.children[5].data.selftext;

      card.appendChild(postContent);

      container.appendChild(card);
    };

    oReq.addEventListener("load", oReqFunction);

    oReq.open("GET", "https://www.reddit.com/r/fonts.json");
    oReq.send();
  };

  return {
    requestFonts: requestFonts
  };
};
