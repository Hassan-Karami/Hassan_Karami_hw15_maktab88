(async()=>{
    logoutButton = document.getElementById("logout-btn");

    logoutButton.addEventListener("click", () => {
        alert(window.location.search)
        // window.location.href = "http://localhost:4000/auth/login";
    });

})()

