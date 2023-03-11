const searchButton= document.getElementById("search-btn");
const searchInput = document.getElementById("search-inp");
const container= document.getElementById("container");

searchButton.addEventListener("click",function(){
    window.location.href=`http://localhost:4000/search?search=${searchInput.value}`;
})


