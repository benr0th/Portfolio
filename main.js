function hideOptions() {
  hideElement("options");
  showElement("back-button", "block");
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
    showElement("gameDev", "block");
    showElement("gBox-1", "inline-block");
  }
  else if (option === "programming") {
    hideOptions();
    showElement("programming", "block");
    showElement("progBox-1", "inline-block");
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

// let cursor = document.getElementById('cursor');
// let constraint = document.getElementById('progBox-1');
// let width = constraint.offsetLeft;
// let height = constraint.offsetTop;
// onmousemove = (e) =>{


//   if (e.pageX < width && e.pageY < height) {
//     console.log('goo');
//     cursor.style.left = e.pageX + 'px';
//     cursor.style.top = e.pageY + 'px';
//   } else { console.log('no good')}
// }
