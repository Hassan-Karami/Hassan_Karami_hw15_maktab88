const searchButton= document.getElementById("search-btn");
const searchInput = document.getElementById("search-inp");
const container= document.getElementById("container");
const anchors=  document.getElementsByTagName("a");
const aboutAnchor = document.getElementById("about-anchor");
const homeAnchor = document.getElementById("home-anchor");
const contactAnchor = document.getElementById("contact-anchor");

    for (let i = 0; i < anchors.length; i++) {
      anchors[i].className = "";
    }

    for (let i = 0; i < anchors.length; i++) {
      anchors[i].className = "";
    }

  searchButton.addEventListener("click", function () {
    window.location.href = `http://localhost:4000/search?search=${searchInput.value}`;
  });


switch (window.location.search.split("=")[1]) {
  case "about":
    aboutAnchor.className = "active";
    break;

  case "home":
    homeAnchor.className = "active";
    break;

  case "contact":
    contactAnchor.className = "active";
    break;

    default: 
    homeAnchor.className="active";
}

if (window.location.search.split("=")[0].slice(1) === "search") {
  for (let i = 0; i < anchors.length; i++) {
    anchors[i].className = "";
  }
}