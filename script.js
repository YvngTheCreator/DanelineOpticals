function handleBooking(e) {
e.preventDefault();

const firstName = document.getElementById("firstName").value;
const lastName = document.getElementById("lastName").value;
const phone = document.getElementById("phone").value;
const service = document.getElementById("service").value;
const location = document.getElementById("location").value;
const date = document.getElementById("date").value;
const time = document.getElementById("time").value;
const message = document.getElementById("message").value;

const text =
`New Booking Request - Daneline Opticals

Name: ${firstName} ${lastName}
Phone: ${phone}
Service: ${service}
Location: ${location}
Date: ${date}
Time: ${time}

Notes: ${message}`;

const whatsappURL =
"https://wa.me/27645306050?text=" + encodeURIComponent(text);

window.open(whatsappURL, "_blank");

document.getElementById("bookingForm").reset();
}
function filterProducts(event, category) {

const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".product-card");

buttons.forEach(btn => btn.classList.remove("active"));
event.target.classList.add("active");

cards.forEach(card => {

if(category === "all" || card.dataset.category === category){
card.style.display = "block";
} else {
card.style.display = "none";
}

});

}