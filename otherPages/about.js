let home = document.querySelector("#home");
let myName = document.querySelector("#my-name");
home.addEventListener("mouseover", function () {
  myName.innerText = "Go Back to Home";
});

home.addEventListener("mouseout", function () {
  myName.innerText = "Haiquan Patrick";
});
