window.localStorage.setItem("hasCodeRunBefore", "false");
window.onload = function () {
  if (window.localStorage.getItem("hasCodeRunBefore") === "false") {
    console.log(
      `code has not run before, code is ${localStorage.getItem(
        "hasCodeRunBefore"
      )}`
    );
    let oneUseScore = 9999;
    window.localStorage.setItem("highScore", oneUseScore);
    window.localStorage.setItem("hasCodeRunBefore", "true");
  }
};
document.addEventListener("DOMContentLoaded", () => {
  console.log(window.localStorage.getItem("highScore"));
  console.log(+window.localStorage.getItem("highScore"));
  let latestHighScore = +window.localStorage.getItem("highScore");

  document.getElementById("memory-restart").style.display = "none";
  timeDisplay.style.display = "block";
  document.getElementById("highScoreDisplay").style.display = "none";
  const cardArray = [
    {
      name: "emma",
      img: "images/emma.PNG",
    },
    {
      name: "lily",
      img: "images/lily.PNG",
    },
    {
      name: "max",
      img: "images/max.PNG",
    },
    {
      name: "tyler",
      img: "images/tyler.PNG",
    },
    {
      name: "art",
      img: "images/Art.JPEG",
    },
    {
      name: "books",
      img: "images/Books.JPEG",
    },
    {
      name: "emma",
      img: "images/emma.PNG",
    },
    {
      name: "lily",
      img: "images/lily.PNG",
    },
    {
      name: "max",
      img: "images/max.PNG",
    },
    {
      name: "tyler",
      img: "images/tyler.PNG",
    },
    {
      name: "art",
      img: "images/Art.JPEG",
    },
    {
      name: "books",
      img: "images/Books.JPEG",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];
  let locked = false;
  let startTime;
  let elapsedTime;

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "images/Logo 3.PNG");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "images/Logo 3.PNG");
      cards[optionTwoId].setAttribute("src", "images/Logo 3.PNG");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].setAttribute("src", "images/transparent.PNG");
      cards[optionTwoId].setAttribute("src", "images/transparent.PNG");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/Logo 3.PNG");
      cards[optionTwoId].setAttribute("src", "images/Logo 3.PNG");
    }
    cardsChosen = [];
    cardsChosenId = [];
    locked = false;
    resultDisplay.textContent = `Score: ${cardsWon.length}`;
    if (cardsWon.length === cardArray.length / 2) {
      elapsedTime = Math.floor((Date.now() - startTime) / 1000);
      timeDisplay.style.display = "none";
      resultDisplay.textContent = `Congratulations! You found them all in ${elapsedTime} seconds!`;

      document.getElementById("memory-restart").style.display = "block";
      clearInterval(intervalId);
      // saveHighScore();
      console.log(elapsedTime);
      console.log(window.localStorage.getItem("highScore"));
      console.log(latestHighScore);
      if (elapsedTime >= latestHighScore) {
        console.log("less");
        console.log(+window.localStorage.getItem("highScore"));
        console.log(latestHighScore);
        console.log(elapsedTime);
        oneUseScore = latestHighScore;
      } else {
        console.log(elapsedTime);
        window.localStorage.setItem("highScore", elapsedTime);
        latestHighScore = elapsedTime;
        console.log(window.localStorage.getItem("highScore"));
        console.log(latestHighScore);
        oneUseScore = latestHighScore;
      }
      document.getElementById("highScoreDisplay").style.display = "block";
      document.getElementById(
        "highScoreDisplay"
      ).textContent = `High Score: ${latestHighScore} seconds`;
    }
  }

  function flipCard() {
    if (locked) return;
    if (!startTime) startTime = Date.now();
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      locked = true;
      setTimeout(checkForMatch, 500);
    }
  }

  // let saveHighScore = function () {
  //   let highScore = localStorage.getItem("highScore");
  //   if (!highScore || elapsedTime < highScore) {
  //     localStorage.setItem("highScore", elapsedTime);
  //   }
  // };
  // saveHighScore();

  createBoard();

  let intervalId = setInterval(() => {
    elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    if (elapsedTime) timeDisplay.textContent = `Time: ${elapsedTime} seconds`;
  }, 1000);
});
