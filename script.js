const menuButton = document.getElementById("menuButton");

const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", function(){

    navMenu.classList.toggle("active");

});
const popup = document.getElementById("bookingPopup");
const bookButton = document.getElementById("bookButton");

bookButton.addEventListener("click", function(e){

    e.preventDefault();

    popup.style.display = "flex";

});
