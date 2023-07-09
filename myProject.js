const dynamic_cards = [];

function create_Cards(thisForm) {
  event.preventDefault();
  let title = document.getElementById("eve-tit").value;
  let start_date = document.getElementById("eve-dat1").value;
  let end_date = document.getElementById("eve-dat2").value;
  let speaker = document.getElementById("eve-spe").value;
  let coordinator = document.getElementById("eve-coo").value;
  const card = {
    title: title,
    start_date: start_date,
    end_date: end_date,
    speaker: speaker,
    coordinator: coordinator
  };

  dynamic_cards.push(card);
  document.getElementById("form1").reset();
  displayCards();
}

function displayCards() {
  const cardsContainer = document.getElementById("cardsContainer");
  cardsContainer.innerHTML = "";

  for (let i = 0; i <=  dynamic_cards.length - 1; i++) {
    const Card_1 = dynamic_cards[i];

    const cardElement = document.createElement("div");
    cardElement.classList.add("Card_1");

    const titleElement = document.createElement("p");
    titleElement.textContent = Card_1.title;
    cardElement.appendChild(titleElement);

    const dateElement = document.createElement("p");
    dateElement.textContent = Card_1.start_date + " to " + Card_1.end_date;
    cardElement.appendChild(dateElement);

    const speakerElement = document.createElement("p");
    speakerElement.textContent = Card_1.speaker;
    cardElement.appendChild(speakerElement);

    const coordinatorElement = document.createElement("p");
    coordinatorElement.textContent = Card_1.coordinator;
    cardElement.appendChild(coordinatorElement);

    cardsContainer.appendChild(cardElement);
  }
}
