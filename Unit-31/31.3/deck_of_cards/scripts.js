const $reshuffleDeck = $(".reshuffle-deck");
const $dealAnother = $(".deal-another");
const $shuffleAndDealOne = $(".shuffle-and-deal-one");
const $shuffleAndDealTwo = $(".shuffle-and-deal-two");
const $cardListArea = $(".card-list-area");
const $header = $("h1");
const $chosenNumber = $(".chosen-number");

const newShuffleUrl = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
const dealCardUrl = "https://deckofcardsapi.com/api/deck/"

const newShuffle = async () => {

    $cardListArea.empty();

    let deck = await $.getJSON(newShuffleUrl);

    let deckId = deck["deck_id"];
    console.log(deckId);
    sessionStorage.setItem("deck_id", deckId)

    return deckId;
}

const dealACard = async () => {

    let deckId = sessionStorage.getItem("deck_id");
    let card = await $.getJSON(`${dealCardUrl}${deckId}/draw/?count=1`);

    let cardName = `${card["cards"][0]["value"]} OF ${card["cards"][0]["suit"]}`;

    addCard(cardName);
    return
}

const shuffleDealOne = async () => {
    await newShuffle();
    await dealACard();
    return
}

const shuffleDealTwo = async () => {
    await newShuffle();
    
    let deckId = sessionStorage.getItem("deck_id");
    let card = await $.getJSON(`${dealCardUrl}${deckId}/draw/?count=2`);

    let cardName1 = `${card["cards"][0]["value"]} OF ${card["cards"][0]["suit"]}`;
    let cardName2 = `${card["cards"][1]["value"]} OF ${card["cards"][1]["suit"]}`;

    addCard(cardName1);
    addCard(cardName2);
    return
}


const addCard = (data) => {
    $cardListArea.append(`<div class='card'>${data}</div>`);
}

$reshuffleDeck.on("click", function(evt) { newShuffle() });
$dealAnother.on("click", function(evt) { dealACard() });
$shuffleAndDealOne.on("click", function(evt) { shuffleDealOne() });
$shuffleAndDealTwo.on("click", function(evt) { shuffleDealTwo() });

