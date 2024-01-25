let add = document.querySelector("#add");
let substract = document.querySelector("#substract");
let reset = document.querySelector("#reset");
let output = document.querySelector("#output");

output.innerHTML = localStorage.getItem("counter");

add.addEventListener("click", () => {
  localStorage.setItem("counter", parseInt(localStorage.getItem("counter")) + 1);
  output.innerHTML = localStorage.getItem("counter");
});

substract.addEventListener("click", () => {
  localStorage.setItem("counter", parseInt(localStorage.getItem("counter")) - 1);
  output.innerHTML = localStorage.getItem("counter");
});

reset.addEventListener("click", () => {
  localStorage.setItem("counter", 0);
  output.innerHTML = localStorage.getItem("counter");
});
