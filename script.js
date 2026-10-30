const button = document.getElementById("myButton");
const message = document.getElementById("message");

let clickCount = 0;

console.log("My profile page is ready!");

button.addEventListener("click", function() {
    clickCount = clickCount + 1;

    message.textContent = "Hello! Thanks for visiting my profile!";

    console.log("Button clicked:", clickCount);
});
