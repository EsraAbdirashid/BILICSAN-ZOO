// const menuBtn = document.querySelector(".menu-btn");
// const navLinks = document.querySelector(".nav-links");
// menuBtn.addEventListener("click", () => {
//         navLinks.classList.toggle("active");
// });


const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const menuIcon = document.querySelector(".menu-btn i");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
    } else {
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    }
});



// Animal Filter
const filterButtons = document.querySelectorAll(".animal-filter button");
const animalCards = document.querySelectorAll(".animal-card");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {

        // Active button
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        animalCards.forEach((card) => {

            if (filter === "all" || card.dataset.category === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });
});


// ===== Ticket Booking Modal =====

const ticketModal = document.getElementById("ticketModal");
const closeModal = document.querySelector(".close-modal");

// Navbar Buy Tickets button
const navTicketBtn = document.querySelector(".ticket-btn");

// All Buy Now buttons
const buyNowBtns = document.querySelectorAll(".ticket-card .button");

// Open modal from navbar
navTicketBtn.addEventListener("click", (e) => {
    e.preventDefault();
    ticketModal.classList.add("active");
});

// Open modal from ticket cards
buyNowBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        ticketModal.classList.add("active");
    });
});

// Close with X
closeModal.addEventListener("click", () => {
    ticketModal.classList.remove("active");
});

// Close when clicking outside
window.addEventListener("click", (e) => {
    if (e.target === ticketModal) {
        ticketModal.classList.remove("active");
    }
});

const bookingForm = document.querySelector(".booking-form");

bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("✅ Ticket booked successfully!");

    bookingForm.reset();

    ticketModal.classList.remove("active");
});

// ===== Back To Top Button =====

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ===== Contact Form =====

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("✅ Message sent successfully!");

    contactForm.reset();

});
