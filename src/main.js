document.addEventListener("keydown", function(event) {
  var selectedOption = document.getElementsByClassName("selected")[0];
  if (document.getElementById("start-button").style.display === "none") {
    if (event.code === "ArrowDown") {
      var nextOption = selectedOption.nextElementSibling;
      if (nextOption) {
        selectedOption.classList.remove("selected");
        nextOption.classList.add("selected");
      }
    } else if (event.code === "ArrowUp") {
      var prevOption = selectedOption.previousElementSibling;
      if (prevOption) {
        selectedOption.classList.remove("selected");
        prevOption.classList.add("selected");
      }
    }
    if (event.code === "Enter") {
      document.getElementsByClassName("selected")[0].click();
    }
  }
});

var options = document.getElementsByClassName("option");
for (var i = 0; i < options.length; i++) {
  options[i].addEventListener("mouseenter", function() {
    var selectedOption = document.getElementsByClassName("selected")[0];
    selectedOption.classList.remove("selected");
    this.classList.add("selected");
  });
}