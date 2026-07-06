const menuButton = document.getElementById("menuButton");

const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", function(){

    navMenu.classList.toggle("active");

    if(navMenu.classList.contains("active")){
        menuButton.innerHTML = "✕";
    }else{
        menuButton.innerHTML = "☰";
    }

});
const navLinks = document.querySelectorAll(".navLinks a");

navLinks.forEach(link => {

    link.addEventListener("click", function(){

        navMenu.classList.remove("active");

        menuButton.innerHTML = "☰";

    });

});
window.addEventListener("scroll", function(){

    navMenu.classList.remove("active");

    menuButton.innerHTML = "☰";

});
const popup = document.getElementById("bookingPopup");
const heroBookButton = document.getElementById("heroBookButton");

heroBookButton.addEventListener("click", function(e) {
    e.preventDefault();
    popup.style.display = "flex";
});
const bookButton = document.getElementById("bookButton");

bookButton.addEventListener("click", function(e){

    e.preventDefault();

    popup.style.display = "flex";

});
const closePopup = document.getElementById("closePopup");

closePopup.addEventListener("click", function () {
    popup.style.display = "none";
});
const submitBooking = document.getElementById("submitBooking");

submitBooking.addEventListener("click", function () {

    const name = document.querySelector('input[type="text"]');
    const phone = document.querySelector('input[type="tel"]');

    if(name.value.trim() === "" || phone.value.trim() === ""){
        alert("Please enter your name and phone number.");
        return;
    }

    popup.style.display = "none";

    alert("✅ Thank you! We'll contact you shortly.");

});
