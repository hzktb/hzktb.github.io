let about = document.querySelector("#about");
let projects = document.querySelector("#projects");
let contact = document.querySelector("#contact");

about.addEventListener("mouseover", function () {
  this.innerText = "About";
});
about.addEventListener("mouseout", function () {
  this.innerText = "Hi, I am";
});

projects.addEventListener("mouseover", function () {
  this.innerText = "Projects";
});

projects.addEventListener("mouseout", function () {
  this.innerText = "Haiquan Patrick";
});

contact.addEventListener("mouseover", function () {
  this.innerText = "Contacts";
});

contact.addEventListener("mouseout", function () {
  this.innerText = "Zheng";
});
