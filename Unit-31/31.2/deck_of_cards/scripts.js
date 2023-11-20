const $reshuffleDeck = $(".reshuffle-deck");
const $dealAnother = $(".deal-another");
const $shuffleAndDealOne = $(".shuffle-and-deal-one");
const $shuffleAndDealTwo = $(".shuffle-and-deal-two");
const $cardListArea = $(".card-list-area");
const $header = $("h1");
const $chosenNumber = $(".chosen-number");

const newShuffleUrl = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
const dealCardUrl = "https://deckofcardsapi.com/api/deck/"

const newShuffle = () => {

    $cardListArea.empty();

    let futurePromise = axios.get(newShuffleUrl);

    futurePromise
    .then(data => {
        sessionStorage.setItem("deck_id", data.data.deck_id);
        console.log(data.data.deck_id)})

}

const dealACard = () => {

    let deckId = sessionStorage.getItem("deck_id");
    let futurePromise = axios.get(`${dealCardUrl}${deckId}/draw/?count=1`);

    futurePromise
    .then(data => {
        let cardName = `${(data.data.cards)[0]["value"]} OF ${(data.data.cards)[0]["suit"]}`;
        addCard(cardName);
    })

    return;
}

const shuffleDealOne = () => {

    $cardListArea.empty();
    
    let futurePromise = axios.get(newShuffleUrl);

    futurePromise
    .then(data => {
        sessionStorage.setItem("deck_id", data.data.deck_id);
        console.log(data.data.deck_id)
        return axios.get(`${dealCardUrl}${data.data.deck_id}/draw/?count=1`);
    })
    .then(data => {
        let cardName = `${(data.data.cards)[0]["value"]} OF ${(data.data.cards)[0]["suit"]}`;
        addCard(cardName);
    })

    return;
}

const shuffleDealTwo = () => {

    $cardListArea.empty();
    
    let futurePromise = axios.get(newShuffleUrl);

    futurePromise
    .then(data => {
        sessionStorage.setItem("deck_id", data.data.deck_id);
        console.log(data.data.deck_id)
        return axios.get(`${dealCardUrl}${data.data.deck_id}/draw/?count=2`);
    })
    .then(data => {
        let cardName1 = `${(data.data.cards)[0]["value"]} OF ${(data.data.cards)[0]["suit"]}`;
        let cardName2 = `${(data.data.cards)[1]["value"]} OF ${(data.data.cards)[1]["suit"]}`;
        addCard(cardName1);
        addCard(cardName2);
    })

    return;
}


const addCard = (data) => {
    $cardListArea.append(`<div class='card'>${data}</div>`);
}

$reshuffleDeck.on("click", function(evt) { newShuffle() });
$dealAnother.on("click", function(evt) { dealACard() });
$shuffleAndDealOne.on("click", function(evt) { shuffleDealOne() });
$shuffleAndDealTwo.on("click", function(evt) { shuffleDealTwo() });

