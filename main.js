const display = document.querySelector(".display");
const images = document.querySelectorAll("img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let count = 0;
let width = images[0].clientWidth;

prev.addEventListener("click", () => {
    count--;
    display.style.transition = "0.5s ease-out";
    display.style.transform = `translateX(${-width * count}px)`;
});
next.addEventListener("click", () => {
    count++;
    display.style.transition = "0.5s ease-out";
    display.style.transform = `translateX(${-width * count}px)`;
});

display.addEventListener("transitionend", () => {
    if (images[count].id == "first") {
        count = images.length - count;
        display.style.transition = "none";
        display.style.transform = `translateX(${-width * count}px)`;
    }
    if (images[count].id == "last") {
        count = images.length - 2;
        display.style.transition = "none";
        display.style.transform = `translateX(${-width * count}px)`;
    }
});
