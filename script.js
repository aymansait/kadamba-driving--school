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

submitBooking.addEventListener("click", async function () {

    const name = document.getElementById("name");
    const phone = document.getElementById("phone");
    const vehicle = document.getElementById("vehicle");
    const time = document.getElementById("time");

    if (
        name.value.trim() === "" ||
        phone.value.trim() === ""
    ) {
        alert("Please enter your name and phone number.");
        return;
    }

    try {

        const { addDoc, collection } = await import(
            "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js"
        );
    
        await addDoc(
            collection(window.db, "bookings"),
            {
                name: name.value,
                phone: phone.value,
                vehicle: vehicle.value,
                preferredTime: time.value,
                submittedAt: new Date()
            }
        );
    
        popup.style.display = "none";
        alert("✅ Booking submitted successfully!");
    
    } catch (error) {
    
        console.error(error);
        alert("❌ Error saving booking.");
    
    }

});
