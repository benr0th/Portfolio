function hideOptions() {
  hideElement("options");
  showElement("back-button", "");
}

function hideElement(element) {
  document.getElementById(element).style.display = "none";
}

function showElement(element, style) {
  document.getElementById(element).style.display = style;
}

function optionSelect(option) {
  if (option === "start") {
    hideElement("start-button");
    hideElement("press-start");
    showElement("options", "block");
  }
  else if (option === "back") {
    showElement("options", "block");
    hideElement("back-button");
    hideElement("editing");
    hideElement("gameDev");
    hideElement("programming");
  }
  else if (option === "editing") {
    hideOptions();
    showElement("editing", "block");
  }
  else if (option === "gameDev") {
    hideOptions();
    showElement("gameDev", "grid");
    showElement("gameDev-1", "inline-block");
  }
  else if (option === "programming") {
    hideOptions();
    showElement("programming", "grid");
    showElement("programming-1", "inline-block");
    showElement("programming-2", "inline-block");
    showElement("programming-3", "inline-block");
  }
}

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

let typed = new Typed('#bio', {
  strings: ['Hi there my name is Ben I like to code and learn things^1000 <br> The things I learn are pretty cool sometimes\n'],
  typeSpeed: 20,
  loop: false
});

