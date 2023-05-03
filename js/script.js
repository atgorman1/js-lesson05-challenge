var button = document.querySelector(".show-cat");
var cat = document.querySelector(".cat");
button.addEventListener("click", function () {
  if (cat.classList.contains("show")) {
    cat.classList.remove("show");
    button.innerText = "Hereeeee Kitty!";
    button.classList.add("disappear");
  } else {
    cat.classList.add("show");
    button.innerText = "Time to leave, kitty!";
    button.classList.remove("disappear");
  }
});
