const requestsModule = function() {
  let fixURL = function(str) {
    let fixedURL = str.replace(/&amp;/g, "&");
    return fixedURL;
  };

  const container = document.getElementById("container");

  let requestAPI = function(api) {
    let oReq = new XMLHttpRequest();

    let oReqFunction = function() {
      let obj = JSON.parse(this.responseText);
      console.log(obj);
      let arr = obj.data.children;

      for (let i = 1; i < arr.length; i++) {
        let objData = obj.data.children[i].data;

        let aTag = document.createElement("a");
        aTag.href = "https://reddit.com/" + objData.permalink;
        aTag.target = "_blank";

        let card = document.createElement("div");
        card.className = "card";

        let imageDiv = document.createElement("div");
        if (objData.preview) {
          imageDiv.style.backgroundImage =
            "url('" + fixURL(objData.preview.images[0].source.url) + "')";
        } else {
          imageDiv.style.backgroundImage =
            "url('https://picsum.photos/223/126')";
        }

        card.appendChild(imageDiv);

        let h3 = document.createElement("h3");
        h3.innerHTML = objData.title;
        card.appendChild(h3);

        let additionalInfo = document.createElement("p");
        additionalInfo.innerHTML =
          "by " +
          objData.author +
          " &middot; " +
          moment.unix(objData.created).fromNow() +
          " &middot; " +
          +objData.ups +
          " Upvotes";
        card.appendChild(additionalInfo);

        let postContent = document.createElement("p");
        postContent.className = "postContent";
        postContent.innerHTML = objData.selftext;

        card.appendChild(postContent);

        aTag.appendChild(card);
        container.appendChild(aTag);
      }
    };

    oReq.addEventListener("load", oReqFunction);

    oReq.open("GET", api);
    oReq.send();
  };

  return {
    requestAPI: requestAPI
  };
};
