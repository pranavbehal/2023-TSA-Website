document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("memory-restart").style.display = "none";
  timeDisplay.style.display = "block";
  const cardArray = [
    {
      name: "emma",
      img: "images/emma.png",
    },
    {
      name: "lily",
      img: "images/lily.png",
    },
    {
      name: "max",
      img: "images/max.png",
    },
    {
      name: "tyler",
      img: "images/tyler.png",
    },
    {
      name: "emma",
      img: "images/emma.png",
    },
    {
      name: "lily",
      img: "images/lily.png",
    },
    {
      name: "max",
      img: "images/max.png",
    },
    {
      name: "tyler",
      img: "images/tyler.png",
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
      card.setAttribute("src", "images/blank.png");
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
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].setAttribute("src", "images/transparent.png");
      cards[optionTwoId].setAttribute("src", "images/transparent.png");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
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

  createBoard();

  let intervalId = setInterval(() => {
    elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    if (elapsedTime) timeDisplay.textContent = `Time: ${elapsedTime} seconds`;
  }, 1000);
});
