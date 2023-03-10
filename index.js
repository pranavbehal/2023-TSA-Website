function toggleAnswer1(elem) {
  var answer = elem.nextElementSibling;
  if (answer.style.display === "block") {
    answer.style.display = "none";
    document.getElementById("qa-icon1").src = "images/plus.png";
  } else {
    answer.style.display = "block";
    document.getElementById("qa-icon1").src = "images/minus.png";
  }
}

function toggleAnswer2(elem) {
  var answer = elem.nextElementSibling;
  if (answer.style.display === "block") {
    answer.style.display = "none";
    document.getElementById("qa-icon2").src = "images/plus.png";
  } else {
    answer.style.display = "block";
    document.getElementById("qa-icon2").src = "images/minus.png";
  }
}

function toggleAnswer3(elem) {
  var answer = elem.nextElementSibling;
  if (answer.style.display === "block") {
    answer.style.display = "none";
    document.getElementById("qa-icon3").src = "images/plus.png";
  } else {
    answer.style.display = "block";
    document.getElementById("qa-icon3").src = "images/minus.png";
  }
}

function toggleAnswer4(elem) {
  var answer = elem.nextElementSibling;
  if (answer.style.display === "block") {
    answer.style.display = "none";
    document.getElementById("qa-icon4").src = "images/plus.png";
  } else {
    answer.style.display = "block";
    document.getElementById("qa-icon4").src = "images/minus.png";
  }
}
