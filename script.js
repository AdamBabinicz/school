document.querySelector(".card-btn").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let check1 = document.querySelector(".check1");
let check2 = document.querySelector(".check2");
let check3 = document.querySelector(".check3");

check1.addEventListener("click", () => {
  box1.classList.toggle("open");
});
check2.addEventListener("click", () => {
  box2.classList.toggle("open");
});
check3.addEventListener("click", () => {
  box3.classList.toggle("open");
});
// let check = document.querySelector(".check");
// let box = document.querySelectorAll(".box");

// box.forEach(el => {
//   el.addEventListener("click", () => {
//     document.querySelector(".container").classList.remove("open");

//     el.classList.add("open");
//   });
// });
