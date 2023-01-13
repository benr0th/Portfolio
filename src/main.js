
var options = document.getElementsByClassName("option");
for (var i = 0; i < options.length; i++) {
  options[i].addEventListener("mouseenter", function() {
    var selectedOption = document.getElementsByClassName("selected")[0];
    selectedOption.classList.remove("selected");
    this.classList.add("selected");
  });
}

let typed = new Typed('#bio', {
  strings: [''],
  typeSpeed: 20,
  loop: false
});
